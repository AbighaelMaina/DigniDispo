"use client";
import { useState } from "react";
import { submitCollectionRequest, type CollectionRequest } from "@/lib/collection";
import { SERVICE_TYPES } from "@/lib/content";
import { ROUTE } from "@/lib/route";

const OTHER = "__other";

type FormValues = CollectionRequest & { otherLocation: string };
type Errors = Partial<Record<keyof FormValues, string>>;

const empty: FormValues = {
  name: "", phone: "", location: "", otherLocation: "", date: "", time: "", serviceType: "",
};

function validate(v: FormValues): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Enter your name.";
  if (!/^(\+254|0)[17]\d{8}$/.test(v.phone.replace(/\s/g, ""))) e.phone = "Enter a Kenyan phone number, e.g. 0712 345 678.";
  if (!v.location) e.location = "Choose your estate or area.";
  if (v.location === OTHER && v.otherLocation.trim().length < 2) e.otherLocation = "Tell us your estate or area.";
  if (!v.date) e.date = "Choose a preferred date.";
  if (!v.time) e.time = "Choose a preferred time.";
  if (!v.serviceType) e.serviceType = "Choose a service type.";
  return e;
}

const field = "mt-1.5 w-full min-h-12 rounded-xl border border-teal/25 bg-white px-4 text-base focus:border-teal";

export default function CollectionForm() {
  const [values, setValues] = useState<FormValues>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const today = new Date().toISOString().split("T")[0];

  const set = (k: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setValues({ ...values, [k]: e.target.value });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    try {
      const { otherLocation, ...rest } = values;
      const payload: CollectionRequest = {
        ...rest,
        location: values.location === OTHER ? otherLocation.trim() : values.location,
      };
      const res = await submitCollectionRequest(payload);
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) setValues(empty);
    } catch { setStatus("error"); }
  }

  if (status === "sent")
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-center shadow-sm">
        <h3 className="font-display text-2xl text-teal">Request received.</h3>
        <p className="mt-2 text-charcoal/75">Thank you. We&apos;ll contact you on the number you gave to confirm your collection.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 min-h-12 rounded-full border border-teal px-6 font-semibold text-teal">Make another request</button>
      </div>
    );

  const Err = ({ k }: { k: keyof FormValues }) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1 text-sm text-[#a8442f]">{errors[k]}</p> : null;
  const aria = (k: keyof FormValues) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-3xl bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
      <div className="sm:col-span-2">
        <label htmlFor="name" className="font-medium">Name</label>
        <input id="name" autoComplete="name" value={values.name} onChange={set("name")} className={field} {...aria("name")} />
        <Err k="name" />
      </div>
      <div>
        <label htmlFor="phone" className="font-medium">Phone number</label>
        <input id="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} className={field} {...aria("phone")} />
        <Err k="phone" />
      </div>
      <div>
        <label htmlFor="location" className="font-medium">Estate / Location</label>
        <select id="location" value={values.location} onChange={set("location")} className={field} {...aria("location")}>
          <option value="">Select your area</option>
          <optgroup label={ROUTE.name}>
            {ROUTE.stops.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
          </optgroup>
          <option value={OTHER}>Other (not listed)</option>
        </select>
        <Err k="location" />
      </div>
      {values.location === OTHER && (
        <div className="sm:col-span-2">
          <label htmlFor="otherLocation" className="font-medium">Your estate or area</label>
          <input id="otherLocation" value={values.otherLocation} onChange={set("otherLocation")} className={field} {...aria("otherLocation")} />
          <p className="mt-1 text-sm text-charcoal/65">We&apos;re starting along {ROUTE.name}. We&apos;ll let you know whether we can reach you.</p>
          <Err k="otherLocation" />
        </div>
      )}
      <div>
        <label htmlFor="date" className="font-medium">Preferred collection date</label>
        <input id="date" type="date" min={today} value={values.date} onChange={set("date")} className={field} {...aria("date")} />
        <Err k="date" />
      </div>
      <div>
        <label htmlFor="time" className="font-medium">Preferred time</label>
        <select id="time" value={values.time} onChange={set("time")} className={field} {...aria("time")}>
          <option value="">Select a time</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
        <Err k="time" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="serviceType" className="font-medium">Service type</label>
        <select id="serviceType" value={values.serviceType} onChange={set("serviceType")} className={field} {...aria("serviceType")}>
          <option value="">Select a service</option>
          {SERVICE_TYPES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
        <Err k="serviceType" />
      </div>
      {status === "error" && <p role="alert" className="text-[#a8442f] sm:col-span-2">Something went wrong. Please try again.</p>}
      <button type="submit" disabled={status === "sending"}
        className="min-h-12 rounded-full bg-teal px-6 font-semibold text-cream transition-colors hover:bg-[#0f3736] disabled:opacity-60 sm:col-span-2">
        {status === "sending" ? "Sending…" : "Request Collection"}
      </button>
    </form>
  );
}
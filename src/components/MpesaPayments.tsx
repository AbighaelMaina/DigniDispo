"use client";

import { useState } from "react";

type Props = {
  plan: string;
  amount: string;
};

export default function MpesaPayment({ plan, amount }: Props) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");

  function handlePayment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!/^(07|01)\d{8}$/.test(phone)) {
      alert("Please enter a valid Kenyan phone number.");
      return;
    }

    setStatus("processing");

    setTimeout(() => {
      setStatus("success");
    }, 2500);
  }

  function resetPayment() {
    setStatus("idle");
    setPhone("");
  }

  return (
    <div className="mt-8">
      {status === "idle" && (
        <form onSubmit={handlePayment} className="space-y-3">
          <label className="block text-sm font-semibold">
            M-Pesa Phone Number
          </label>

          <input
            type="tel"
            placeholder="0700000000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-teal/20 bg-white px-4 py-3 text-charcoal outline-none focus:ring-2 focus:ring-teal"
            required
          />

          <button
            type="submit"
            className="w-full rounded-full bg-coral px-6 py-3 font-bold text-charcoal shadow-md transition hover:scale-[1.02]"
          >
            Pay KSh {amount} with M-Pesa
          </button>
        </form>
      )}

      {status === "processing" && (
        <div className="rounded-2xl bg-sage/30 p-6 text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-teal/20 border-t-teal" />

          <p className="font-bold text-teal">
            Processing Payment...
          </p>

          <p className="mt-2 text-sm text-charcoal/70">
            Simulating an M-Pesa STK Push to {phone}.
          </p>

          <p className="mt-2 text-xs text-charcoal/50">
            Please wait...
          </p>
        </div>
      )}

      {status === "success" && (
        <div className="rounded-2xl border-2 border-green-300 bg-green-50 p-6 text-center shadow-lg">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-3xl font-bold text-white">
            ✓
          </div>

          <h3 className="mt-4 text-xl font-bold text-green-800">
            Payment Successful!
          </h3>

          <p className="mt-2 text-sm text-green-700">
            Your {plan} payment of KSh {amount} has been simulated successfully.
          </p>

          <p className="mt-3 rounded-lg bg-green-100 p-3 text-xs font-semibold text-green-800">
            DEMO TRANSACTION — No actual money was transferred.
          </p>

          <button
            type="button"
            onClick={resetPayment}
            className="mt-3 block w-full cursor-pointer rounded-full bg-coral px-6 py-4 text-base font-bold text-charcoal shadow-lg hover:opacity-90"
          >
            Close and Return to Pricing
          </button>

          <button
            type="button"
            onClick={resetPayment}
            className="mt-3 block w-full cursor-pointer rounded-full border-2 border-teal px-6 py-3 font-semibold text-teal hover:bg-teal/10"
          >
            Make Another Payment
          </button>
        </div>
      )}
    </div>
  );
}
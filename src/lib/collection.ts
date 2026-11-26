export type CollectionRequest = {
  name: string; phone: string; location: string; date: string; time: string; serviceType: string;
};

// Placeholder. Swap the body for a real call, e.g.
// await fetch("/api/collection", { method: "POST", body: JSON.stringify(data) })
export async function submitCollectionRequest(data: CollectionRequest): Promise<{ ok: boolean }> {
  console.info("Collection request (not sent yet):", data);
  await new Promise((r) => setTimeout(r, 900));
  return { ok: true };
}

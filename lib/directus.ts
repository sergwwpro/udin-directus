const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL ?? "http://localhost:8055";
const DIRECTUS_TOKEN = process.env.DIRECTUS_ADMIN_TOKEN ?? "";

export async function directusFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${DIRECTUS_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${DIRECTUS_TOKEN}`,
      ...(init?.headers ?? {}),
    },
    next: { revalidate: 60, tags: ["directus"] },
  });
  if (!res.ok) {
    throw new Error(`Directus ${path} → ${res.status} ${res.statusText}`);
  }
  const json = (await res.json()) as { data: T };
  return json.data;
}

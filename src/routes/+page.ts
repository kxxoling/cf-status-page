export const prerender = true;

export async function load(event) {
  const _kvMonitors = await event.fetch('/api/kv').then((r) => r.json());
  const kvMonitors = _kvMonitors as App.MonitorsState;
  return { kvMonitors };
}

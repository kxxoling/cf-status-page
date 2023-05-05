import { getKVMonitors } from '$lib/functions/helpers.js';
import kvJSON from './kv.json';

export async function GET({ request, platform }) {
  if (platform?.env) {
    try {
      const kvMonitors = await getKVMonitors(platform.env);
      return new Response(JSON.stringify(kvMonitors));
    } catch (err) {
      return new Response(err?.message || err?.stack || JSON.stringify(err));
    }
  }

  return new Response(JSON.stringify(kvJSON));
}

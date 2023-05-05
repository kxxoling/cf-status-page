import { processCronTrigger } from '$lib/functions/cronTrigger';

export async function POST({ platform }) {
  if (platform?.env) {
    try {
      const checkDay = await processCronTrigger(platform.env);
      return new Response(`triggered event OK: ${checkDay}`);
    } catch (err: unknown) {
      console.error(err);
      return new Response(err?.message || err?.stack || JSON.stringify(err));
    }
  }

  return new Response('no platform.env');
}

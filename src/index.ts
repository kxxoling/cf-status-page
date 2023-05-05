/**
 * Welcome to Cloudflare Workers! This is your first scheduled worker.
 *
 * - Run `wrangler dev --local` in your terminal to start a development server
 * - Run `curl "http://localhost:8787/cdn-cgi/mf/scheduled"` to trigger the scheduled event
 * - Go back to the console to see what your worker has logged
 * - Update the Cron trigger in wrangler.toml (see https://developers.cloudflare.com/workers/wrangler/configuration/#triggers)
 * - Run `wrangler publish --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/runtime-apis/scheduled-event/
 */
import { processCronTrigger } from '$lib/functions/cronTrigger';

export default {
  async scheduled(
    controller: ScheduledController,
    env: App.Platform['env'],
    ctx: ExecutionContext
  ): Promise<void> {
    await processCronTrigger(env);
  }
};

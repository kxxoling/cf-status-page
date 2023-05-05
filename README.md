# cf-status-page

This is project rewrote from [eidam/cf-workers-status-page](https://github.com/eidam/cf-workers-status-page) with [SvelteKit](https://kit.svelte.dev/), TypeScript, TailwindCSS and Cloudflare stuffs.

## Deploy

Fork your own and add a Cloudflare integration, then edit the `config.json` as your need. Deployment will be triggered automatically after new commits pushed to `main` branch.

Better ways will be available if I have enough time.

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open

# run linter
pnpm run lint

# format
pnpm run format
```

## TODOs

- [ ] YAML/TOML configure file. (Or better configuration)
- [ ] Custom deployment with Docker.
- [ ] Other edge computing services like Vercel?
- [ ] Notifications
  - [ ] Telegram
  - [ ] Slack
  - [ ] Discord
- [ ] tests
- [ ] Better TS coverage.
- [ ] Wrangler CLI support.
- [ ] Search and filter.
- [ ] Actions
  - [ ] PR
  - [ ] Update deps
- [ ] hooks: Husky

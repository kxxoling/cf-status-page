<script lang="ts">
  export let data;

  import MonitorCard from '$lib/components/MonitorCard.svelte';
  import MonitorFilter from '$lib/components/MonitorFilter.svelte';
  import MonitorStatusHeader from '$lib/components/MonitorStatusHeader.svelte';
  import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
  import config from '../config.json';

  const MonitorStore = {
    monitors: config.monitors,
    visible: config.monitors,
    activeFilter: false
  };

  const { kvMonitors } = data;
  const kvMonitorsLastUpdate = kvMonitors?.lastUpdate || {};
  const monitors = kvMonitors.monitors;

  function filterByTerm() {}
</script>

<svelte:head>
  <title>Status Page</title>
  <meta name="description" content="status page" />
</svelte:head>

<div class="min-h-screen">
  <div class="container px-4 mx-auto">
    <div class="flex flex-row items-center justify-between p-4">
      <div class="flex flex-row items-center">
        <img class="w-auto h-8" src={config.settings.logo} alt="Logo" />
        <h1 class="ml-4 text-3xl">{config.settings.title}</h1>
      </div>
      <div class="flex flex-row items-center">
        <ThemeSwitcher />
        <MonitorFilter callback={filterByTerm} />
      </div>
    </div>
    <MonitorStatusHeader {kvMonitorsLastUpdate} />

    {#each MonitorStore.visible as monitor}
      <MonitorCard {monitor} data={monitors[monitor.id]} />
    {/each}

    <div class="flex flex-row justify-between mt-4 text-sm">
      <div>
        Powered by
        <a class="ml-1" href="https://workers.cloudflare.com/" target="_blank">
          Cloudflare Workers
        </a>
      </div>
      <div>
        <a href="https://github.com/kxxoling/cf-status-page" target="_blank"> Get Your Status Page </a>
      </div>
    </div>
  </div>
</div>

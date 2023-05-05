<script lang="ts">
  export let monitor: App.MonitorConfig;
  export let data: App.Monitor;

  import config from '../../config.json';
  import MonitorHistogram from './MonitorHistogram.svelte';
  import MonitorStatusLabel from './MonitorStatusLabel.svelte';
</script>

<div class="card">
  <div class="flex flex-row justify-between items-center mb-2">
    <div class="flex flex-row items-center align-center">
      {#if monitor.description}
        <div class="tooltip">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 mr-2 mx-auto text-blue-500 dark:text-blue-400"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
          <div
            class="object-left ml-8 text-sm text-center transform -translate-y-1/2 content top-1/2 w-72"
          >
            {monitor.description}
          </div>
        </div>
      {/if}

      {#if monitor.linkable === true || monitor.linkable === undefined}
        <a href={monitor.url} target="_blank">
          <div class="text-xl">{monitor.name}</div>
        </a>
      {:else}
        <span>
          <div class="text-xl">{monitor.name}</div>
        </span>
      {/if}
    </div>

    <MonitorStatusLabel kvMonitor={data} />
  </div>

  <MonitorHistogram kvMonitor={data} />

  <div class="flex flex-row justify-between items-center text-gray-400 text-sm">
    <div>{config.settings.daysInHistogram} days ago</div>
    <div>Today</div>
  </div>
</div>

<script lang="ts">
  export let kvMonitor: App.Monitor;

  import config from '../../config.json';
  import MonitorDayAverage from './MonitorDayAverage.svelte';

  function styleByDih(daysBefore: number = 0) {
    const date = new Date();
    date.setDate(date.getDate() - config.settings.daysInHistogram + daysBefore + 1);
    const dayInHistogram = date.toISOString().split('T')[0];
    let bg = '';
    let label = config.settings.dayInHistogramNoData;

    // filter all dates before first check, then check the rest
    if (kvMonitor && kvMonitor.firstCheck <= dayInHistogram) {
      if (
        kvMonitor.checks.hasOwnProperty(dayInHistogram) &&
        kvMonitor.checks[dayInHistogram].fails > 0
      ) {
        bg = 'yellow';
        label = `${kvMonitor.checks[dayInHistogram].fails} ${config.settings.dayInHistogramNotOperational}`;
      } else {
        bg = 'green';
        label = config.settings.dayInHistogramOperational;
      }
    }
    return { bg, label, dayInHistogram };
  }
</script>

<div class="flex flex-row items-center histogram">
  {#each Array.from(Array(config.settings.daysInHistogram).keys()) as daysBefore}
    <div class="hitbox tooltip">
      <div class={`${styleByDih(daysBefore)['bg']} bar`} />
      <div class="w-40 px-2 py-1 mt-2 -ml-20 text-xs text-center content left-1/2">
        {styleByDih(daysBefore)['dayInHistogram']}
        <br />
        <span class="text-sm font-semibold">
          {styleByDih(daysBefore)['label']}
        </span>

        {#if kvMonitor && kvMonitor.checks.hasOwnProperty(styleByDih(daysBefore)['dayInHistogram'])}
          {#each Object.keys(kvMonitor.checks[styleByDih(daysBefore)['dayInHistogram']].res) as key}
            <MonitorDayAverage
              location={key}
              avg={kvMonitor.checks[styleByDih(daysBefore)['dayInHistogram']].res[key].a}
            />
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</div>

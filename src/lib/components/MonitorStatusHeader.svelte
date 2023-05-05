<script lang="ts">
  export let kvMonitorsLastUpdate: App.MonitorsState['lastUpdate'];

  import config from '../../config.json';
  import { locations } from './locations';

  const classes = {
    green:
      'bg-green-200 text-green-700 dark:bg-green-700 dark:text-green-200 border-green-300 dark:border-green-600',
    yellow:
      'bg-yellow-200 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-200 border-yellow-300 dark:border-yellow-600'
  };
  let color: keyof typeof classes = 'green';
  let text = config.settings.allMonitorsOperational;

  if (!kvMonitorsLastUpdate.allOperational) {
    color = 'yellow';
    text = config.settings.notAllMonitorsOperational;
  }
</script>

<div class={`card mb-4 font-semibold ${classes[color]}`}>
  <div class="flex flex-row justify-between items-center">
    <div>{text}</div>

    {#if kvMonitorsLastUpdate.time}
      <div class="text-xs font-light">
        checked
        {Math.round((Date.now() - kvMonitorsLastUpdate.time) / 1000)} sec ago (from
        {locations[kvMonitorsLastUpdate.loc] || kvMonitorsLastUpdate.loc})
      </div>
    {/if}
    <!-- )} -->
  </div>
</div>

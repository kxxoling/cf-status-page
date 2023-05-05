<script lang="ts">
  export let location: string;
  export let avg: number;

  import { locations } from './locations';
</script>

<br />
<small>
  {locations[location] || location}: {avg}ms
</small>

<script lang="ts">
    import {sharedData} from '../global/shared.svelte'
</script>

<h1>8. Universal Reactivity</h1>
<button onclick={() => sharedData.someVeryImportantData = !sharedData.someVeryImportantData}>toggle the very important data</button>
<p>Value of global data: {sharedData.someVeryImportantData}</p>

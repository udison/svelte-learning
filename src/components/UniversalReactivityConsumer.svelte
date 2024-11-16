<script lang="ts">
    import {sharedData} from '../global/shared.svelte'
</script>

<style>
    span {
        background-color: gainsboro;
        border-radius: 4px;
        padding: 0 4px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 13px;
    }
</style>

<p>This value comes from <span>src/global/shared.svelte.ts</span>: {sharedData.someVeryImportantData}</p>

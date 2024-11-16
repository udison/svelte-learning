<script lang="ts">
    let elapsed = $state(0);
    let interval = $state(1000);

    $effect(() => console.log("this effect doesn't read any states, so it runs on component mount only"))

    $effect(() => {
        const id = setInterval(() => {
            elapsed += 1;
        }, interval)

        return () => clearInterval(id)
    })
</script>

<h1>7. Effects</h1>
<small>This timer is made using "$effect" rune</small>
<button onclick={() => interval /= 2}>speed up</button>
<button onclick={() => interval *= 2}>slow down</button>

<p>{elapsed}</p>

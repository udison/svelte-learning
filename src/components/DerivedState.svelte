<script lang="ts">
    let firstState: number[] = $state([]);
    let derivedState = $derived(firstState.reduce((acc, n) => acc + n, 0))

    function addNumber() {
        firstState.push(firstState.length + 1);

        // console.log($state.snapshot(firstState)) 
    }

    $inspect(firstState, ' = ', derivedState)
</script>


<h1>6. Derived State</h1>
<p>firstState = [{firstState.join(', ')}]</p>
<p>derivedState = {derivedState}</p>
<button onclick={addNumber}>add number</button>
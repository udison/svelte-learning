<script>
    let count = $state(0);

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<style>
    .counter-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        border: 1px solid black;
        padding: 8px;
    }

    header {
        display: flex;
        flex-direction: column;
    }

    .counter-container h1 {
        font-family: 'Courier New', Courier, monospace;
        font-size: 32px;
        line-height: 34px;
        margin: 0;
    }

    small {
        font-size: 14px;
        color: gray;
    }
</style>

<h1>4. Reactivity</h1>
<div class="counter-container">
    <header>
        <h1>Counter</h1>
        <small>because nobody ever did this before</small>
    </header>


    <main>
        <button onclick={decrement}>-</button>
        <span>{count}</span>
        <button onclick={increment}>+</button>
    </main>
</div>

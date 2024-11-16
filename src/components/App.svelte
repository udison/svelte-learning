<script>
    import Nested from "./Nested.svelte";
    import Counter from "../components/Counter.svelte";
    import StringsArePlainText from "../components/StringsArePlainText.svelte";
    import DeepReactivity from "./DeepReactivity.svelte";
    import DerivedState from "./DerivedState.svelte";
    import Effects from "./Effects.svelte";
    import UniversalReactivity from "./UniversalReactivity.svelte";
    import UniversalReactivityConsumer from "./UniversalReactivityConsumer.svelte";

    let name = "Svelte";
    let src = "./src/assets/svelte-logo.png";
    let alt = "Svelte icon";
</script>

<style>
    p {
        color: goldenrod;
        font-family: 'Comic Sans MS', cursive;
        font-size: 1.2em;
    }
</style>

<h1>1. Hello {name.toUpperCase()}!</h1>

<img {src} {alt} />
<p>Above is Svelte logo ☝️</p>

<Nested />
<StringsArePlainText />
<Counter />
<DeepReactivity />
<DerivedState />
<Effects />
<UniversalReactivity />
<UniversalReactivityConsumer />
<script lang="ts">
    let numbers: number[] = $state([]);
    let user = $state({
        name: '',
        age: 0
    })

    function addNumber() {
        numbers.push(numbers.length + 1)
    }

    function setUserData() {
        user.name = "Roque";
        user.age = 18;
    }

    function reassignUser() {
        user = {
            name: "Reassigned Roque",
            age: 36,
        }
    }
</script>

<h1>5. DeepReactivity</h1>
<p>numbers = [{numbers.join(', ')}]</p>
<button onclick={addNumber}>add number</button>
<br />
<p>user is called {user.name} and is {user.age}yo</p>
<button onclick={setUserData}>set user</button>
<button onclick={reassignUser}>reassign user</button>
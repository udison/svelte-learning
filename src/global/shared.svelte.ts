// this file declares a global stateful object
// svelte runes can only be used in "*.svelte.js|ts" files

export const sharedData = $state({
    someVeryImportantData: false
})
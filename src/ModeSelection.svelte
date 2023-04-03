<script lang="ts">
  import { type Mode, modes } from "./lib/types";

  export let currentMode: Mode;

  function setMode(mode: Mode) {
    currentMode = mode;
  }
</script>
{#each modes as {mode, name}}
<button
  class:selected={currentMode === mode}
  on:click={() => setMode(mode)}>{name}</button
>
{/each}

<style>
  .selected {
    background-color: #4e7550;
    text-decoration: none;
    margin-left: 10px;
  }

  .selected:hover {
    background-color: #365338;
    text-decoration: none;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 40px;
    text-align: center;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    max-width: 200px;
    text-decoration: none;
    font-family: monospace;
    font-size: 20px;
  }
</style>

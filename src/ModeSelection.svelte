<script>
  export let currentMode = "";

  $:{console.log(currentMode)};
  function setMode(mode) {
    currentMode = mode;
  }

</script>

<button
  class:selected={currentMode === "ServiceMode"}
  on:click={()=> setMode("ServiceMode")}>SERVICE</button
>
<button  class:selected={currentMode === "MontageMode"}
on:click={()=>setMode("MontageMode")}
  >MONTAGE</button
>
<button
class:selected={currentMode === "Placeholder1Mode"}
  on:click={()=>setMode("Placeholder1Mode")}>PLACEHOLDER1</button
>
<button
class:selected={currentMode === "Placeholder2Mode"}
  on:click={()=>setMode("Placeholder2Mode")}>PLACEHOLDER2</button
>

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
    background-color: #4CAF50;
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

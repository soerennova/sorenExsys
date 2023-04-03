<script lang="ts">
  export let text: String;
  let lines = text.split("\n");
</script>

<div class = "smsText">
{#each lines as line, i}
  {#if i != 0}
    <br />
  {/if}
  {line}
{/each}
</div>
<script lang="ts">
  import sms from "./lib/sms";
  import email from "./lib/email"
  import type { Customer as CustomerType, Mode } from "./lib/types";
  import b from "./lib/economic"
  import ModeSelection from "./ModeSelection.svelte";
  import Customer from "./Customer.svelte";
  import Sms from "./lib/Sms.svelte";
  import type economic from "./lib/economic";

  let currentMode: Mode = "serviceMode";
  let smsToggle: boolean;
  let mailToggle: boolean;
  let customerNumber = "";
  let currentCustomer: Promise<CustomerType>;
  let showDiv2: boolean = false;

  function send() {}

</script>

<head>
  <title>Vertical Border Website</title>
</head>
<div class="container">
  <div class="col-1">
    <ModeSelection bind:currentMode />
    <br />
    <p />
    <input
      type="text"
      id="kundeNummer"
      placeholder="Kundenummer"
      bind:value={customerNumber}
      on:keydown={(e) => {
        if (e.key === "Enter") {
          showDiv2 = true;
          currentCustomer = b.fetchCustomerData(customerNumber, currentMode);
        }
      }}
    />
    <p />
  </div>
  {#if showDiv2}
    {#await currentCustomer}
      <p>loading</p>
    {:then thisCustomer}
      <Customer bind:smsToggle bind:mailToggle currentCustomer={thisCustomer} />
    {/await}
  {:else}
    <p>Skriv kundenummer</p>
  {/if}

  {#await currentCustomer then currentCustomer}
    <div class="col-3">
      {#if smsToggle}
        {#await sms.get("serviceMode", currentCustomer)}
          <p>loading...</p>
        {:then sms}
          <Sms text={sms} />
        {/await}
      {/if}
      {#if mailToggle}
        {#await email.get("serviceMode", currentCustomer)}
          <p>loading...</p>
        {:then mail}
          <div class="frameMail">{@html mail}</div>
        {/await}
      {/if}
    </div>
  {/await}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    border: 3px solid black; /* Add border for entire container */
    border-radius: 15px;
  }

  .col-1 {
    flex: 0.8;
    border-right: 1px solid black; /* Add border for right side of column */
    padding: 10px;
    text-align: center;
  }

  input {
    padding: 1px;
    max-width: 180px;
    font-size: 25px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .col-3 {
    flex: 4;
    padding: 10px;
    padding-left: 30px;
    display: inline-flex;
  }

  .frameMail {
    width: 80%;
  }
</style>

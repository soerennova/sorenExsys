<script lang="ts">
  import type { Customer } from "./lib/types";
  export let smsToggle: boolean;
  export let mailToggle: boolean;
  export let currentCustomer: Customer;
</script>

<div class="col-2">
  <ul class="list">
    <li class="kundeInfo" id="name">
      Fulde navn: <br /><strong>{currentCustomer.name}</strong>
    </li>
    <li class="kundeInfo">
      Tlf: <br /><strong>{currentCustomer.phone}</strong>
    </li>
    <li class="kundeInfo">
      Mail: <br /><strong>{currentCustomer.mail}</strong>
    </li>
    <li class="kundeInfo" id="date">
      Dato: <br /><strong>{currentCustomer.date}</strong>
    </li>
    <li class="kundeInfo" id="time">
      Tid: <br /><strong>{currentCustomer.time}</strong>
    </li>
    <li class="kundeInfo" id="adress">
      Adresse: <br /><strong>{currentCustomer.address}</strong>
    </li>

    <p class="toggle">
      <li>Sms:</li>
      <label class="switch">
        <input id="smsCheckbox" type="checkbox" bind:checked={smsToggle} />
        <span class="slider round" />
      </label>
    </p>
    <p class="toggle">
      <li>Mail:</li>
      <label class="switch">
        <input id="mailCheckbox" type="checkbox" bind:checked={mailToggle} />
        <span class="slider round" />
      </label>
    </p>

    <button class="buttonsend" on:click={() => {}}>SEND</button>
  </ul>
</div>



<style>
    .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-bottom: 30px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(145, 106, 106);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .toggle {
    text-align: center;
  }

  li {
    font-size: 30px;
  }
</style>
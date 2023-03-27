
<script lang>
  let currentMode = "Vælg en mode";
  
  /*
  let currentKundeNummer;

  function getKundeNummer(){
    let input1 = document.getElementById(kundeNummer);
    input1.value;
  }

  function loadCustomer(){
    let input1 = document.getElementById(kundeNummer);
    input1.value;
    currentKundeNummer = document.getElementById(kundeNummer).value;
    if(currentKundeNummer.length() <= 6){
      document.getElementsByClassName("kundeInfo").innerHTML = document.getElementById(kundenummer).innerHTML;
    }
    else{
      
    }
  }
  */

  function setMode(mode) {
    currentMode = mode;
    resetMode();
    document.getElementById(mode).classList.add("button-active");
  }

  function resetMode(){
    document.getElementById("ServiceMode").className = "button";
    document.getElementById("MontageMode").className = "button";
    document.getElementById("Placeholder1Mode").className = "button";
    document.getElementById("Placeholder2Mode").className = "button";
    untoggle();
    clearTextArea();
  }

  function untoggle(){
    document.getElementById("smsSwitch").checked = false;
    document.getElementById("mailSwitch").checked = false;
  }

  function clearTextArea(){
    document.getElementById("textAreaMail").innerHTML = "";
    document.getElementById("textAreaSms").innerHTML = "";
  }

  function getMode()
  {
    return currentMode;
  }

  function toggleTextAreaMail() {
    var textArea = document.getElementById("textAreaMail");
    var toggle = document.getElementById("mailSwitch");
    console.log(getMode());
    if (toggle.checked) {
      document.getElementById("textAreaMail").innerHTML = getMode();
    } else {
      document.getElementById("textAreaMail").innerHTML = "";
    }
  }

  function toggleTextAreaSms() {
    console.log("hej");
    var textArea = document.getElementById("textAreaSms");
    var toggle = document.getElementById("smsSwitch");
    if (toggle.checked) {
      document.getElementById("textAreaSms").innerHTML = getMode();
    } else {
      document.getElementById("textAreaSms").innerHTML ="";
    }
  } 

  function send(){
    alert("Sendt!");
    resetMode();
    currentMode = "Vælg en mode";
  }

  /* TODO!:
  FIX KUNDENUMMER VALUE CHECK TO ADD INFO TO VALUES
  */

</script>
<head>
	<title>Vertical Border Website</title>

  <script>
    let name;
    
  </script>
	<style>

body {
    background-color: rgb(192, 206, 193) !important;
}

.container {
  display: flex;
  flex-direction: row;
  border: 3px solid black; /* Add border for entire container */
  border-radius: 15px;
}

li {
    font-size: 30px;
}

.col-1 {
  flex: 1.2;
  border-right: 1px solid black; /* Add border for right side of column */
  padding: 10px;
}

input {
    padding: 1px;
    max-width: 180px;
    font-size: 25px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.button {
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

.button:hover {
  background-color: #3e8e41;
  text-decoration: none;
}

.button:focus {
  background-color: #4e7550;
  text-decoration: none;
}

.button-active {
  background-color: #4e7550;
  text-decoration: none;
  margin-left: 10px;
}

.button-active:hover {
  background-color: #365338;
  text-decoration: none;
}

.buttonsend {
  display: block;
  width: 100%;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  max-width: 300px;
  text-decoration: none;
  font-family: monospace;
  font-size: 40px;
  position: absolute;
  bottom: 3.5%;
  left:22.5%;
}

.buttonsend:hover {
  background-color: #3e8e41;
  text-decoration: none;
}

.col-2 {
  flex: 2;
  border-right: 1px solid black; /* Add border for right side of column */
  padding: 10px;

}

.col-2 ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.col-2 li {
  margin-bottom: 10px;
}

.col-3 {
  flex: 4;
  padding: 10px;
  padding-left: 30px;
}

#textAreaSms {
  width: 300px;
  height: 900px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-left:auto;
  margin-right:auto;
  resize: none;
}

#textAreaMail {
  width: 650px;
  height: 900px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-left:auto;
  margin-right:auto;
  resize: none;
}

.col-3 textarea:focus {
  outline: black;
  border-color: #4CAF50;
}

/* The switch - the box around the slider */
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
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
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
	</style>
</head>
<body>
	<div class="container">
		<div class="col-1">
            <p></p>
			<input type="text" id="kundeNummer" placeholder="Kundenummer" value="" onchange=" /*loadCustomer()*/">
            <p></p>
			<button href="#" class="button" id="ServiceMode" on:click={setMode('ServiceMode')}>SERVICE</button>
			<button href="#" class="button" id="MontageMode" on:click={setMode('MontageMode')}>MONTAGE</button>
			<button href="#" class="button" id="Placeholder1Mode" on:click={setMode('Placeholder1Mode')}>PLACEHOLDER1</button>
			<button href="#" class="button" id="Placeholder2Mode" on:click={setMode('Placeholder2Mode')}>PLACEHOLDER2</button>
		</div>
		<div class="col-2">
			<ul class="list">
				<li class="kundeInfo" id="name">Fulde navn: <br><strong>placeholder</strong></li>
				<li class="kundeInfo" id="date">Dato: <br><strong>placeholder</strong></li>
				<li class="kundeInfo" id="time">Tid: <br><strong>placeholder</strong></li>
				<li class="kundeInfo" id="adress">Adresse: <br><strong>placeholder</strong></li>
				<li class="kundeInfo" id="last">Særlige bemærkninger: <br><strong>placeholder</strong></li>
        <li> Sms: </li>
          <label class="switch">
            <input type="checkbox" id="smsSwitch" on:change={toggleTextAreaSms()}>
            <span class="slider round"></span>
          </label>        
        <li> Mail:</li>
          <label class="switch">
          <input type="checkbox" id="mailSwitch" on:change={toggleTextAreaMail()}>
          <span class="slider round"></span>
          </label>
        <br>
          <a href="#" class="buttonsend" onclick = "send()">SEND</a>
			</ul>
		</div>
		<div class="col-3">
			<textarea id="textAreaSms" placeholder="Sms forhåndsvisning"></textarea>
			<textarea id="textAreaMail" placeholder="Mail forhåndsvisning"></textarea>
		</div>
	</div>

</body>


function addOperation() {
  var x = document.getElementById("fvalue").value;
  //console.log(typeof x)
  var y = document.getElementById("secValue").value;
  s = parseInt(x,10);
  d = parseInt(y,10);
  if(!isNaN(s) && !isNaN(d) )
  {
    var z= s + d;
  }
  else
  {
    var z= null;
  }

  document.getElementById("outValue").value = z;

}
var buttonStart = document.createElement("BUTTON");
var buttonName = document.createTextNode("Start");
var buttonStop = document.createElement("BUTTON");
var buttonStopName = document.createTextNode("Stop");
function createButton() {

  buttonStart.appendChild(buttonName);
  document.body.appendChild(buttonStart);
  buttonStart.id='jsButton';
  buttonStart.setAttribute("onclick", "jsFunc('start')");

  buttonStop.appendChild(buttonStopName);
  document.body.appendChild(buttonStop);
  buttonStop.id='jsButtonstop';
  buttonStop.setAttribute("onclick", "jsFunc('stop')");
      document.getElementById("formDiv").style.display = 'none';
      //document.getElementById("formDiv").style.display = 'none';
    }

 function jsFunc(startValue,minsHrs) {
         if (startValue === "start") {


/*var message = document.getElementById("timer");
message.innerHTML = "The time is " + Date();
*/

var timer = setInterval(clock, 1000);
var msec = 00;
var sec = 00;
var min = 00;

function clock() {
	msec += 1;
	if (msec == 60) {
		sec += 1;
		msec = 00;
		if (sec == 60) {
			sec = 00;
			min += 1;
			if (sec % 2 == 0) {
				alert("Pair");
			}
		}
	}
  var minString = min.toString();
  if (minString.length===1) {
    min1 = "0"+min;
  //  alert("ssss");
  }
  var secString = sec.toString();
  if (secString.length===1) {
    sec1 = "0"+sec;
  //  alert("ssss");
  }
  var msecString = msec.toString();
  if (msecString.length===1) {
    msec1 = "0"+msec;
    //alert("ssss");
  }
  var valuesofTime = min1 + ":" + sec1 + ":" + msec1;
	document.getElementById("timer").innerHTML = valuesofTime;
}
document.getElementById("jsButton").innerHTML = "Pause";
buttonStart.setAttribute("onclick", "jsFunc('pause',valuesofTime)");
              /*var message =   document.getElementById("timer");
              message.innerHTML = "The time is " + Date();
              */

              //document.getElementById("timer").innerHTML = min + ":" + sec + ":" + msec;



         }else if (startValue === "pause") {
          //  alert("test");
          document.getElementById("timer").innerHTML = minsHrs;
         }
         else if (startValue === "stop") {
        // alert("sss");
        alert(window["buttonStart"]);
         }

    }
function hideShow() {
  var fVaule = document.getElementById("fvalue").value;
  var secVaule = document.getElementById("secValue").value;
  if (fVaule === ""  ) {
    alert("Please fill all values");
  }else {
var hideShowDiv = document.getElementById("formDiv");
 hideShowDiv.style.display = "none";
 var detailsDiv = document.getElementById("detailsDiv");
 document.getElementById("fVal").innerHTML = fVaule;
 document.getElementById("secVal").innerHTML = secVaule;
 detailsDiv.style.display = "block";
  }

}
function initPage() {
    document.getElementById("detailsDiv").style.display = 'none';
  var hideShowDiv = document.getElementById("formDiv");
  hideShowDiv.style.display = "block";
  document.getElementById("fvalue").value = "";
 document.getElementById("secValue").value="";
 document.getElementById("outValue").value="";
}

function clearF() {
  document.getElementById('fvalue').value = '';
  document.getElementById('secValue').value = '';
  document.getElementById('outValue').value = '';

}

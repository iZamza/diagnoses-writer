let primal = document.querySelector("#primal");
let concomitant = document.querySelector("#concomitant");
let information = document.querySelector("#information");
let primalOut = document.querySelectorAll(".primalText");
let concomitantOut = document.querySelectorAll(".concomitantText");
let concomitantBlock = document.querySelectorAll(".concomitantBlock");
let informationOut = document.querySelector("#informationText");
let forTitle = document.querySelector(".forTitle>.primalText");
let Clinical = document.querySelector(".Clinical>.clinicalBlock");
let End = document.querySelector(".End>.clinicalBlock");
let statistic = document.querySelector(".statistic>.clinicalBlock");
let concomitantCheck = document.querySelector("#concomitant-check");
let informationCheck = document.querySelector("#information-check");
let print = document.querySelector("#printBtn");
print.addEventListener("click", printPage);
concomitantCheck.onclick = displayConc;
informationCheck.onclick = displayInf;
primal.oninput = primalText;
concomitant.oninput = concomitantText;
information.oninput = informationText;
function primalText(){
	primalOut.forEach(elem => elem.innerHTML = primal.value);
	changeText();
	changeTitle();
}
function concomitantText(){
	concomitantOut.forEach(elem => elem.innerHTML = concomitant.value);
	changeText();
}
function informationText(){
	informationOut.innerHTML = information.value;
	changeText();
}
function displayConc(){
	if(concomitantCheck.checked == true){
		concomitant.style.display = "block";
		concomitantBlock.forEach(elem => elem.style.display = "block");
	}else{
		concomitant.style.display = "none";
		concomitantBlock.forEach(elem => elem.style.display = "none");
	}
}

function displayInf(){
	if(informationCheck.checked == true){
		information.style.display = "block";
		informationOut.style.display = "block";
	}else{
		information.style.display = "none";
		informationOut.style.display = "none";
	}
}
function changeText(){
	if(primal.value.length+concomitant.value.length > 1000){
		Clinical.style.fontSize = "9px";
		End.style.fontSize = "9px";
		statistic.style.fontSize = "9px";
	}else if(primal.value.length+concomitant.value.length > 780){
		Clinical.style.fontSize = "10px";
		End.style.fontSize = "10px";
		statistic.style.fontSize = "10px";
	}
	else if(primal.value.length+concomitant.value.length > 580){
		Clinical.style.fontSize = "11px";
		End.style.fontSize = "11px";
		statistic.style.fontSize = "10px";
	}else if(primal.value.length+concomitant.value.length > 480){
		Clinical.style.fontSize = "13px";
		End.style.fontSize = "13px";
		statistic.style.fontSize = "11px";
	}
	else if(primal.value.length+concomitant.value.length > 380){
		Clinical.style.fontSize = "14px";
		End.style.fontSize = "14px";
		statistic.style.fontSize = "12px";
	}
	else{
		Clinical.style.fontSize = "15px";
		End.style.fontSize = "15px";
		statistic.style.fontSize = "14px";
	}
	console.log(primal.value.length+concomitant.value.length);
};

function changeTitle(){
	if(primal.value.length > 1000){
		forTitle.style.fontSize = "10px";
	}else if(primal.value.length > 800){
		forTitle.style.fontSize = "12px";
	}
	else if(primal.value.length > 610){
		forTitle.style.fontSize = "14px";
	}else if(primal.value.length > 500){
		forTitle.style.fontSize = "16px";
	}
	else if(primal.value.length > 380){
		forTitle.style.fontSize = "18px";
	}
	else if(primal.value.length > 255){
		forTitle.style.fontSize = "20px";
	}
	else if(primal.value.length > 136){
		forTitle.style.fontSize = "24px";
	}else{
		forTitle.style.fontSize = "32px";
	}
	console.log("Primal value: " + primal.value.length);
}

function printPage(){
	window.print();
}

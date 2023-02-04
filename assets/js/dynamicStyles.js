let butt = document.getElementById("butt");
let grays = document.getElementsByClassName("grayOut");
let newBanner = document.getElementsByClassName("newBan");


let i = 0;

for (let gray of grays){
 
 	i++;
	let toInsert = '<div class="grayDiv"><img class="csBanner" src="assets/img/cs_banner.png" alt="comming soon"></div>';
	gray.insertAdjacentHTML('afterbegin', toInsert);
	
 	/* available options beforebegin, afterbegin, beforeend, afterend */
}

for (let newB of newBanner){
 
 	i++;
	let toInsert = '<div class="newDiv"><img class="nwBanner" src="assets/img/cartel_nuevo2.png" alt="nuevo"></div>';
	newB.insertAdjacentHTML('beforebegin', toInsert);
	
 	/* available options beforebegin, afterbegin, beforeend, afterend */
}



butt.addEventListener("click",function(){


let nav = document.getElementById("mainNav");


	nav.classList.toggle('deployNav');


});

let oLinks = document.getElementsByClassName('oLink');
let popUp = document.getElementsByClassName('popUp');

for (let oli of oLinks){
	oli.addEventListener("click",goOut);
}

function goOut (){
let id = this.id;
var dest;

switch (id)

{
case 'fb':
	dest = "https://www.facebook.com/donkanagencia";
	break;

case 'ig':
	dest = "https://www.instagram.com/donkanagencia";
	break;
case 'ln':
	dest = "https://www.linkedin.com/in/donkanagencia";
	break;
default:
	dest = "https://www.donkanagencia.com";


}

let ncol = document.getElementById("navcol-1");
let nav = document.getElementById("mainNav");
if (nav.classList.contains('deployNav')){
	ncol.classList.toggle('show');
	nav.classList.remove('deployNav');
}



window.open(dest);



}

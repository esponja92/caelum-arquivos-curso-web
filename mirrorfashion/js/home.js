document.querySelector('#form-busca').onsubmit = function validaBusca(){
	if(document.querySelector('#q').value == ''){
		document.querySelector('#q').style.background = 'red';
		return false;
	}
};

document.querySelector('#q').onfocus = function resetaBusca(){
	document.querySelector('#q').style.background = 'white';
};

var banners = ["img/destaque-home.png","img/destaque-home-2.png"];
var atual = 0;

function trocaBanner(){
	atual = (atual + 1) % 2;
	document.querySelector('.destaque img').src = banners[atual];
}

var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function(){
	if(controle.className == 'pause'){
		clearInterval(timer);
		controle.className = 'play';
	}
	else{
		timer = setInterval(trocaBanner, 4000);
		controle.className = 'pause';
	}

	return false;
};
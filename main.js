// Create a reference for the canvas
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Escreva um código para obter o evento key-pressed
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
        {
			aplhabetkey();
			document.getElementById("d1").innerHTML="Você pressiono uma tecla alfabeto";
			console.log("alphabet key");
		}
	}
		
	   


function aplhabetkey()
{
    img_image="alfabeto.png"
	add();
	//envie as imagens com suas respectivas mensagens. 

}
function numberkey()
{
	img_image="número.png"
	add();
}
function arrowkey()
{
	img_image="direcional.png"
}
function specialkey()
{
	img_image="especial.png"
}
function otherkey()
{
	img_image="outras.png";
	add();
}

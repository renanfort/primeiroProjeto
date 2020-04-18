// Função pegar cor e colocar codigo para copiar

var css = document.getElementById("myinput").value;
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	document.getElementById("myinput").value = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// função copiar

  let copiarTexto = () =>{
            const inputTest = document.querySelector("#myinput");
            inputTest.select();
            document.execCommand('copy');
        };
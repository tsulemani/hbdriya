const text = document.getElementById("text");

const prog = "I know you are ...  ";
let idx = 1;
setInterval(writeText, 150);

function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;
	
	if(idx > prog.length){
      idx = 1;
    }
	


}

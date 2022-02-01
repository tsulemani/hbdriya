const text = document.getElementById("text");
const prog = "Happy Birthday Riya... /n I know you are ...  ";
let idx = 1;
setInterval(writeText, 130);
function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;
	
	if(idx > prog.length){
      idx = 1;
    }



}

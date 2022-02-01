const text = document.getElementById("text");
const prog = "Happy Birthday Riya... \n I know you are not much into birthday celebration. \n You will be like why did you do this, why did you put this much of effort. \n To be honest I didn't do anything. \n I had this idea for so long that I couldn't let it go. \n Anyways, it's your birthday, I hope that you have a better year ahead.\n I better not write those not so useful long paragraphs...";
let idx = 1;
setInterval(writeText, 130);
function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;
	
	if(idx > prog.length){
      idx = 1;
    }



}

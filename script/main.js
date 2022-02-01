const text = document.getElementById("text");

const prog = "We Love Programming!";
let idx = 1;
sleep(999000)
setInterval(writeText, 1000);

function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;
	
	if(idx > prog.length){
      idx = 1;
    }
	
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}	

}

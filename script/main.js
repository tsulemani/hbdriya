const text = document.getElementById("text");

const prog = "I know you are not very much into birthday celebration, I just wanted to do something. To be honest I did not do much. I jhope you have a better year ahead...  ";
let idx = 1;
sleep(9000)
setInterval(writeText, 150);

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

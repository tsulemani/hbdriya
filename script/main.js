const text = document.getElementById("text");
const prog = "I know you are ...  ";
writeText("aaaaaaaaaaaaaaaaaaaaaaaa")
let idx = 1;
sleep1(5000);
setInterval(writeText, 150);
function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;
	
	if(idx > prog.length){
      idx = 1;
    }
	function sleep1(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
	  writeText(currentTime); 
   }
}


}

var getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles); HTMLCollection

var getacccontents = document.querySelectorAll(".acccontent");
// console.log(getacccontent);

for(var x= 0 ; x < getacctitles.length; x++){
	// console.log(x);

	getacctitles[x].addEventListener('click', function(e){
		// console.log(e.target);
		// console.log(this);

		this.classList.toggle("active");
		var getcontent = this.nextElementSibling;
		// console.log(getcontent);

		if(getcontent.style.height){
			getcontent.style.height=null;
		}else{
			// getcontent.style.height="50px";

			// console.log(getcontent.scrollHeight);
			getcontent.style.height=getcontent.scrollHeight +"px";
		}
	});

	// getacccontents[0].style.height = getacccontents[0].scrollHeight +"px";
	if(getacctitles[x].classList.contains("active")){
		getacccontents[x].style.height = getacccontents[x].scrollHeight +"px";
	}

}
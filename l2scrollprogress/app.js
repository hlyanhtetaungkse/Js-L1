var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
	scrollpoint();
};

function scrollpoint(){
	// console.log('I am working');

	// scrolltop
	// project height(scrollheight)
	// client height

	// project height - client height

	// scrolltop * 100 / (project height - client height)

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);

	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);

	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	var calcheight = getscrollheight - getclientheight;

	// var getfinal = Math.round((getscrolltop*100)/calcheight);
	// console.log(getfinal);

	var getfinal = Math.round((getscrolltop/calcheight)*100);
	// console.log(getfinal);

	getprogressbar.style.width = `${getfinal}%`;
}



function printme(){
	window.print();
}
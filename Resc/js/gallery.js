var input = document.getElementById('Filter_Input');
var list = document.getElementsByClassName('imgCont');
var present_page = 1;

input.addEventListener("keyup",function(event){
	if(event.keyCode === 13){
		event.preventDefault();
		document.getElementById("Input_Button").click();
	}
});

function load_10(page) {
	// var img = document.getElementsByClassName('imgCont');
	// if(list_proc == 1)
	// 	img = list;
	var img = list;
	var limit = 10;
	for (var i = 0; i < img.length; i++) {
		img[i].classList.remove('tag-hide');
	}


	for(var i = 0; i < img.length; i++){
		if(!img[i].classList.contains('tag-hide') && i>=(page-1)*10){
			if(limit>0)
				limit--;
			else
				img[i].classList.add('tag-hide');
		}
		else
			img[i].classList.add('tag-hide');
	}
}

function next_page(argument) {
	var l = list.length;
	var m = (present_page)*10;
	if(m<l){
		present_page++;
		load_10(present_page);
		document.getElementById('page_number').innerText = present_page;
	}else
	alert("last page available");
}

function prev_page(argument) {
	if(present_page>1){
		present_page--;
		load_10(present_page);
		document.getElementById('page_number').innerText = present_page;
	}else
	alert("currently at first page");
}

function tagFilter(argument) {
	var tags = document.getElementById('Filter_Input').value;
	tags = tags.split(' ');
	var img = document.getElementsByClassName("imgCont");
	list = [];

	if(tags[0] != '')
	for (var i = 0; i < tags.length; i++) {
		//converting tag into its class name
		switch(tags[i].toLowerCase()){
			case "arknights":
			case "ak":
			case "ark":
			case "tag-ark":
			case "arknight":
				tags[i] = "tag-ark";
				break;
			case "fatego":
			case "fgo":
			case "fategrandorder":
			case "tag-fgo":
				tags[i] = "tag-fgo";
				break;
			case "paper":
			case "drawing":
			case "irl":
			case "tag-dra":
				tags[i] = "tag-dra";
				break;
			case "misc":
			case "etc":
			case "others":
			case "tag-mis":
				tags[i] = "tag-mis";
				break;
			case "digital":
			case "dig":
			case "tag-dig":
				tags[i] = "tag-dig";
				break;
			case "scenery":
			case "landscape":
			case "scene":
			case "tag-sce":
				tags[i] = "tag-sce";
				break;
			default:
				alert("no tag found for "+tags[i]);
		}
	}

	for (var i = 0; i < img.length; i++) {
		var pass = true;
		for(var i2 = 0; i2 < tags.length; i2++){
			if(!img[i].classList.contains(tags[i2])){
				pass = false;
				break;
			}
		}
		if(pass || tags[0] == ''){
			img[i].classList.remove('tag-hide');
			list.push(img[i]);
		}
		else
			img[i].classList.add('tag-hide');
	}
	present_page = 1;
	document.getElementById('page_number').innerText = present_page;
	load_10(1);
}
function tagFilter(argument) {
	var tags = document.getElementById('Filter_Input').value;
	tags = tags.split(' ');
	var img = document.getElementsByClassName("imgCont");

	for (var i = 0; i < tags.length; i++) {
		//converting tag into its class name
		switch(tags[i].toLowerCase()){
			case "arknights":
			case "ak":
			case "ark":
			case "tag-ark":
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
			default:
				alert("no tag found for "+img[i]);
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
		if(pass || tags.length == 0)
			img[i].classList.remove('tag-hide');
		else
			img[i].classList.add('tag-hide');
	}
}
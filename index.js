
	var getCoordinate = function(obj,Xoffset) {
		var Xoffset = Xoffset|| 0;
		var msg = "";
		var parentOffset = $(obj).parent().offset();
		var X = event.pageX - circleWidth - parentOffset.left - Xoffset;
		var Y = event.pageY - circleWidth - parentOffset.top;
		msg += X + "px " + Y + "px";
		return msg;
	}

	var circleWidth = 125;

	let fullPage1 = document.getElementById("full_page")
	fullPage1.onmousemove = function(event) {
			var msg = "";
			msg += event.pageX - circleWidth + "px " + parseInt(event.pageY - circleWidth) + "px";
			$("#svg-normal-mask").css('-webkit-mask-position', msg);
	};

	let full_page2 = document.getElementById("full_page2")
	let svgMaskClass2 = document.getElementsByClassName("svg-normal-mask2")[0];
	// let fullPageClass2 = document.getElementsByClassName("full_page2")[0];
	console.log("svgMaskClass2-->", svgMaskClass2)
	full_page2.onmousemove = function(event) {
		svgMaskClass2.setAttribute('id','svg-normal-mask2')
			var position = getCoordinate(this,$(this).offset().left);
			let svgMask = document.getElementById("svg-normal-mask2");
			// svgMask.style("css", "-webkit-mask-position:")
			// svgMask.style.maskPosition = position;
			$("#svg-normal-mask2").css('mask-position', position);

	};
	full_page2.onmouseout = function() {
		// console.log("out here")
		// document.getElementsByClassName("svg-normal-mask2")[0].remove();
	};
	// document.getElementById("svg-normal-mask2").remove();


	let full_page3 = document.getElementById("full_page3")
	full_page3.onmousemove = function(event) {
			var position = getCoordinate(this);
			$("#svg-normal-mask3").css('-webkit-mask-position', position);

	};

	let full_page4 = document.getElementById("full_page4")
	full_page4.onmousemove = function(event) {
			var position = getCoordinate(this,$(this).offset().left);
			$("#svg-normal-mask4").css('-webkit-mask-position', position);
	};

	let full_page5 = document.getElementById("full_page5")
	full_page5.onmousemove = function(event) {
			var position = getCoordinate(this);
			$("#svg-normal-mask5").css('-webkit-mask-position', position);
	};

	let full_page6 = document.getElementById("full_page6")
	full_page6.onmousemove = function(event) {
			var position = getCoordinate(this,$(this).offset().left);
			$("#svg-normal-mask6").css('-webkit-mask-position', position);
	};

	let full_page7 = document.getElementById("full_page7")
	full_page7.onmousemove = function(event) {
			var position = getCoordinate(this);
			$("#svg-normal-mask7").css('-webkit-mask-position', position);

	};

//==================================================================================================
//this function returns the name of the client browser
function getBrowserName(){ 
	var browserName = ""; 
	var ua = navigator.userAgent.toLowerCase(); 
	if ( ua.indexOf( "opera" ) != -1 ){ browserName = "opera";} 
	else if ( ua.indexOf( "msie" ) != -1 ) { browserName = "msie"; } 
	else if ( ua.indexOf( "safari" ) != -1 ) { browserName = "safari"; 	} 
	else if ( ua.indexOf( "mozilla" ) != -1 ) { if ( ua.indexOf( "firefox" ) != -1 ) { browserName = "firefox"; } else { browserName = "mozilla"; } } 
	return browserName; 
}
//==================================================================================================
//this segment defines the styles of the error window
var alert_width = 300;
var alert_height = 150;
var button_font = "Arial, Helvetica, sans-serif";
var button_font_size = 11;
var button_height = 16;
var button_width = 15;
var button_bg_color = "#98a436";
var button_border_color = "#999999";
var header_font = "Arial, Helvetica, sans-serif";
var header_font_size = 12;
var header_font_weight = "bold";
var header_font_color = "#FFFFFF";
var header_bg_color = "#1d2f50";
var header_over_color = "#666666";
var alert_font = "Arial, Helvetica, sans-serif";
var alert_font_weight = "normal";
var alert_font_size = 11;
var alert_font_color = "#000000";
//==================================================================================================
var header = "NABARD KNOWLEDGE MANAGEMENT SYSTEM";	// header text of the error window.
//==================================================================================================
function create_alert(msg){
	try{
		var viewportwidth = 0;
		var viewportheight = 0;
		if(getBrowserName()=="msie"){viewportwidth = document.documentElement.clientWidth; viewportheight = document.documentElement.clientHeight;}
		else{viewportwidth=document.getElementsByTagName('body')[0].clientWidth;viewportheight=document.getElementsByTagName('body')[0].clientHeight;}
		if(viewportheight<getHeight()){viewportheight=getHeight();}
		d = document;
		if(d.getElementById("alert_container")) return;
		var parent = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
		parent.id = "alert_container";
		var div_str = "";
		div_str = div_str + "<div class='mask' id='mask' style='filter:alpha(opacity=20);-moz-opacity:.50;opacity:.50; position:absolute; ";
		div_str = div_str + " background:#000000; width:"+viewportwidth+"px; height:"+viewportheight+"px;POSITION:absolute; TOP:0px; left:0px; '></div>";
		parent.innerHTML = div_str;
		var btn_style = "";
				btn_style = btn_style + "font-family: "+button_font+";font-size: "+button_font_size+"px;font-weight: bold;";
				btn_style = btn_style + "color: #FFFFFF;background-color: "+button_bg_color+";padding: auto;";
				btn_style = btn_style + "height: "+button_height+"px;width: "+button_width+"px;border: 1px solid "+button_border_color+";";
		var header_style = "";
				header_style = header_style + "font-family: "+header_font+";font-size: "+header_font_size+"px;font-weight: "+header_font_weight+";";
				header_style = header_style + "color: "+header_font_color+";white-space: nowrap;";
		var msg_style = "";
				msg_style = msg_style + "font-family: "+alert_font+";font-size: "+alert_font_size+"px;font-weight: "+alert_font_weight+";";
				msg_style = msg_style + "color: "+alert_font_color+";";
		var ok_style = "";
				ok_style = ok_style + "font-family: "+button_font+";font-size: "+button_font_size+"px;font-weight: bold;";
				ok_style = ok_style + "color: #FFFFFF; background-color: "+button_bg_color+";padding: auto;";
				ok_style = ok_style + "height:auto;width:auto;border: 1px solid "+button_border_color+";";
		var obj = new Object();
		var myarray = new Array();
		myarray[0] = btn_style;
		myarray[1] = header_style;
		myarray[2] = msg_style;
		myarray[3] = ok_style;
		myarray[4] = header_bg_color;
		myarray[5] = msg;
		myarray[6] = header;
		var sFeatures="dialogHeight:"+alert_height+"px; dialogWidth:"+alert_width+"px;edge:sunken;center:yes;help:no;resizable:off;scrollbars:off;unadorned:off;status:off;location=0;status=0;menubar=0;toolbar=0";
		var ret = showModalDialog('alert.html', myarray, sFeatures);
		document.getElementsByTagName("body")[0].removeChild(document.getElementById("alert_container"));
	}catch(e){}
}
//==================================================================================================
function getHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}
//==================================================================================================
window.alert = function (msg) {
	 create_alert(msg);
}
//==================================================================================================
//
function window_height(){
	try{
		var viewportheight = 0; 
		if(getBrowserName()=="msie"){viewportheight = document.documentElement.clientHeight;}
		else{viewportheight=document.getElementsByTagName('body')[0].clientHeight;}	
		if(viewportheight<getHeight()){viewportheight=getHeight();}	
		return viewportheight;
	}catch(e){}
}

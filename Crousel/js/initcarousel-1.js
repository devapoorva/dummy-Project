

jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder,
            barheight:64,
            showtitle:true,
            showdescription:false,
            shownavigation:false,
            thumbwidth:80,
            thumbheight:60,
            thumbtopmargin:12,
            thumbbottommargin:8,
            titlebottomcss:'{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}',
            descriptionbottomcss:'{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}'
        });
    }
    jQuery(".product_slider").amazingcarousel({
        jsfolder:jsFolder,
        width:220,
        height:180,
        skinsfoldername:"",
        itembottomshadowimagetop:99,
        random:false,
        rownumber:1,
        skin:"Gallery",
        responsive:true,
        itembottomshadowimage:"itembottomshadow-100-98-3.png",
        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
        showhoveroverlayalways:false,
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        supportiframe:false,
        lightboxthumbwidth:80,
        imagefillcolor:"FFFFFF",
        showwatermark:false,
        arrowwidth:32,
        transparent:false,
        continuousduration:2500,
        watermarkpositioncss:"display:block;position:absolute;bottom:8px;right:8px;",
        lightboxthumbheight:60,
        navspacing:8,
        playvideoimage:"playvideo-64-64-0.png",
        usescreenquery:false,
        screenquery:{
	tablet: {
		screenwidth: 900,
		visibleitems: 2
	},
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navwidth:16,
        navheight:16,
        watermarkimage:"",
        watermarkstyle:"text",
        imageheight:180,
        lightboxthumbbottommargin:8,
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        enabletouchswipe:true,
        navstyle:"none",
        arrowstyle:"always",
        navswitchonmouseover:false,
        showitembackgroundimage:false,
        watermarklink:"http://amazingcarousel.com?source=watermark",
        arrowimage:"../image/arrows-32-32-3.png",
        showbackgroundimage:false,
        spacing:20,
        scrollitems:1,
        navdirection:"horizontal",
        watermarktarget:"_blank",
        bottomshadowimagewidth:110,
        donotcrop:false,
        showhoveroverlay:true,
        height:180,
        itembackgroundimagewidth:100,
        backgroundimagetop:-40,
        width:220,
        hoveroverlayimage:"hoveroverlay-64-64-5.png",
        hidehoveroverlayontouch:false,
        transitioneasing:"easeOutExpo",
        lightboxshownavigation:false,
        itembackgroundimage:"",
        direction:"horizontal",
        watermarktext:"amazingcarousel.com",
        lightboxbarheight:64,
        continuous:false,
        pauseonmouseover:true,
        navimage:"bullet-16-16-0.png",
        lightboxthumbtopmargin:12,
        arrowhideonmouseleave:1000,
        backgroundimagewidth:110,
        loop:0,
        arrowheight:32,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        lightboxshowdescription:false,
        bottomshadowimagetop:95,
        showitembottomshadow:false,
        playvideoimagepos:"center",
        circular:true,
        showbottomshadow:false,
        showplayvideo:false,
        itembackgroundimagetop:0,
        lightboxshowtitle:true,
        scrollmode:"item",
        backgroundimage:"",
        lightboxnogroup:false,
        navmode:"page",
        interval:3000,
        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#666;padding:2px 4px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
        itembottomshadowimagewidth:100,
        visibleitems:4,
        imagewidth:240,
        transitionduration:1000,
        autoplay:true
    });
});






jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder,
            barheight:64,
            showtitle:false,
            showdescription:false,
            shownavigation:false,
            thumbwidth:80,
            thumbheight:60,
            thumbtopmargin:12,
            thumbbottommargin:8,
            titlebottomcss:'{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}',
            descriptionbottomcss:'{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}'
        });
    }
    jQuery("#cl_logo").amazingcarousel({
        jsfolder:jsFolder,
        width:210,
        height:80,
        skinsfoldername:"",
        watermarkimage:"",
        itembottomshadowimagetop:100,
        donotcrop:false,
        navheight:16,
        random:true,
        showhoveroverlay:false,
        height:80,
        arrowheight:32,
        itembackgroundimagewidth:100,
        skin:"Simplicity",
        responsive:true,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        navstyle:"none",
        enabletouchswipe:true,
        backgroundimagetop:-40,
        arrowstyle:"always",
        bottomshadowimagetop:95,
        arrowhideonmouseleave:1000,
        transitionduration:1000,
        lightboxshowtitle:false,
        hoveroverlayimage:"hoveroverlay-64-64-6.png",
        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#666;padding:2px 4px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
        itembottomshadowimage:"itembottomshadow-100-100-5.png",
        lightboxshowdescription:false,
        width:210,
        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
        showhoveroverlayalways:false,
        navimage:"bullet-16-16-0.png",
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        lightboxshownavigation:false,
        showitembackgroundimage:false,
        itembottomshadowimagewidth:100,
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"arrows-32-32-1.png",
        scrollitems:1,
        showbottomshadow:false,
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        supportiframe:false,
        watermarktext:"amazingcarousel.com",
        itembackgroundimagetop:0,
        showbackgroundimage:false,
        lightboxbarheight:64,
        showplayvideo:false,
        spacing:20,
        lightboxthumbwidth:80,
        scrollmode:"item",
        navdirection:"horizontal",
        watermarkstyle:"text",
        backgroundimage:"",
        lightboxthumbtopmargin:12,
        watermarktarget:"_blank",
        watermarkpositioncss:"display:block;position:absolute;bottom:8px;right:8px;",
        arrowwidth:32,
        transparent:false,
        navmode:"page",
        showwatermark:false,
        itembackgroundimage:"",
        transitioneasing:"easeOutExpo",
        lightboxthumbbottommargin:8,
        interval:2000,
        showitembottomshadow:false,
        lightboxthumbheight:60,
        navspacing:15,
        pauseonmouseover:true,
        imagefillcolor:"FFFFFF",
        playvideoimage:"playvideo-64-64-0.png",
        visibleitems:4,
        navswitchonmouseover:false,
        direction:"horizontal",
        usescreenquery:false,
        bottomshadowimagewidth:110,
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        backgroundimagewidth:110,
        navwidth:16,
        loop:0,
        autoplay:true
    });
});



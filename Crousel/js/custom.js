// JavaScript Document
				var tpj=jQuery;
				tpj.noConflict();
				var revapi3;
				
				tpj(document).ready(function() {
								
				if(tpj('#rev_slider_3_1').revolution == undefined)
					revslider_showDoubleJqueryError('#rev_slider_3_1');
				else
				   revapi3 = tpj('#rev_slider_3_1').show().revolution(
					{
						dottedOverlay:"none",
						delay:2000,
						startwidth:1170,
						startheight:400,
						hideThumbs:200,

						thumbWidth:100,
						thumbHeight:50,
						thumbAmount:4,

						navigationType:"none",
						navigationArrows:"solo",
						navigationStyle:"round",

						touchenabled:"on",
						onHoverStop:"on",

						navigationHAlign:"center",
						navigationVAlign:"bottom",
						navigationHOffset:0,
						navigationVOffset:20,

						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:20,
						soloArrowLeftVOffset:0,

						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:20,
						soloArrowRightVOffset:0,

						shadow:0,
						fullWidth:"on",
						fullScreen:"off",

						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,

						shuffle:"off",						
						autoHeight:"off",						
						forceFullWidth:"off",												

						hideThumbsOnMobile:"on",
						hideBulletsOnMobile:"on",
						hideArrowsOnMobile:"on",
						hideThumbsUnderResolution:0,						
						
					});
				
				});
				
  
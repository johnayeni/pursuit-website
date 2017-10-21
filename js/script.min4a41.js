function initMap(){var e=$("#map-canvas");e&&function(e){if(void 0!==e&&e.length){_location=new google.maps.LatLng(e[0],e[1]),markerTimeout=1e3,MY_MAPTYPE_ID="custom_style",featureOpts=[],mapOptions={center:_location,zoom:17,disableDefaultUI:!0,scrollwheel:!0,navigationControl:!1,mapTypeControl:!1,scaleControl:!1,draggable:!0,styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{lightness:40},{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{visibility:"simplified"},{gamma:"0.00"},{lightness:"74"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#243745"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{lightness:"3"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#243745"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#243745"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"},{color:"#575b66"}]},{featureType:"road",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#333333"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{color:"#575b66"}]},{featureType:"water",elementType:"geometry",stylers:[{lightness:17},{color:"#2c2c2c"}]}]},map=new google.maps.Map(document.getElementById("map-canvas"),mapOptions),styledMapOptions={name:"Cherrypick Games"};var t={path:"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",fillColor:"#ee3340",fillOpacity:1,scale:3,strokeWeight:0,anchor:new google.maps.Point(12,15)};new google.maps.Marker({position:_location,icon:t,map:map}),google.maps.event.addDomListener(window,"resize",function(){map.setCenter(_location)})}}(e.data("coords").split(","))}!function(e){var t=jQuery(window);t.on("mousewheel DOMMouseScroll",function(e){e.preventDefault();var a=e.originalEvent.wheelDelta/120||-e.originalEvent.detail/3,o=t.scrollTop()-parseInt(200*a);TweenMax.to(t,.4,{scrollTo:{y:o,autoKill:!0},ease:Power1.easeOut,autoKill:!0,overwrite:5})})}(),function(e){function t(){window.location=newLocation}var a=["download-link","fancybox","collapse","btn-yt"],o=e("#cherry-preloader-wrapper");o.toggleClass("preloader-hidden",!0),setTimeout(function(){o.css("pointer-events","none")},400),e("a").click(function(n){var i=e(this),r=!1;a.forEach(function(e){var t=-1!==i.attr("href").indexOf("mailto:"),a=0===i.attr("href").indexOf("#");(i.hasClass(e)||i.data("toggle")==e||"_blank"==i.attr("target")||t||a)&&(r=!0)}),r||(n.preventDefault(),newLocation=this.href,o.css("pointer-events","auto"),o.toggleClass("preloader-hidden",!1),setTimeout(function(){t()},400))})}(jQuery),function(e){function t(){e(window).outerWidth()>=o?i||(i=!0,a(),setTimeout(function(){n.trigger("next.owl.carousel")},1e3)):i&&(i=!1,a(),setTimeout(function(){n.trigger("next.owl.carousel")},1e3))}function a(){var t=0;i?(n.find(".middle-item").each(function(){e(this).removeClass("middle-item")}),n.find(".active").each(function(){2===++t&&e(this).addClass("middle-item")})):n.find(".owl-item").each(function(){e(this).addClass("middle-item")})}var o=1200,n=e(".press-carousel");n.owlCarousel({margin:0,nav:!0,navText:["",""],dots:!0,autoplay:!1,autoplaySpeed:1e3,autoplayTimeout:3e3,autoplayHoverPause:!1,loop:!0,responsive:{0:{items:1},1200:{items:3}}});var i=!0;e(window).resize(function(){t()}),n.on("translated.owl.carousel",function(e){a()}),t(),a(),n.trigger("next.owl.carousel")}(jQuery),function(e){function t(e){for(var t=window.innerWidth,a=window.innerHeight,o=0;o<u.length;++o){u[o].tx=(e.x-t/2)/t*u[o].tmax,u[o].ty=(e.y-a/2)/a*u[o].tmax*a/t;var n="translate3d("+u[o].tx+"%,"+u[o].ty+"%,0)";u[o].css({transform:n})}}var a=e(document).outerWidth(),o=e(".fourth-set"),n=e(".third-set"),i=e(".second-set"),r=e(".surgeon"),s=e(".emma"),l=e(".doctor"),c=.25;"undefined"!=typeof paralaxFactor&&(c=paralaxFactor),o.tmax=1*c,n.tmax=1.8*c,i.tmax=2.2*c,r.tmax=18*c,s.tmax=20*c,l.tmax=15*c;var u=[o,n,i,r,s,l];e(window).resize(function(){a=e(document).outerWidth()}),e("#home-hospital-scene").mousemove(function(e){a>=1200&&t({x:e.pageX,y:e.pageY})})}(jQuery),function(e){var t=!1;Breakpoint.init(),e(".history-slider-year").each(function(){var a=e(this),o=0;a.find(".history-year").click(function(n){n.stopImmediatePropagation(),e(".history-slider-year").each(function(){var n=e(this);a.hasClass("active-year")||(n.removeClass("active-year"),n.find(".panel-title a").each(function(){e(this).attr("aria-expanded")&&e(this).addClass("collapsed")}),n.find(".in").each(function(){e(this).removeClass("in")}),t&&setTimeout(function(){var t=e("html, body");o=a.offset().top-15,t.stop().animate({scrollTop:o},500,"swing")},300))}),a.addClass("active-year")})}),e(".history-slider-year .history-year").click(),t=!0}(jQuery),function(e){var t=e("html, body");e("#jobsAccordion").find(".collapsed").each(function(){e(this).click(function(){var a=e(this);setTimeout(function(){var e=a.offset().top;t.stop().animate({scrollTop:e},500,"swing")},400)})})}(jQuery),function(e){e(".history-slider-year").each(function(){e(this).click(function(t){e(this).find(".history-year").click()})})}(jQuery),function(e){e("table").each(function(){var t=e(this).find("tr").not("tr:first-child, tr:first-child th"),a=(t.length,[]);e(this).find("tr:first-child td, tr:first-child th, tr:last-child").each(function(){headLines=e(this).text(),a.push(headLines)}),t.each(function(){for(i=0,l=a.length;i<l;i++)e(this).find("td").eq(i+1).prepend("<h3>"+a[i+1]+"</h3>")}),t.append('<i class="icon-accordion">+</i>'),t.click(function(){e(this).hasClass("accordion-opened")?e(this).animate({maxHeight:"60px"},200).removeClass("accordion-opened").find(".icon-accordion").text("+"):e(this).animate({maxHeight:"1000px"},400).addClass("accordion-opened").find(".icon-accordion").text("-")})})}(jQuery),function(e){e(".about-quick-facts .item-circle").each(function(){for(var t=e(this),a=t.text(),o="",n="",i="",r=0;r<a.length;r++)parseInt(a[r])?n+=a[r].toString():0===n.length?o+=a[r]:i+=a[r];t.text(""),t.css("opacity","0"),"1"===n.toString()[0]&&0===i.length?t.css("text-indent","-5%"):t.css("text-indent","0");new Waypoint({element:this,handler:function(){t.css("opacity","1"),t.prop("Counter",0).animate({Counter:n},{duration:1500,easing:"swing",step:function(t){e(this).text(o+Math.ceil(t)+i)}})},offset:e(window).innerHeight()-t.outerHeight()/2})})}(jQuery),jQuery(".game-carousel").owlCarousel({margin:0,nav:!0,navText:["",""],dots:!0,autoplay:!1,autoplaySpeed:1e3,autoplayTimeout:3e3,autoplayHoverPause:!1,loop:!1,responsive:{0:{items:1}}}),jQuery(".game-mobile-carousel").owlCarousel({margin:0,nav:!0,navText:["",""],dots:!0,autoplay:!1,autoplaySpeed:1e3,autoplayTimeout:3e3,autoplayHoverPause:!1,loop:!1,responsive:{0:{items:1}}}),jQuery(".game-gallery-carousel").owlCarousel({margin:0,nav:!0,navText:["",""],dots:!0,autoplay:!1,autoplaySpeed:1e3,autoplayTimeout:3e3,autoplayHoverPause:!1,loop:!1,responsive:{0:{items:1}}}),jQuery(".game-press-carousel").owlCarousel({margin:0,nav:!0,navText:["",""],dots:!0,autoplay:!1,autoplaySpeed:1e3,autoplayTimeout:3e3,autoplayHoverPause:!1,loop:!0,responsive:{0:{items:1}}}),jQuery(".games-head-slider").owlCarousel({margin:0,nav:!1,navText:["",""],dots:!0,autoplay:!1,autoplaySpeed:1e3,autoplayTimeout:3e3,autoplayHoverPause:!1,loop:!1,responsive:{0:{items:1}}}),jQuery,function(e){e(document).outerWidth()>1200?e(".fancybox").fancybox({thumbs:{autoStart:!0},buttons:["close"],loop:!0,caption:function(t,a){var o=e(this).data("caption")||"";return"<span data-fancybox-index></span> / <span data-fancybox-count></span>"+(o.length?" "+o:"")}}):e(".fancybox").click(function(e){e.stopPropagation()})}(jQuery),function(e){e(".owl-item.cloned").find(".fancybox").each(function(){e(this).removeAttr("data-fancybox")}),e(".eu-about-accordion").each(function(){var t=e(this),a=t.find("h3").length;a&&t.css({"min-height":120*a+"px"})})}(jQuery),function(e){function t(t){t.find(".owl-dots").each(function(){dots=e(this),dots.addClass("owl-counter"),dots.clone().removeClass("owl-counter").appendTo(t)}),t.on("changed.owl.carousel",function(a){t.find(".owl-dots:not(.owl-counter) .active").each(function(){e(this).removeClass("active")}),t.find(".owl-dots:not(.owl-counter) .owl-dot:nth-child("+(a.item.index+1)+")").addClass("active")})}var a=e(".game-carousel"),o=e(".game-gallery-carousel");t(a),t(o)}(jQuery),function(e){e(".read-more-link").click(function(t){t.preventDefault();var a=e(this),o=a.closest(".trimmed"),n=e(o.find(".content")),i=a.data("more-text"),r=a.data("less-text"),s=n.data("text"),l=n.data("more");a.toggleClass("expanded");var c=n.html();a.hasClass("expanded")?(a.html(r),c=-1!==c.indexOf("</p>")?c.replace(l+"</p>","")+s:c.replace(l,"")+s,n.html(c)):(a.html(i),0===(c=c.substring(0,c.length-s.length)).indexOf("<p>")?c+=l+"</p>":c+=l,n.html(c))})}(jQuery),function(e){var t=e(".address-slider"),a=e("#map-canvas"),o=e("#contact-mail"),n=e("#careers-mail"),i=e("#support-mail"),r=e("#press-mail"),s=t.data("show-dots");t.owlCarousel({margin:0,nav:!1,navText:["",""],dots:s,autoplay:!1,autoplaySpeed:1e3,autoplayTimeout:3e3,autoplayHoverPause:!1,loop:!1,responsive:{0:{items:1}}}),t.on("changed.owl.carousel",function(t){var s=e(this);setTimeout(function(){var e=s.find(".active>.item"),t=e.data("contact-mail"),l=e.data("careers-mail"),c=e.data("support-mail"),u=e.data("press-mail");a&&a.data("coords",e.data("coords")),o&&t&&(o.attr("href","mailto:"+t),o.html(t)),n&&l&&(n.attr("href","mailto:"+l),n.html(l)),i&&c&&(i.attr("href","mailto:"+c),i.html(c)),r&&u&&(r.attr("href","mailto:"+u),r.html(u)),initMap()},300)})}(jQuery),function(e){e(document).outerWidth()>1200?e(".btn-yt").fancybox({buttons:["close"],thumbs:{autoStart:!0}}):e(".btn-yt").click(function(t){t.preventDefault(),t.stopPropagation(),window.open(e(this).attr("href"))})}(jQuery),function(e){e(".square-games").each(function(){var t=e(this);t.click(function(){t.toggleClass("hover")})})}(jQuery),function(e){var t=e(".game-rwd"),a=e(".rwd-devices"),o=e("footer");e(window).resize(function(){var t=(e(window).innerHeight()-250)/a.outerHeight();t<.5&&(t=.5),a.css("transform","scale("+t+")")}),e(window).resize(),e(window).scroll(function(){e(window).scrollTop()+e(window).innerHeight()>o.offset().top?t.css("top","0"):t.css("top","120px")})}(jQuery),function(e){var t={Android:function(){return!!navigator.userAgent.match(/Android/i)},BlackBerry:function(){return!!navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)},Windows:function(){return!!navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Windows()}};t.any()&&e(".wrapper").addClass("mobile-landscape")}(jQuery),function(e){e("[data-src-md]").each(function(){var t=e(this);Breakpoint.init(),Breakpoint.is("xs")||Breakpoint.is("sm")?t.css({"background-image":"url("+t.data("src-sm")+")"}):Breakpoint.is("md")?t.css({"background-image":"url("+t.data("src-md")+")"}):Breakpoint.is("lg")&&t.css({"background-image":"url("+t.data("src-lg")+")"})})}(jQuery);
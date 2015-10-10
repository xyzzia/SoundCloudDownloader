// ==UserScript==
// @name	SoundCloud Downloader (xyzzia mod)
// @namespace	http://sc-downloader.com
// @author	Usama Ejaz, xyzzia
// @description	Adds a Download button to all the tracks on SoundCloud, circumvents the spammy page opened by the original.
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @include	http://www.soundcloud.com/*
// @include	http://soundcloud.com/*
// @include	https://www.soundcloud.com/*
// @include	https://soundcloud.com/*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_openInTab
// @version	0.4x
// ==/UserScript==
//-----------------------------------------------------------------------------------

jQuery.noConflict();
(function($){

    $(function(){
$("head").append('<style>#scd_usamaejaz:before {background-repeat:no-repeat;padding-left: 20px;content: " ";background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAATklEQVR42s2SwQkAIAwD3SkLOYqbZNT6Eh+BWIWCj3veFUJbRDxTIwOIxccyAG7BQpGTAcplDXhRZR/g7WBUUWUX6Oknyazt5HGi8rfzTM/tP8ufxmlTAAAAAElFTkSuQmCC"); } #scd_usamaejaz1 {background-repeat: no-repeat;background-position:center;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAATklEQVR42s2SwQkAIAwD3SkLOYqbZNT6Eh+BWIWCj3veFUJbRDxTIwOIxccyAG7BQpGTAcplDXhRZR/g7WBUUWUX6Oknyazt5HGi8rfzTM/tP8ufxmlTAAAAAElFTkSuQmCC"); } @media(max-width: 1024px) { #scd_usamaejaz { background-repeat: no-repeat;background-position:center;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAATklEQVR42s2SwQkAIAwD3SkLOYqbZNT6Eh+BWIWCj3veFUJbRDxTIwOIxccyAG7BQpGTAcplDXhRZR/g7WBUUWUX6Oknyazt5HGi8rfzTM/tP8ufxmlTAAAAAElFTkSuQmCC");}}</style>');

setInterval(function(){
if(!$(".sound").is(".playlist")){
title=$(".soundTitle__title").eq(0).text();
title = title.replace(/"/g, "'");
title=$.trim(title);
url=document.location.href;
if($("#scd_usamaejaz").length==0){
$(".sound__soundActions .soundActions__medium .sc-button-group-medium").eq(0).append('<a class="sc-button sc-button-medium sc-button-responsive" target="_blank" href="http://sc-downloader.com/download/'+url.substr(23)+'.mp3" title="Download '+title+'" id="scd_usamaejaz">Download</a>');
$(".soundActions .sc-button-group-medium").eq(0).append('<a class="sc-button sc-button-medium sc-button-responsive" target="_blank" href="http://sc-downloader.com/download/'+url.substr(23)+'.mp3" title="Download '+title+'" id="scd_usamaejaz">Download</a>');

}
} else {
$(".trackList .trackList__item").each(function(){
title=$(this).find(".soundTitle__title").eq(0).text();
title = title.replace(/"/g, "'");
title=$.trim(title);
url=$(this).find(".soundTitle__title").eq(0).attr("href");
if($(this).find("#scd_usamaejaz1").length==0){
$(this).find('.soundActions .sc-button-group-small').eq(0).append('<a class="sc-button sc-button-small sc-button-icon sc-button-responsive" target="_blank" href="http://sc-downloader.com/download/'+url.substr(23)+'.mp3" title="Download '+title+'" id="scd_usamaejaz1">Download</a>');

}
});
}

}, 1000);

    });
})(jQuery);
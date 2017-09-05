'use strict';

module.exports = function(settings) {
  console.log('test');
  if (settings.domain) {
      var containerId = settings.container || "teconsent";
      var notice = document.createElement("script");
      notice.setAttribute("async","async");
      notice.setAttribute("type","text/javascript");
      notice.setAttribute("crossorigin","");
      notice.src = "https://consent.truste.com/notice?domain=" + settings.domain + "&c=" + containerId;
      (document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0]).appendChild(notice);  
  }
};
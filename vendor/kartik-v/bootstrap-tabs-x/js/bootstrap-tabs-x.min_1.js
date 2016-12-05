/*!
 * @copyright &copy; Kartik Visweswaran, Krajee.com, 2014
 * @version 1.3.0
 *
 * Bootstrap Tabs Extended - Extended Bootstrap Tabs with ability to align tabs
 * in multiple ways, add borders, rotated titles, and more.
 *
 * For more JQuery/Bootstrap plugins and demos visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */!function(t){"use strict";var e=function(e,a){return null===e||void 0===e||0===e.length||a&&""===t.trim(e)},a={timeout:3e5,data:{},remove:function(t){delete a.data[t]},exist:function(t){return!!a.data[t]&&(new Date).getTime()-a.data[t]._<a.timeout},get:function(t){return a.data[t].data},set:function(e,i,n){a.remove(e),a.data[e]={_:(new Date).getTime(),data:i},t.isFunction(n)&&n(i)}},i=function(e,a){var i=this;i.$element=t(e),i.init(a),i.listen()};i.prototype={constructor:i,init:function(t){var e=this,i=e.$element;e.options=t,e.$pane=i.find(".tab-pane.active"),e.$content=i.find(".tab-content"),e.$tabs=i.find(".nav-tabs"),e.isVertical=i.hasClass("tabs-left")||i.hasClass("tabs-right"),e.isVerticalSide=e.isVertical&&i.hasClass("tab-sideways"),a.timeout=t.cacheTimeout},format:function(t,e){var a,i=this,n=i.$element,s=i.$pane,r=i.$content,o=i.isVertical,c=i.isVerticalSide,h=i.$tabs,l=h.outerHeight(),u=s.outerHeight(),f=h.outerWidth(),d=l>u?l:u+20,g=r.outerHeight(),b=n.is('[class^="tab-height-"]');if(c){if(b)return void(g>l&&h.height(g));n.height(t.is(":last-child")&&l>u&&e?d+1:d)}else if(o){if(d=l>u?l:u+32,n.hasClass("tabs-left")?r.css("margin-left",f+"px"):n.hasClass("tabs-right")&&r.css("margin-right",f+"px"),b)return void(g>l&&h.height(g));n.css("min-height",d+"px"),g=r.outerHeight(),a=n.outerHeight(),g>l?(d=d>g?g:a,h.css("min-height",d+"px")):r.css("min-height",d+"px")}},listen:function(){var a=this,i=a.$element,n=a.options;i.find('.nav-tabs [data-toggle="tab"]').on("shown.bs.tab",function(){a.format(t(this),!1)}),i.find('.nav-tabs li.active [data-toggle="tab"]').each(function(){a.format(t(this),!0)}),i.find('.nav-tabs li [data-toggle="tab"]').each(function(){var i=t(this),s=i.text(),r=a.isVertical,o=e(i.data("maxLength"))?n.maxTitleLength:i.data("maxLength");r&&s.length>o&&e(i.attr("title"))&&i.attr("title",s),i.on("click",function(n){var s=t(this).attr("data-url");if(e(s))return void i.trigger("tabsX.click");n.preventDefault();var r=t(this.hash),o=t(this),c=o,h=t(this).attr("data-loading-class")||"kv-tab-loading",l=o.closest(".dropdown");e(l.attr("class"))||(c=l.find(".dropdown-toggle")),a.parseCache(),t.ajax({type:"post",dataType:"json",url:s,cache:!0,beforeSend:function(){r.html("<br><br><br>"),c.removeClass(h).addClass(h),i.trigger("tabsX.beforeSend")},success:function(t){setTimeout(function(){r.html(t),o.tab("show"),c.removeClass(h)},100),i.trigger("tabsX.success",[t])},error:function(t,e,a){i.trigger("tabsX.error",[t,e,a])}}),i.trigger("tabsX.click")})})},parseCache:function(){var e=this,i=e.options;return i.enableCache?void t.ajaxPrefilter(function(e,i){if(e.cache){var n=i.beforeSend||t.noop,s=i.success||t.noop,r=i.url;e.cache=!1,e.beforeSend=function(){return n(),a.exist(r)?(s(a.get(r)),!1):!0},e.success=function(t){a.set(r,t,s)}}}):!1}},t.fn.tabsX=function(e){var a=Array.apply(null,arguments);return a.shift(),this.each(function(){var n=t(this),s=n.data("tabsX"),r="object"==typeof e&&e;s||(s=new i(this,t.extend({},t.fn.tabsX.defaults,r,t(this).data())),n.data("tabsX",s)),"string"==typeof e&&s[e].apply(s,a)})},t.fn.tabsX.Constructor=i,t.fn.tabsX.defaults={enableCache:!0,cacheTimeout:3e5,maxTitleLength:9},t(document).on("ready",function(){t(".tabs-x").tabsX({})})}(window.jQuery);
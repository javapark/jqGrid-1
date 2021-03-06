/*
 ContextMenu - jQuery plugin for right-click context menus

 Author: Chris Domigan
 Contributors: Dan G. Switzer, II
 Parts of this plugin are inspired by Joern Zaefferer's Tooltip plugin

 Dual licensed under the MIT and GPL licenses:
   http://www.opensource.org/licenses/mit-license.php
   http://www.gnu.org/licenses/gpl.html

 Version: r2
 Date: 16 July 2007

 For documentation visit http://www.trendskitchens.co.nz/jquery/contextmenu/

*/
var $jscomp={scope:{},findInternal:function(a,d,b){a instanceof String&&(a=String(a));for(var c=a.length,e=0;e<c;e++){var m=a[e];if(d.call(b,m,e,a))return{i:e,v:m}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,b){if(b.get||b.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[d]=b.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,d,b,c){if(d){b=$jscomp.global;a=a.split(".");for(c=0;c<a.length-1;c++){var e=a[c];e in b||(b[e]={});b=b[e]}a=a[a.length-1];c=b[a];d=d(c);d!=c&&null!=d&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:d})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,b){return $jscomp.findInternal(this,a,b).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof module&&module.exports?module.exports=function(d,b){void 0===b&&(b="undefined"!==typeof window?require("jquery"):require("jquery")(d||window));a(b);return b}:a(jQuery)})(function(a){function d(d,f,k){var g=l[d];m=a("#"+g.id).find("ul:first").clone(!0);m.css(g.menuStyle).find("li").css(g.itemStyle).hover(function(){a(this).css(g.itemHoverStyle)},function(){a(this).css(g.itemStyle)}).find("img").css({verticalAlign:"middle",
paddingRight:"2px"});c.html(m);g.onShowMenu&&(c=g.onShowMenu(k,c));a.each(g.bindings,function(g,d){a("#"+g,c).bind("click",function(){b();d(f,n)})});c.css({left:k[g.eventPosX],top:k[g.eventPosY]}).show();g.shadow&&e.css({width:c.width(),height:c.height(),left:k.pageX+2,top:k.pageY+2}).show();a(document).one("click",b)}function b(){c.hide();e.hide()}var c,e,m,l,n,h={menuStyle:{listStyle:"none",padding:"1px",margin:"0px",backgroundColor:"#fff",border:"1px solid #999",width:"100px"},itemStyle:{margin:"0px",
color:"#000",display:"block",cursor:"default",padding:"3px",border:"1px solid #fff",backgroundColor:"transparent"},itemHoverStyle:{border:"1px solid #0a246a",backgroundColor:"#b6bdd2"},eventPosX:"pageX",eventPosY:"pageY",shadow:!0,onContextMenu:null,onShowMenu:null};a.fn.contextMenu=function(b,f){c||(c=a('<div id="jqContextMenu"></div>').hide().css({position:"absolute",zIndex:"500"}).appendTo("body").bind("click",function(a){a.stopPropagation()}));e||(e=a("<div></div>").css({backgroundColor:"#000",
position:"absolute",opacity:.2,zIndex:499}).appendTo("body").hide());l=l||[];l.push({id:b,menuStyle:a.extend({},h.menuStyle,f.menuStyle||{}),itemStyle:a.extend({},h.itemStyle,f.itemStyle||{}),itemHoverStyle:a.extend({},h.itemHoverStyle,f.itemHoverStyle||{}),bindings:f.bindings||{},shadow:f.shadow||!1===f.shadow?f.shadow:h.shadow,onContextMenu:f.onContextMenu||h.onContextMenu,onShowMenu:f.onShowMenu||h.onShowMenu,eventPosX:f.eventPosX||h.eventPosX,eventPosY:f.eventPosY||h.eventPosY});var k=l.length-
1;a(this).bind("contextmenu",function(a){var b=l[k].onContextMenu?l[k].onContextMenu(a):!0;n=a.target;if(b)return d(k,this,a),!1});return this};a.contextMenu={defaults:function(b){a.each(b,function(b,c){"object"==typeof c&&h[b]?a.extend(h[b],c):h[b]=c})}}});$(function(){$("div.contextMenu").hide()});
//# sourceMappingURL=jquery.contextmenu.map

(function(a){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var n=a.jgrid,O=n.jqID,T=n.getMethod("getGridRes"),G=function(a,b){return n.mergeCssClasses(n.getRes(n.guiStyles[this.p.guiStyle||n.defaults.guiStyle||"jQueryUI"],a),b||"")};n.extend({getColProp:function(a){var b=this[0];return null!=b&&b.grid&&(a=b.p.iColByName[a],void 0!==a)?b.p.colModel[a]:{}},setColProp:function(e,
b){return this.each(function(){var c=this.p,d;this.grid&&null!=c&&b&&(d=c.iColByName[e],void 0!==d&&a.extend(!0,c.colModel[d],b))})},sortGrid:function(a,b,c){return this.each(function(){var d=this.grid,g=this.p,h=g.colModel,m=h.length,l,f,u=!1;if(d)for(a||(a=g.sortname),"boolean"!==typeof b&&(b=!1),f=0;f<m;f++)if(l=h[f],l.index===a||l.name===a){!0===g.frozenColumns&&!0===l.frozen&&(u=d.fhDiv.find("#"+g.id+"_"+a));u&&0!==u.length||(u=d.headers[f].el);d=l.sortable;("boolean"!==typeof d||d)&&this.sortData("jqgh_"+
g.id+"_"+a,f,b,c,u);break}})},clearBeforeUnload:function(){return this.each(function(){var e=this.p,b=this.grid,c,d=n.clearArray,g=Object.prototype.hasOwnProperty;a.isFunction(b.emptyRows)&&b.emptyRows.call(this,!0,!0);a(document).unbind("mouseup.jqGrid"+e.id);a(b.hDiv).unbind("mousemove");a(this).unbind();var h,m=b.headers.length;for(h=0;h<m;h++)b.headers[h].el=null;for(c in b)b.hasOwnProperty(c)&&(b.propOrMethod=null);b="formatCol sortData updatepager refreshIndex setHeadCheckBox constructTr clearToolbar fixScrollOffsetAndhBoxPadding rebuildRowIndexes modalAlert toggleToolbar triggerToolbar formatter addXmlData addJSONData ftoolbar _inlinenav nav grid p".split(" ");
m=b.length;for(h=0;h<m;h++)g.call(this,b[h])&&(this[b[h]]=null);this._index={};d(e.data);d(e.lastSelectedData);d(e.selarrrow);d(e.savedRow)})},GridDestroy:function(){return this.each(function(){var e=this.p;if(this.grid&&null!=e){e.pager&&a(e.pager).remove();try{a("#alertmod_"+e.idSel).remove(),a(this).jqGrid("clearBeforeUnload"),a(e.gBox).remove()}catch(b){}}})},GridUnload:function(){return this.each(function(){var e=a(this),b=this.p,c=a.fn.jqGrid;this.grid&&(e.removeClass(c.getGuiStyles.call(e,
"grid","ui-jqgrid-btable")),b.pager&&a(b.pager).empty().removeClass(c.getGuiStyles.call(e,"pagerBottom","ui-jqgrid-pager")).removeAttr("style").removeAttr("dir"),e.jqGrid("clearBeforeUnload"),e.removeAttr("style").removeAttr("tabindex").removeAttr("role").removeAttr("aria-labelledby").removeAttr("style"),e.empty(),e.insertBefore(b.gBox).show(),a(b.pager).insertBefore(b.gBox).show(),a(b.gBox).remove())})},setGridState:function(e){return this.each(function(){var b=this.p,c=this.grid,d=c.cDiv,g=a(c.uDiv),
h=a(c.ubDiv);if(c&&null!=b){var m=b.iconSet||n.defaults.iconSet||"jQueryUI",c=n.getIconRes(m,"gridMinimize.visible"),m=n.getIconRes(m,"gridMinimize.hidden");"hidden"===e?(a(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv",b.gView).slideUp("fast"),b.pager&&a(b.pager).slideUp("fast"),b.toppager&&a(b.toppager).slideUp("fast"),!0===b.toolbar[0]&&("both"===b.toolbar[1]&&h.slideUp("fast"),g.slideUp("fast")),b.footerrow&&a(".ui-jqgrid-sdiv",b.gBox).slideUp("fast"),a(".ui-jqgrid-titlebar-close span",d).removeClass(c).addClass(m),
b.gridstate="hidden"):"visible"===e&&(a(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv",b.gView).slideDown("fast"),b.pager&&a(b.pager).slideDown("fast"),b.toppager&&a(b.toppager).slideDown("fast"),!0===b.toolbar[0]&&("both"===b.toolbar[1]&&h.slideDown("fast"),g.slideDown("fast")),b.footerrow&&a(".ui-jqgrid-sdiv",b.gBox).slideDown("fast"),a(".ui-jqgrid-titlebar-close span",d).removeClass(m).addClass(c),b.gridstate="visible")}})},filterToolbar:function(e){return this.each(function(){var b=this,c=b.grid,d=a(b),g=
b.p,h=n.bindEv,m=n.info_dialog,l=n.htmlEncode;if(!this.ftoolbar){var f=a.extend(!0,{autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",applyLabelClasses:!0,operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},n.search,g.searching||{},e||{}),u=g.colModel,p=function(a){return T.call(d,
a)},C=p("errors.errcap"),H=p("edit.bClose"),A=p("edit.msg"),v=G.call(b,"states.hover"),M=G.call(b,"states.select"),E=G.call(b,"filterToolbar.dataField"),y=function(){var J={},S=0,e={};a.each(u,function(){var d=this,h=d.index||d.name,k,m;k=d.searchoptions||{};var q=a("#gs_"+O(d.name),!0===d.frozen&&!0===g.frozenColumns?c.fhDiv:c.hDiv),l=function(a,b){var c=d.formatoptions||{};return void 0!==c[a]?c[a]:p("formatter."+(b||d.formatter)+"."+a)},Q=function(a){var b=l("thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g,
"\\$1");return a.replace(new RegExp(b,"g"),"")};m=f.searchOperators?q.parent().prev().children("a").data("soper")||f.defaultSearch:k.sopt?k.sopt[0]:"select"===d.stype?"eq":f.defaultSearch;if("custom"===d.stype&&a.isFunction(k.custom_value)&&0<q.length&&"SPAN"===q[0].nodeName.toUpperCase())k=k.custom_value.call(b,q.children(".customelement").first(),"get");else switch(k=a.trim(q.val()),d.formatter){case "integer":k=Q(k).replace(l("decimalSeparator","number"),".");""!==k&&(k=String(parseInt(k,10)));
break;case "number":k=Q(k).replace(l("decimalSeparator"),".");""!==k&&(k=String(parseFloat(k)));break;case "currency":var q=l("prefix"),R=l("suffix");q&&q.length&&(k=k.substr(q.length));R&&R.length&&(k=k.substr(0,k.length-R.length));k=Q(k).replace(l("decimalSeparator"),".");""!==k&&(k=String(parseFloat(k)))}if(k||"nu"===m||"nn"===m)J[h]=k,e[h]=m,S++;else try{delete g.postData[h]}catch(N){}});var k=0<S?!0:!1;if(f.stringResult||f.searchOperators||"local"===g.datatype){var h='{"groupOp":"'+f.groupOp+
'","rules":[',m=0;a.each(J,function(a,b){0<m&&(h+=",");h+='{"field":"'+a+'",';h+='"op":"'+e[a]+'",';h+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';m++});h+="]}";a.extend(g.postData,{filters:h});a.each(["searchField","searchString","searchOper"],function(a,b){g.postData.hasOwnProperty(b)&&delete g.postData[b]})}else a.extend(g.postData,J);var l;g.searchurl&&(l=g.url,d.jqGrid("setGridParam",{url:g.searchurl}));var n="stop"===d.triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;
!n&&a.isFunction(f.beforeSearch)&&(n=f.beforeSearch.call(b));n||d.jqGrid("setGridParam",{search:k}).trigger("reloadGrid",[a.extend({page:1},f.reloadGridSearchOptions||{})]);l&&d.jqGrid("setGridParam",{url:l});d.triggerHandler("jqGridToolbarAfterSearch");a.isFunction(f.afterSearch)&&f.afterSearch.call(b)},z=p("search.odata")||[],w=g.customSortOperations,I=function(b,c,k){a("#sopt_menu").remove();c=parseInt(c,10);k=parseInt(k,10)+18;var e,h=0,m=[],F=a(b).data("soper"),h=a(b).data("colname");c="<ul id='sopt_menu' class='ui-search-menu' role='menu' tabindex='0' style='z-index:9999;font-size:"+
(a(".ui-jqgrid-view").css("font-size")||"11px")+";left:"+c+"px;top:"+k+"px;'>";h=g.iColByName[h];if(void 0!==h){h=u[h];k=a.extend({},h.searchoptions);var p,r,t;k.sopt||(k.sopt=[],k.sopt[0]="select"===h.stype?"eq":f.defaultSearch);a.each(z,function(){m.push(this.oper)});null!=w&&a.each(w,function(a){m.push(a)});for(h=0;h<k.sopt.length;h++)r=k.sopt[h],e=a.inArray(r,m),-1!==e&&(e=z[e],void 0!==e?(t=f.operands[r],p=e.text):null!=w&&(p=w[r],t=p.operand,p=p.text),e=F===r?M:"",c+='<li class="ui-menu-item '+
e+'" role="presentation"><a class="ui-corner-all g-menu-item" tabindex="0" role="menuitem" value="'+l(r)+'" data-oper="'+l(t)+'"><table'+(n.msie&&8>n.msiever()?' cellspacing="0"':"")+'><tr><td style="width:25px">'+l(t)+"</td><td>"+l(p)+"</td></tr></table></a></li>");c+="</ul>";a("body").append(c);a("#sopt_menu").addClass("ui-menu ui-widget ui-widget-content ui-corner-all");a("#sopt_menu > li > a").hover(function(){a(this).addClass(v)},function(){a(this).removeClass(v)}).click(function(){var c=a(this).attr("value"),
k=a(this).data("oper");d.triggerHandler("jqGridToolbarSelectOper",[c,k,b]);a("#sopt_menu").hide();a(b).text(k).data("soper",c);!0===f.autosearch&&(k=a(b).parent().next().children()[0],(a(k).val()||"nu"===c||"nn"===c)&&y())})}},L,k=a("<tr></tr>",{"class":"ui-search-toolbar",role:"row"});a.each(u,function(d){var c,e;e="";var l,u,q=this.searchoptions,F=this.editoptions,I=a("<th></th>",{"class":G.call(b,"colHeaders","ui-th-column ui-th-"+g.direction+" "+(f.applyLabelClasses?this.labelClasses||"":""))}),
r=a("<div style='position:relative;height:auto;'></div>"),t=a("<table class='ui-search-table'"+(n.msie&&8>n.msiever()?" cellspacing='0'":"")+"><tr><td class='ui-search-oper'></td><td class='ui-search-input'></td><td class='ui-search-clear' style='width:1px'></td></tr></table>");!0===this.hidden&&a(I).css("display","none");this.search=!1===this.search?!1:!0;void 0===this.stype&&(this.stype="text");c=a.extend({mode:"filter"},q||{});if(this.search){if(f.searchOperators){e=c.sopt?c.sopt[0]:"select"===
this.stype?"eq":f.defaultSearch;for(u=0;u<z.length;u++)if(z[u].oper===e){l=f.operands[e]||"";break}if(void 0===l&&null!=w)for(var P in w)if(w.hasOwnProperty(P)&&P===e){l=w[P].operand;break}void 0===l&&(l="=");e="<a title='"+(null!=c.searchtitle?c.searchtitle:p("search.operandTitle"))+"' style='padding-right:0.5em;' data-soper='"+e+"' class='soptclass' data-colname='"+this.name+"'>"+l+"</a>"}a("td",t).first().data("colindex",d).append(e);null!=c.sopt&&1!==c.sopt.length||a("td.ui-search-oper",t).hide();
void 0===c.clearSearch&&(c.clearSearch="text"===this.stype?!0:!1);c.clearSearch?(e=p("search.resetTitle")||"Clear Search Value",a("td",t).eq(2).append("<a title='"+e+"' style='padding-right:0.2em;padding-left:0.3em;' class='clearsearchclass'>"+f.resetIcon+"</a>")):a("td",t).eq(2).hide();switch(this.stype){case "select":if(e=this.surl||c.dataUrl)a(r).append(t),a.ajax(a.extend({url:e,context:{stbl:t,options:c,cm:this,iCol:d},dataType:"html",success:function(a,c,d){c=this.cm;var k=this.iCol,e=this.options,
g=this.stbl.find(">tbody>tr>td.ui-search-input");void 0!==e.buildSelect?(a=e.buildSelect.call(b,a,d,c,k))&&g.append(a):g.append(a);a=g.children("select");void 0!==e.defaultValue&&a.val(e.defaultValue);a.attr({name:c.index||c.name,id:"gs_"+c.name});e.attr&&a.attr(e.attr);a.addClass(E);a.css({width:"100%"});h.call(b,a[0],e);n.fullBoolFeedback.call(b,e.selectFilled,"jqGridSelectFilled",{elem:a[0],options:e,cm:c,cmName:c.name,iCol:k,mode:"filter"});!0===f.autosearch&&a.change(function(){y();return!1})}},
n.ajaxOptions,g.ajaxSelectOptions||{}));else{var B,v,D;q?(B=void 0===q.value?"":q.value,v=void 0===q.separator?":":q.separator,D=void 0===q.delimiter?";":q.delimiter):F&&(B=void 0===F.value?"":F.value,v=void 0===F.separator?":":F.separator,D=void 0===F.delimiter?";":F.delimiter);if(B){var x=document.createElement("select");x.style.width="100%";a(x).attr({name:this.index||this.name,id:"gs_"+this.name});var K;if("string"===typeof B)for(e=B.split(D),K=0;K<e.length;K++)B=e[K].split(v),D=document.createElement("option"),
D.value=B[0],D.innerHTML=B[1],x.appendChild(D);else if("object"===typeof B)for(K in B)B.hasOwnProperty(K)&&(D=document.createElement("option"),D.value=K,D.innerHTML=B[K],x.appendChild(D));void 0!==c.defaultValue&&a(x).val(c.defaultValue);c.attr&&a(x).attr(c.attr);a(x).addClass(E);a(r).append(t);h.call(b,x,c);a("td",t).eq(1).append(x);n.fullBoolFeedback.call(b,c.selectFilled,"jqGridSelectFilled",{elem:x,options:q||F||{},cm:this,cmName:this.name,iCol:d,mode:"filter"});!0===f.autosearch&&a(x).change(function(){y();
return!1})}}break;case "text":d=void 0!==c.defaultValue?c.defaultValue:"";a("td",t).eq(1).append("<input type='text' class='"+E+"' style='width:100%;padding:0;' name='"+(this.index||this.name)+"' id='gs_"+this.name+"' value='"+d+"'/>");a(r).append(t);c.attr&&a("input",r).attr(c.attr);h.call(b,a("input",r)[0],c);!0===f.autosearch&&(f.searchOnEnter?a("input",r).keypress(function(a){return 13===(a.charCode||a.keyCode||0)?(y(),!1):this}):a("input",r).keydown(function(a){switch(a.which){case 13:return!1;
case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:L&&clearTimeout(L),L=setTimeout(function(){y()},f.autosearchDelay)}}));break;case "custom":a("td",t).eq(1).append("<span style='width:95%;padding:0;' class='"+E+"' name='"+(this.index||this.name)+"' id='gs_"+this.name+"'/>");a(r).append(t);try{if(a.isFunction(c.custom_element))if(x=c.custom_element.call(b,void 0!==c.defaultValue?c.defaultValue:"",c))x=a(x).addClass("customelement"),a(r).find("span[name='"+(this.index||this.name)+
"']").append(x);else throw"e2";else throw"e1";}catch(N){"e1"===N&&m.call(b,C,"function 'custom_element' "+A.nodefined,H),"e2"===N?m.call(b,C,"function 'custom_element' "+A.novalue,H):m.call(b,C,"string"===typeof N?N:N.message,H)}}}a(I).append(r);a(k).append(I);f.searchOperators||a("td",t).eq(0).hide()});a(c.hDiv).find(">div>.ui-jqgrid-htable>thead").append(k);f.searchOperators&&(a(".soptclass",k).click(function(b){var c=a(this).offset();I(this,c.left,c.top);b.stopPropagation()}),a("body").on("click",
function(c){"soptclass"!==c.target.className&&a("#sopt_menu").hide()}));a(".clearsearchclass",k).click(function(){var c=a(this).parents("tr").first(),b=parseInt(a("td.ui-search-oper",c).data("colindex"),10),d=a.extend({},u[b].searchoptions||{}).defaultValue||"";"select"===u[b].stype?d?a("td.ui-search-input select",c).val(d):a("td.ui-search-input select",c)[0].selectedIndex=0:a("td.ui-search-input input",c).val(d);!0===f.autosearch&&y()});b.ftoolbar=!0;b.triggerToolbar=y;b.clearToolbar=function(k){var e=
{},h=0,m;k="boolean"!==typeof k?!0:k;a.each(u,function(){var d,k=a("#gs_"+O(this.name),!0===this.frozen&&!0===g.frozenColumns?c.fhDiv:c.hDiv),f,J=this.searchoptions||{};void 0!==J.defaultValue&&(d=J.defaultValue);m=this.index||this.name;switch(this.stype){case "select":f=0<k.length?!k[0].multiple:!0;k.find("option").each(function(c){this.selected=0===c&&f;if(a(this).val()===d)return this.selected=!0,!1});if(void 0!==d)e[m]=d,h++;else try{delete g.postData[m]}catch(l){}break;case "text":k.val(d||"");
if(void 0!==d)e[m]=d,h++;else try{delete g.postData[m]}catch(l){}break;case "custom":a.isFunction(J.custom_value)&&0<k.length&&"SPAN"===k[0].nodeName.toUpperCase()&&J.custom_value.call(b,k.children(".customelement").first(),"set",d||"")}});var l=0<h?!0:!1;g.resetsearch=!0;if(f.stringResult||f.searchOperators||"local"===g.datatype){var q='{"groupOp":"'+f.groupOp+'","rules":[',n=0;a.each(e,function(a,c){0<n&&(q+=",");q+='{"field":"'+a+'",';q+='"op":"eq",';q+='"data":"'+(c+"").replace(/\\/g,"\\\\").replace(/\"/g,
'\\"')+'"}';n++});q+="]}";a.extend(g.postData,{filters:q});a.each(["searchField","searchString","searchOper"],function(a,c){g.postData.hasOwnProperty(c)&&delete g.postData[c]})}else a.extend(g.postData,e);var p;g.searchurl&&(p=g.url,d.jqGrid("setGridParam",{url:g.searchurl}));var r="stop"===d.triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!r&&a.isFunction(f.beforeClear)&&(r=f.beforeClear.call(b));r||k&&d.jqGrid("setGridParam",{search:l}).trigger("reloadGrid",[a.extend({page:1},f.reloadGridResetOptions||
{})]);p&&d.jqGrid("setGridParam",{url:p});d.triggerHandler("jqGridToolbarAfterClear");a.isFunction(f.afterClear)&&f.afterClear()};b.toggleToolbar=function(){var b=a("tr.ui-search-toolbar",c.hDiv),k=!0===g.frozenColumns?a("tr.ui-search-toolbar",c.fhDiv):!1;"none"===b.css("display")?(b.show(),k&&k.show()):(b.hide(),k&&k.hide());!0===g.frozenColumns&&(d.jqGrid("destroyFrozenColumns"),d.jqGrid("setFrozenColumns"))};!0===g.frozenColumns&&(d.jqGrid("destroyFrozenColumns"),d.jqGrid("setFrozenColumns"))}})},
destroyFilterToolbar:function(){return this.each(function(){this.ftoolbar&&(this.toggleToolbar=this.clearToolbar=this.triggerToolbar=null,this.ftoolbar=!1,a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove(),!0===this.p.frozenColumns&&a(this).jqGrid("destroyFrozenColumns").jqGrid("setFrozenColumns"))})},destroyGroupHeader:function(e){void 0===e&&(e=!0);return this.each(function(){var b,c,d,g;b=this.grid;var h=this.p.colModel,m=a("table.ui-jqgrid-htable thead",b.hDiv);if(b){a(this).unbind(".setGroupHeaders");
var l=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),f=b.headers;b=0;for(c=f.length;b<c;b++){d=h[b].hidden?"none":"";d=a(f[b].el).width(f[b].width).css("display",d);try{d.removeAttr("rowSpan")}catch(n){d.attr("rowSpan",1)}l.append(d);g=d.children("span.ui-jqgrid-resize");0<g.length&&(g[0].style.height="");d.children("div")[0].style.top=""}a(m).children("tr.ui-jqgrid-labels").remove();a(m).prepend(l);!0===e&&a(this).jqGrid("setGridParam",{groupHeader:null})}})},setGroupHeaders:function(e){e=a.extend({useColSpanStyle:!1,
applyLabelClasses:!0,groupHeaders:[]},e||{});return this.each(function(){this.p.groupHeader=e;var b,c,d=0,g,h,m,l,f,u,p=this.p,C=p.colModel,H=C.length,A=this.grid.headers,v=a("table.ui-jqgrid-htable",this.grid.hDiv),M=n.isCellClassHidden,E=v.children("thead").children("tr.ui-jqgrid-labels"),y=E.last().addClass("jqg-second-row-header");g=v.children("thead");var z=v.find(".jqg-first-row-header");void 0===z[0]?z=a("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height",
"auto"):z.empty();var w=function(a,c){var b=c.length,d;for(d=0;d<b;d++)if(c[d].startColumnName===a)return d;return-1};a(this).prepend(g);g=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header");for(b=0;b<H;b++)if(m=A[b].el,l=a(m),c=C[b],h={height:"0",width:A[b].width+"px",display:c.hidden?"none":""},a("<th>",{role:"gridcell"}).css(h).addClass("ui-first-th-"+p.direction+(e.applyLabelClasses?" "+(c.labelClasses||""):"")).appendTo(z),m.style.width="",h=G.call(this,"colHeaders","ui-th-column-header ui-th-"+
p.direction+" "+(e.applyLabelClasses?c.labelClasses||"":"")),f=w(c.name,e.groupHeaders),0<=f){f=e.groupHeaders[f];d=f.numberOfColumns;u=f.titleText;for(f=c=0;f<d&&b+f<H;f++)C[b+f].hidden||M(C[b+f].classes)||a(A[b+f].el).is(":hidden")||c++;h=a("<th>").addClass(h).css({height:"22px","border-top":"0 none"}).html(u);0<c&&h.attr("colspan",String(c));p.headertitles&&h.attr("title",h.text());0===c&&h.hide();l.before(h);g.append(m);--d}else 0===d?e.useColSpanStyle?l.attr("rowspan",E.length+1):(a("<th>").addClass(h).css({display:c.hidden?
"none":"","border-top":"0 none"}).insertBefore(l),g.append(m)):(g.append(m),d--);p=a(this).children("thead");p.prepend(z);g.insertAfter(y);v.prepend(p);e.useColSpanStyle&&(v.find("span.ui-jqgrid-resize").each(function(){var c=a(this).parent();c.is(":visible")&&(this.style.cssText="height:"+c.height()+"px !important;cursor:col-resize;")}),v.find(".ui-th-column>div").each(function(){var c=a(this),b=c.parent();b.is(":visible")&&b.is(":has(span.ui-jqgrid-resize)")&&!c.hasClass("ui-jqgrid-rotate")&&!c.hasClass("ui-jqgrid-rotateOldIE")&&
c.css("top",(b.height()-c.outerHeight(!0))/2+"px")}));a(this).triggerHandler("jqGridAfterSetGroupHeaders")})},getNumberOfFrozenColumns:function(){var a=this;if(0===a.length)return 0;var a=a[0],a=a.p.colModel,b=a.length,c=-1,d;for(d=0;d<b&&!0===a[d].frozen;d++)c=d;return c+1},setFrozenColumns:function(){return this.each(function(){var e=this,b=a(e),c=e.p,d=e.grid;if(d&&null!=c&&!0!==c.frozenColumns){var g=c.colModel,h,m=g.length,l=-1,f=!1,n=[],p=O(c.id),C=G.call(e,"states.hover"),H=G.call(e,"states.disabled");
if(!0!==c.subGrid&&!0!==c.treeGrid&&!c.scroll){for(h=0;h<m&&!0===g[h].frozen;h++)f=!0,l=h,n.push("#jqgh_"+p+"_"+O(g[h].name));c.sortable&&(g=a(d.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),g.sortable("destroy"),b.jqGrid("setGridParam",{sortable:{options:{items:0<n.length?">th:not(:has("+n.join(",")+"),:hidden)":">th:not(:hidden)"}}}),b.jqGrid("sortableColumns",g));if(0<=l&&f){f=c.caption?a(d.cDiv).outerHeight():0;n=a(".ui-jqgrid-htable",c.gView).height();c.toppager&&(f+=a(d.topDiv).outerHeight());
!0===c.toolbar[0]&&"bottom"!==c.toolbar[1]&&(f+=a(d.uDiv).outerHeight());d.fhDiv=a("<div style='position:absolute;overflow:hidden;"+("rtl"===c.direction?"right:0;border-top-left-radius:0;":"left:0;border-top-right-radius:0;")+"top:"+f+"px;height:"+n+"px;' class='"+G.call(e,"hDiv","frozen-div ui-jqgrid-hdiv")+"'></div>");d.fbDiv=a("<div style='position:absolute;overflow:hidden;"+("rtl"===c.direction?"right:0;":"left:0;")+"top:"+(parseInt(f,10)+parseInt(n,10)+1)+"px;overflow:hidden;' class='frozen-bdiv ui-jqgrid-bdiv'></div>");
a(c.gView).append(d.fhDiv);g=a(".ui-jqgrid-htable",c.gView).clone(!0);m=g[0].tHead.rows;if(c.groupHeader){a(m[0].cells).filter(":gt("+l+")").remove();a(m).filter(".jqg-third-row-header").each(function(){a(this).children("th[id]").each(function(){var b=a(this).attr("id");b&&b.substr(0,e.id.length+1)===e.id+"_"&&(b=b.substr(e.id.length+1),c.iColByName[b]>l&&a(this).remove())})});var A=-1,v=-1,M,E;a(m).filter(".jqg-second-row-header").children("th").each(function(){M=parseInt(a(this).attr("colspan")||
1,10);E=parseInt(a(this).attr("rowspan")||1,10);1<E?(A++,v++):M&&(A+=M,v++);if(A===l)return!1});A!==l&&(v=l);a(m).filter(".jqg-second-row-header,.ui-search-toolbar").each(function(){a(this).children(":gt("+v+")").remove()})}else a(m).each(function(){a(this).children(":gt("+l+")").remove()});a(g).width(1);a(d.fhDiv).append(g).mousemove(function(a){if(d.resizing)return d.dragMove(a),!1}).scroll(function(){this.scrollLeft=0});c.footerrow&&(g=a(".ui-jqgrid-bdiv",c.gView).height(),d.fsDiv=a("<div style='position:absolute;"+
("rtl"===c.direction?"right:0;":"left:0;")+"top:"+(parseInt(f,10)+parseInt(n,10)+parseInt(g,10)+1)+"px;' class='frozen-sdiv ui-jqgrid-sdiv'></div>"),a(c.gView).append(d.fsDiv),f=a(".ui-jqgrid-ftable",c.gView).clone(!0),a("tr",f).each(function(){a("td:gt("+l+")",this).remove()}),a(f).width(1),a(d.fsDiv).append(f));b.bind("jqGridSortCol.setFrozenColumns",function(b,e,f){b=a("tr.ui-jqgrid-labels:last th:eq("+c.lastsort+")",d.fhDiv);e=a("tr.ui-jqgrid-labels:last th:eq("+f+")",d.fhDiv);a("span.ui-grid-ico-sort",
b).addClass(H);a(b).attr("aria-selected","false");a("span.ui-icon-"+c.sortorder,e).removeClass(H);a(e).attr("aria-selected","true");c.viewsortcols[0]||c.lastsort===f||(a("span.s-ico",b).hide(),a("span.s-ico",e).show())});a(c.gView).append(d.fbDiv);a(d.bDiv).scroll(function(){a(d.fbDiv).scrollTop(a(this).scrollTop())});!0===c.hoverrows&&a(c.idSel).unbind("mouseover").unbind("mouseout");var y=function(a,c){var b=a.height();1<=Math.abs(b-c)&&0<c&&(a.height(c),b=a.height(),1<=Math.abs(c-b)&&a.height(c+
Math.round(c-b)))},z=function(a,c){var b=a.width();1<=Math.abs(b-c)&&(a.width(c),b=a.width(),1<=Math.abs(c-b)&&a.width(c+Math.round(c-b)))},w=function(b,d,e,f){var g,m,l,n,p,r,t;t=a(d).position().top;var u,v,w;if(null!=b&&0<b.length){b[0].scrollTop=d.scrollTop;b.css("rtl"===c.direction?{top:t,right:0}:{top:t,left:0});m=b.children("table").children("thead").children("tr");l=a(d).children("div").children("table").children("thead").children("tr");0===l.length&&(m=a(b.children("table")[0].rows),l=a(a(d).children("div").children("table")[0].rows));
g=Math.min(m.length,l.length);u=0<g?a(m[0]).position().top:0;v=0<g?a(l[0]).position().top:0;if(0<=e)for(0<=f&&(g=Math.min(f+1,g));e<g;e++)if(n=a(l[e]),"none"!==n.css("display")&&n.is(":visible")){t=n.position().top;f=a(m[e]);p=f.position().top;r=n.height();if(null!=c.groupHeader&&c.groupHeader.useColSpanStyle)for(w=n[0].cells,h=0;h<w.length;h++)n=w[h],null!=n&&"TH"===n.nodeName.toUpperCase()&&(r=Math.max(r,a(n).height()));t=r+(t-v)+(u-p);y(f,t)}y(b,d.clientHeight)}},f={resizeDiv:!0,resizedRows:{iRowStart:0,
iRowEnd:-1}},I={header:f,resizeFooter:!0,body:f};b.bind("jqGridAfterGridComplete.setFrozenColumns",function(){a(c.idSel+"_frozen").remove();a(d.fbDiv).height(d.hDiv.clientHeight);var e=a(this).clone(!0),f=e[0].rows,g=b[0].rows;a(f).filter("tr[role=row]").each(function(){a(this.cells).filter("td[role=gridcell]:gt("+l+")").remove()});d.fbRows=f;e.width(1).attr("id",c.id+"_frozen");e.appendTo(d.fbDiv);if(!0===c.hoverrows){var h=function(b,c,d){a(b)[c](C);a(d[b.rowIndex])[c](C)};a(f).filter(".jqgrow").hover(function(){h(this,
"addClass",g)},function(){h(this,"removeClass",g)});a(g).filter(".jqgrow").hover(function(){h(this,"addClass",f)},function(){h(this,"removeClass",f)})}w(d.fhDiv,d.hDiv,0,-1);w(d.fbDiv,d.bDiv,0,-1);d.sDiv&&w(d.fsDiv,d.sDiv,0,-1)});var L=function(b){a(d.fbDiv).scrollTop(a(d.bDiv).scrollTop());b.header.resizeDiv&&w(d.fhDiv,d.hDiv,b.header.iRowStart,b.header.iRowEnd);b.body.resizeDiv&&w(d.fbDiv,d.bDiv,b.body.iRowStart,b.body.iRowEnd);b.resizeFooter&&d.sDiv&&b.resizeFooter&&w(d.fsDiv,d.sDiv,0,-1);var c=
d.fhDiv[0].clientWidth;b.header.resizeDiv&&null!=d.fhDiv&&1<=d.fhDiv.length&&y(a(d.fhDiv),d.hDiv.clientHeight);b.body.resizeDiv&&null!=d.fbDiv&&0<d.fbDiv.length&&z(a(d.fbDiv),c);b.resizeFooter&&null!=d.fsDiv&&0<=d.fsDiv.length&&z(a(d.fsDiv),c)};a(c.gBox).bind("resizestop.setFrozenColumns",function(){setTimeout(function(){L(I)},50)});b.bind("jqGridInlineEditRow.setFrozenColumns jqGridInlineAfterRestoreRow.setFrozenColumns jqGridInlineAfterSaveRow.setFrozenColumns jqGridAfterEditCell.setFrozenColumns jqGridAfterRestoreCell.setFrozenColumns jqGridAfterSaveCell.setFrozenColumns jqGridResizeStop.setFrozenColumns",
function(a,c){var d=b.jqGrid("getInd",c);L({header:{resizeDiv:!1,resizedRows:{iRowStart:-1,iRowEnd:-1}},resizeFooter:!0,body:{resizeDiv:!0,resizedRows:{iRowStart:d,iRowEnd:d}}})});b.bind("jqGridResizeStop.setFrozenColumns",function(){L(I)});b.bind("jqGridResetFrozenHeights.setFrozenColumns",function(a,b){L(b||I)});d.hDiv.loading||b.triggerHandler("jqGridAfterGridComplete");c.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){var e=a(this),b=this.grid,c=this.p,d=O(c.id);
if(b&&!0===c.frozenColumns){a(b.fhDiv).remove();a(b.fbDiv).remove();b.fhDiv=null;b.fbDiv=null;b.fbRows=null;c.footerrow&&(a(b.fsDiv).remove(),b.fsDiv=null);e.unbind(".setFrozenColumns");if(!0===c.hoverrows){var g,h=G.call(this,"states.hover");e.bind("mouseover",function(b){g=a(b.target).closest("tr.jqgrow");"ui-subgrid"!==a(g).attr("class")&&a(g).addClass(h)}).bind("mouseout",function(b){g=a(b.target).closest("tr.jqgrow");a(g).removeClass(h)})}c.frozenColumns=!1;c.sortable&&(b=a(b.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),
b.sortable("destroy"),e.jqGrid("setGridParam",{sortable:{options:{items:">th:not(:has(#jqgh_"+d+"_cb,#jqgh_"+d+"_rn,#jqgh_"+d+"_subgrid),:hidden)"}}}),e.jqGrid("sortableColumns",b))}})}})});
/*
//# sourceMappingURL=grid.custom.map
*/
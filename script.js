function setFromTimestamp(a,b){ts.setFrom(a,b)}function placeExportPanel(){exportText.mdButton(),exportText.txtButton();var a=$("#icon-exp").offset(),b=parseInt($("body").width()-a.left-35),c=parseInt(a.top)+50;$(".export-panel").css({right:b,top:c}).addClass("active")}function hideExportPanel(){$(".export-panel").removeClass("active")}!function(a){function b(a,b,c,d){if(a.tag.format&&c.length>0){c.push("\n");for(var e=0;d>e;e++)c.push("	")}}function c(d,e){var f=[],g=0==d.attributes.length,h=0;if(d.tag.isComment)e.allowComments&&(f.push("<!--"),f.push(d.tag.rawAttributes),f.push(">"),e.format&&b(d,e,f,h-1));else{var i=0==e.removeTagsAndContent.length||-1==a.inArray(d.tag.name,e.removeTagsAndContent),n=i&&d.tag.render&&(0==e.allowedTags.length||a.inArray(d.tag.name,e.allowedTags)>-1)&&(0==e.removeTags.length||-1==a.inArray(d.tag.name,e.removeTags));if(!d.isRoot&&n&&(f.push("<"),f.push(d.tag.name),a.each(d.attributes,function(){if(-1==a.inArray(this.name,e.removeAttrs)){var b=RegExp(/^(['"]?)(.*?)['"]?$/).exec(this.value),c=b[2],g=b[1]||"'";"class"==this.name&&e.allowedClasses.length>0&&(c=a.grep(c.split(" "),function(b){return a.grep(e.allowedClasses,function(c){return c==b||c[0]==b&&(1==c.length||a.inArray(d.tag.name,c[1])>-1)}).length>0}).join(" ")),null!=c&&(c.length>0||a.inArray(this.name,d.tag.requiredAttributes)>-1)&&(f.push(" "),f.push(this.name),f.push("="),f.push(g),f.push(c),f.push(g))}})),d.tag.isSelfClosing)n&&f.push(" />"),g=!1;else if(d.tag.isNonClosing)g=!1;else if(i){if(!d.isRoot&&n&&f.push(">"),h=e.formatIndent++,d.tag.toProtect)p=a.htmlClean.trim(d.children.join("")).replace(/<br>/gi,"\n"),f.push(p),g=0==p.length;else{for(var p=[],q=0;q<d.children.length;q++){var r=d.children[q],s=a.htmlClean.trim(o(l(r)?r:r.childrenToString()));m(r)&&q>0&&s.length>0&&(j(r)||k(d.children[q-1]))&&p.push(" "),l(r)?s.length>0&&p.push(s):(q!=d.children.length-1||"br"!=r.tag.name)&&(e.format&&b(r,e,p,h),p=p.concat(c(r,e)))}e.formatIndent--,p.length>0&&(e.format&&"\n"!=p[0]&&b(d,e,f,h),f=f.concat(p),g=!1)}!d.isRoot&&n&&(e.format&&b(d,e,f,h-1),f.push("</"),f.push(d.tag.name),f.push(">"))}if(!d.tag.allowEmpty&&g)return[]}return f}function d(b,c){return f(b,function(b){return a.inArray(b.tag.nameOriginal,c)>-1})}function e(a){return f(a,function(a){return a.isRoot||!a.tag.isInline})}function f(a,b,c){c=c||1;var d=a[a.length-c];return b(d)?!0:a.length-c>0&&f(a,b,c+1)?(a.pop(),!0):!1}function g(a){return a?(this.tag=a,this.isRoot=!1):(this.tag=new i("root"),this.isRoot=!0),this.attributes=[],this.children=[],this.hasAttribute=function(a){for(var b=0;b<this.attributes.length;b++)if(this.attributes[b].name==a)return!0;return!1},this.childrenToString=function(){return this.children.join("")},this}function h(a,b){return this.name=a,this.value=b,this}function i(b,c,d,e){return this.name=b.toLowerCase(),this.nameOriginal=this.name,this.render=!0,this.init=function(){if("--"==this.name?(this.isComment=!0,this.isSelfClosing=!0,this.format=!0):(this.isComment=!1,this.isSelfClosing=a.inArray(this.name,v)>-1,this.isNonClosing=a.inArray(this.name,w)>-1,this.isClosing=void 0!=c&&c.length>0,this.isInline=a.inArray(this.name,p)>-1,this.disallowNest=a.inArray(this.name,r)>-1,this.requiredParent=t[a.inArray(this.name,t)+1],this.allowEmpty=e&&a.inArray(this.name,e.allowEmpty)>-1,this.toProtect=a.inArray(this.name,u)>-1,this.format=a.inArray(this.name,q)>-1||!this.isInline),this.rawAttributes=d,this.requiredAttributes=y[a.inArray(this.name,y)+1],e){if(e.tagAttributesCache||(e.tagAttributesCache=[]),-1==a.inArray(this.name,e.tagAttributesCache)){for(var b=x[a.inArray(this.name,x)+1].slice(0),f=0;f<e.allowedAttributes.length;f++){var g=e.allowedAttributes[f][0];(1==e.allowedAttributes[f].length||a.inArray(this.name,e.allowedAttributes[f][1])>-1)&&-1==a.inArray(g,b)&&b.push(g)}e.tagAttributesCache.push(this.name),e.tagAttributesCache.push(b)}this.allowedAttributes=e.tagAttributesCache[a.inArray(this.name,e.tagAttributesCache)+1]}},this.init(),this.rename=function(a){this.name=a,this.init()},this}function j(b){for(;n(b)&&b.children.length>0;)b=b.children[0];if(!l(b))return!1;var c=o(b);return c.length>0&&a.htmlClean.isWhitespace(c.charAt(0))}function k(b){for(;n(b)&&b.children.length>0;)b=b.children[b.children.length-1];if(!l(b))return!1;var c=o(b);return c.length>0&&a.htmlClean.isWhitespace(c.charAt(c.length-1))}function l(a){return a.constructor==String}function m(a){return l(a)||a.tag.isInline}function n(a){return a.constructor==g}function o(a){return a.replace(/&nbsp;|\n/g," ").replace(/\s\s+/g," ")}a.fn.htmlClean=function(b){return this.each(function(){this.value?this.value=a.htmlClean(this.value,b):this.innerHTML=a.htmlClean(this.innerHTML,b)})},a.htmlClean=function(b,f){f=a.extend({},a.htmlClean.defaults,f),f.allowEmpty=s.concat(f.allowEmpty);var j,k=/(<(\/)?(\w+:)?([\w]+)([^>]*)>)|<!--(.*?--)>/gi,m=/([\w\-]+)\s*=\s*(".*?"|'.*?'|[^\s>\/]*)/gi,n=new g,o=[n],p=n;f.bodyOnly&&(j=/<body[^>]*>((\n|.)*)<\/body>/i.exec(b))&&(b=j[1]),b=b.concat("<xxx>");for(var q;j=k.exec(b);){var r=j[6]?new i("--",null,j[6],f):new i(j[4],j[2],j[5],f),t=b.substring(q,j.index);if(t.length>0){var u=p.children[p.children.length-1];p.children.length>0&&l(u=p.children[p.children.length-1])?p.children[p.children.length-1]=u.concat(t):p.children.push(t)}if(q=k.lastIndex,r.isClosing)d(o,[r.name])&&(o.pop(),p=o[o.length-1]);else{for(var v,w=new g(r);v=m.exec(r.rawAttributes);){if("style"==v[1].toLowerCase()&&f.replaceStyles)for(var x=!r.isInline,y=0;y<f.replaceStyles.length;y++)f.replaceStyles[y][0].test(v[2])&&(x||(r.render=!1,x=!0),p.children.push(w),o.push(w),p=w,r=new i(f.replaceStyles[y][1],"","",f),w=new g(r));null!=r.allowedAttributes&&(0==r.allowedAttributes.length||a.inArray(v[1],r.allowedAttributes)>-1)&&w.attributes.push(new h(v[1],v[2]))}a.each(r.requiredAttributes,function(){var a=this.toString();w.hasAttribute(a)||w.attributes.push(new h(a,""))});for(var z=0;z<f.replace.length;z++)for(var A=0;A<f.replace[z][0].length;A++){var B="string"==typeof f.replace[z][0][A];if(B&&f.replace[z][0][A]==r.name||!B&&f.replace[z][0][A].test(j)){r.rename(f.replace[z][1]),z=f.replace.length;break}}var C=!0;if(p.isRoot||(p.tag.isInline&&!r.isInline?(C=e(o))&&(p=o[o.length-1]):p.tag.disallowNest&&r.disallowNest&&!r.requiredParent?C=!1:r.requiredParent&&(C=d(o,r.requiredParent))&&(p=o[o.length-1])),C)if(p.children.push(w),r.toProtect)for(var D;D=k.exec(b);){var E=new i(D[4],D[1],D[5],f);if(E.isClosing&&E.name==r.name){w.children.push(RegExp.leftContext.substring(q)),q=k.lastIndex;break}}else r.isSelfClosing||r.isNonClosing||(o.push(w),p=w)}}return a.htmlClean.trim(c(n,f).join(""))},a.htmlClean.defaults={bodyOnly:!0,allowedTags:[],removeTags:["basefont","center","dir","font","frame","frameset","iframe","isindex","menu","noframes","s","strike","u"],removeTagsAndContent:[],allowedAttributes:[],removeAttrs:[],allowedClasses:[],format:!1,formatIndent:0,replace:[[["b","big"],"strong"],[["i"],"em"]],replaceStyles:[[/font-weight:\s*bold/i,"strong"],[/font-style:\s*italic/i,"em"],[/vertical-align:\s*super/i,"sup"],[/vertical-align:\s*sub/i,"sub"]],allowComments:!1,allowEmpty:[]},a.htmlClean.trim=function(b){return a.htmlClean.trimStart(a.htmlClean.trimEnd(b))},a.htmlClean.trimStart=function(b){return b.substring(a.htmlClean.trimStartIndex(b))},a.htmlClean.trimStartIndex=function(b){for(var c=0;c<b.length-1&&a.htmlClean.isWhitespace(b.charAt(c));c++);return c},a.htmlClean.trimEnd=function(b){return b.substring(0,a.htmlClean.trimEndIndex(b))},a.htmlClean.trimEndIndex=function(b){for(var c=b.length-1;c>=0&&a.htmlClean.isWhitespace(b.charAt(c));c--);return c+1},a.htmlClean.isWhitespace=function(b){return-1!=a.inArray(b,z)};var p=["a","abbr","acronym","address","b","big","br","button","caption","cite","code","del","em","font","hr","i","input","img","ins","label","legend","map","q","s","samp","select","option","param","small","span","strike","strong","sub","sup","tt","u","var"],q=["address","button","caption","code","input","label","legend","select","option","param"],r=["h1","h2","h3","h4","h5","h6","p","th","td","object"],s=["th","td"],t=[null,"li",["ul","ol"],"dt",["dl"],"dd",["dl"],"td",["tr"],"th",["tr"],"tr",["table","thead","tbody","tfoot"],"thead",["table"],"tbody",["table"],"tfoot",["table"],"param",["object"]],u=["script","style","pre","code"],v=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],w=["!doctype","?xml"],x=[["class"],"?xml",[],"!doctype",[],"a",["accesskey","class","href","name","title","rel","rev","type","tabindex"],"abbr",["class","title"],"acronym",["class","title"],"blockquote",["cite","class"],"button",["class","disabled","name","type","value"],"del",["cite","class","datetime"],"form",["accept","action","class","enctype","method","name"],"iframe",["class","height","name","sandbox","seamless","src","srcdoc","width"],"input",["accept","accesskey","alt","checked","class","disabled","ismap","maxlength","name","size","readonly","src","tabindex","type","usemap","value"],"img",["alt","class","height","src","width"],"ins",["cite","class","datetime"],"label",["accesskey","class","for"],"legend",["accesskey","class"],"link",["href","rel","type"],"meta",["content","http-equiv","name","scheme","charset"],"map",["name"],"optgroup",["class","disabled","label"],"option",["class","disabled","label","selected","value"],"q",["class","cite"],"script",["src","type"],"select",["class","disabled","multiple","name","size","tabindex"],"style",["type"],"table",["class","summary"],"th",["class","colspan","rowspan"],"td",["class","colspan","rowspan"],"textarea",["accesskey","class","cols","disabled","name","readonly","rows","tabindex"],"param",["name","value"],"embed",["height","src","type","width"]],y=[[],"img",["alt"]],z=[" "," ","	","\n","\r","\f"]}(jQuery);var toMarkdown=function(a){function b(a,b){var c="void"===b.type?"<"+b.tag+"\\b([^>]*)\\/?>":"<"+b.tag+"\\b([^>]*)>([\\s\\S]*?)<\\/"+b.tag+">",d=new RegExp(c,"gi"),e="";return e="string"==typeof b.replacement?a.replace(d,b.replacement):a.replace(d,function(a,c,d,e){return b.replacement.call(this,a,c,d,e)})}function c(a){return new RegExp(a+"\\s*=\\s*[\"']?([^\"']*)[\"']?","i")}function d(a){return a=a.replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi,function(a,b,c){var d=c.split("</li>");for(d.splice(d.length-1,1),h=0,i=d.length;i>h;h++)if(d[h]){var e="ol"===b?h+1+".  ":"*   ";d[h]=d[h].replace(/\s*<li[^>]*>([\s\S]*)/i,function(a,b){return b=b.replace(/^\s+/,""),b=b.replace(/\n\n/g,"\n\n    "),b=b.replace(/\n([ ]*)+(\*|\d+\.) /g,"\n$1    $2 "),e+b})}return d.join("\n")}),"\n\n"+a.replace(/[ \t]+\n|\s+$/g,"")}function e(a){return a=a.replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi,function(a,b){return b=b.replace(/^\s+|\s+$/g,""),b=f(b),b=b.replace(/^/gm,"> "),b=b.replace(/^(>([ \t]{2,}>)+)/gm,"> >")})}function f(a){return a=a.replace(/^[\t\r\n]+|[\t\r\n]+$/g,""),a=a.replace(/\n\s+\n/g,"\n\n"),a=a.replace(/\n{3,}/g,"\n\n")}for(var g=[{patterns:"p",replacement:function(a,b,c){return c?"\n\n"+c+"\n":""}},{patterns:"br",type:"void",replacement:"\n"},{patterns:"h([1-6])",replacement:function(a,b,c,d){for(var e="",f=0;b>f;f++)e+="#";return"\n\n"+e+" "+d+"\n"}},{patterns:"hr",type:"void",replacement:"\n\n* * *\n"},{patterns:"a",replacement:function(a,b,d){var e=b.match(c("href")),f=b.match(c("title"));return e?"["+d+"]("+e[1]+(f&&f[1]?' "'+f[1]+'"':"")+")":a}},{patterns:["b","strong"],replacement:function(a,b,c){return c?"**"+c+"**":""}},{patterns:["i","em"],replacement:function(a,b,c){return c?"_"+c+"_":""}},{patterns:"code",replacement:function(a,b,c){return c?"`"+c+"`":""}},{patterns:"img",type:"void",replacement:function(a,b){var d=b.match(c("src")),e=b.match(c("alt")),f=b.match(c("title"));return"!["+(e&&e[1]?e[1]:"")+"]("+d[1]+(f&&f[1]?' "'+f[1]+'"':"")+")"}}],h=0,i=g.length;i>h;h++)if("string"==typeof g[h].patterns)a=b(a,{tag:g[h].patterns,replacement:g[h].replacement,type:g[h].type});else for(var j=0,k=g[h].patterns.length;k>j;j++)a=b(a,{tag:g[h].patterns[j],replacement:g[h].replacement,type:g[h].type});a=a.replace(/<pre\b[^>]*>`([\s\S]*)`<\/pre>/gi,function(a,b){return b=b.replace(/^\t+/g,"  "),b=b.replace(/\n/g,"\n    "),"\n\n    "+b+"\n"}),a=a.replace(/^(\s{0,3}\d+)\. /g,"$1\\. ");for(var l=/<(ul|ol)\b[^>]*>(?:(?!<ul|<ol)[\s\S])*?<\/\1>/gi;a.match(l);)a=a.replace(l,function(a){return d(a)});for(var m=/<blockquote\b[^>]*>((?:(?!<blockquote)[\s\S])*?)<\/blockquote>/gi;a.match(m);)a=a.replace(m,function(a){return e(a)});return f(a)};"object"==typeof exports&&(exports.toMarkdown=toMarkdown),function(){function a(a){if($("#audio").remove(),$("#player-hook").append('<audio id="audio" src=""></audio>'),window.webkitURL){console.log("webkit");var b=window.webkitURL.createObjectURL(a)}else var b=window.URL.createObjectURL(a);console.log(b),$("#audio")[0].src=b,console.log(a.name)}function b(){var a=!document.getElementById("audio").paused;1==a?(document.getElementById("audio").pause(),$(".play-pause").removeClass("playing")):(document.getElementById("audio").play(),$(".play-pause").addClass("playing"))}function c(a){var b=document.getElementById("audio");"forwards"==a?b.currentTime=b.currentTime+1.5:"backwards"==a&&(b.currentTime=b.currentTime-1.5)}function d(a){console.log(typeof a);var b,c=.5,d=2,e=.25,f=document.getElementById("audio").playbackRate;"up"==a&&d>f?b=f+e:"down"==a&&f>c?b=f-e:"reset"==a?b=1:"number"==typeof a&&(b=a),"undefined"!=typeof b&&(document.getElementById("audio").playbackRate=b,document.getElementById("slider3").value=b)}function e(){audiojs.events.ready(function(){audiojs.createAll()})}function f(){location.reload()}function g(){var a=$(".controls");console.log("Window width: "+$(window).width()+"\nControls offset: "+a.offset().left+"\nControls width: "+a.width()+"\nTitle width: "+$(".title").width());var b=$(window).width()-(a.offset().left+a.width()+$(".title").outerWidth()+$(".help-title").outerWidth());$(".scrubber").width($(".scrubber").width()+b),console.log(b)}function h(){$(".help-title").removeClass("active"),$(".help").removeClass("active"),$(".title").toggleClass("active"),$(".about").toggleClass("active")}function i(){$(".title").removeClass("active"),$(".about").removeClass("active"),$(".help-title").toggleClass("active"),$(".help").toggleClass("active")}function j(){$(".textbox-container").height(window.innerHeight-36)}function k(){var a=parseInt($("#textbox").offset().left,10)+700;$(".text-panel").css("left",a)}function l(a){var b,c=0,d=a.length;for(b=0;d>=b;b++)" "==a.charAt(b)&&c++;return c+1}function m(){var a=l(document.getElementById("textbox").innerHTML);document.getElementById("wc").innerHTML=a}function n(){setInterval(function(){m()},1e3)}function o(){var a=document.queryCommandState("Bold"),b=document.getElementById("icon-b"),c=document.queryCommandState("italic"),d=document.getElementById("icon-i");b.className=a===!0?"icon-bold active":"icon-bold",d.className=c===!0?"icon-italic active":"icon-italic"}function p(){setInterval(function(){o()},100)}function q(){var a=document.getElementById("textbox");localStorage.getItem("autosave")&&(a.innerHTML=localStorage.getItem("autosave")),setInterval(function(){localStorage.setItem("autosave",a.innerHTML)},1e3)}function r(){localStorage.getItem("lastfile")&&(document.getElementById("lastfile").innerHTML="Last file: "+localStorage.getItem("lastfile"),h())}function s(){var a=$(".file-input-wrapper")[0];a.addEventListener("dragover",function(){$(".file-input-wrapper").addClass("hover")},!1),a.addEventListener("dragleave",function(){$(".file-input-wrapper").removeClass("hover")},!1)}function t(a){var b=document.createElement("audio");return!(!b.canPlayType||!b.canPlayType("audio/"+a+";").replace(/no/,""))}function u(){var a=[],b=["mp3","ogg","webm","wav"],c=0;return b.forEach(function(b){1==t(b)&&(a[c]=b,c++)}),a.join(", ")}function v(a){var b=document.createElement("audio");return!(!b.canPlayType||!b.canPlayType(a.type).replace(/no/,""))}function w(b){var c=b.files[0];if(v(c)===!0)a(c),e(),g(),x(),localStorage.setItem("lastfile",c.name),$(".scrubber .loaded").html(c.name),console.log("Loading complete.");else{var d="Your browser does not support "+c.type.split("/")[1]+' files. Switch to a different browser or <a href="http://media.io">convert your file</a> to another format.';$("#formats").html(d).addClass("warning")}}function x(){$(".topbar").toggleClass("inputting"),$(".input").toggleClass("active"),$(".sbutton.time").toggleClass("active"),$(".text-panel").toggleClass("editing")}function y(){document.getElementById("formats").innerHTML="Your browser supports the following formats: "+u()+". You may need to <a href='http://media.io'>convert your file</a>."}function z(){$(".start").html("Start transcribing").addClass("ready")}function A(){var a=!!document.createElement("audio").canPlayType,b=document.getElementById("textbox").contentEditable,c=!!window.FileReader;return a&&b&&c?!0:!1}function B(){A()===!1&&(document.getElementById("old-browser").innerHTML='Your browser does not appear to support some HTML5 features necessary for oTranscribe to run correctly. Please switch to a <a href="http://browsehappy.com">modern desktop browser</a>.')}function C(){var a=window.navigator.userAgent;a.indexOf("CrOS")>-1&&(console.log("Chrome OS detected."),Mousetrap.bind("ctrl+1",function(a){return E(a),c("backwards"),!1}),Mousetrap.bind("ctrl+2",function(a){return E(a),c("forwards"),!1}),Mousetrap.bind("ctrl+3",function(a){return E(a),d("down"),!1}),Mousetrap.bind("ctrl+4",function(a){return E(a),d("up"),!1}))}function D(){B(),q(),r(),y(),j(),k(),s(),n(),p(),C(),z()}function E(a){a.preventDefault?a.preventDefault():a.returnValue=!1}D(),$(window).resize(function(){j(),g(),k()}),Mousetrap.bind("escape",function(a){return E(a),b(),!1}),Mousetrap.bind("f1",function(a){return E(a),c("backwards"),!1}),Mousetrap.bind("f2",function(a){return E(a),c("forwards"),!1}),Mousetrap.bind("f3",function(a){return E(a),d("down"),!1}),Mousetrap.bind("f4",function(a){return E(a),d("up"),!1}),Mousetrap.bind("mod+j",function(a){return E(a),ts.insert(),!1}),Mousetrap.bind("mod+s",function(a){return E(a),alert("No need to manually save - your transcript is automatically backed up continuously."),!1}),Mousetrap.bind("mod+b",function(a){return E(a),document.execCommand("bold",!1,null),!1}),Mousetrap.bind("mod+i",function(a){return E(a),document.execCommand("italic",!1,null),!1}),$(".play-pause").click(function(){b()}),$(".skip-backwards").click(function(){c("backwards")}),$(".skip-forwards").click(function(){c("forwards")}),$(".speed").click(function(){$(".speed-box").not(":hover").length&&($(this).toggleClass("fixed"),console.log($(".speed-box").not(":hover").length))}),$(".button.refresh").click(function(){f()}),$("#slider3").change(function(){d(this.valueAsNumber)}),$(".title").click(function(){h(),console.log("about")}),$(".help-title").click(function(){i()}),$("#close-help").click(function(){i()}),$(".about .start.ready").click(function(){h()}),$("#attach").change(function(){w(this)}),$("#icon-exp").click(function(){placeExportPanel()}),$(".textbox-container").click(function(a){return $(a.target).is("#icon-exp")||$(a.target).is(".export-panel")?(a.preventDefault(),void 0):(hideExportPanel(),void 0)})}();var ts={split:function(a){var b=a.split(":"),c=60*+b[0]+ +b[1];return c},setFrom:function(a,b){console.log(b.childNodes.length),1==b.childNodes.length&&(document.getElementById("audio").currentTime=ts.split(a))},get:function(){var a=document.getElementById("audio").currentTime,b=Math.floor(a/60),c=("0"+Math.round(a-60*b)).slice(-2);return b+":"+c},insert:function(){document.execCommand("insertHTML",!1,'<span class="timestamp" contenteditable="false" onclick="var x = this; ts.setFrom(\''+ts.get()+"', x);\">"+ts.get()+"</span>&nbsp;"),$(".timestamp").each(function(){$(this)[0].contentEditable=!1})}},exportText={md:function(){var a=document.getElementById("textbox").innerHTML,b=$.htmlClean(a,{format:!0,removeTags:["div","span","img","pre"]}),c=toMarkdown(b);return c.replace(/\t/gm,"")},txt:function(){var a=document.getElementById("textbox").innerHTML,b=$.htmlClean(a,{format:!0,removeTags:["div","span","img","em","strong","p","pre"]});return b.replace(/\t/gm,"")},utf8_to_b64:function(a){return window.btoa(unescape(encodeURIComponent(a)))},mdButton:function(){var a=exportText.md(),b=document.getElementById("x-md");b.download=exportText.name()+".md",b.href="data:text/plain;base64,"+exportText.utf8_to_b64(a)},txtButton:function(){var a=exportText.txt(),b=document.getElementById("x-txt");b.download=exportText.name()+".txt",b.href="data:text/plain;base64,"+exportText.utf8_to_b64(a)},name:function(){var a=new Date;return"Transcript exported "+a.toUTCString()}};
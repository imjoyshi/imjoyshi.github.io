self.webpackChunk(["mode/cypher"],{18:function(a,b,c){(function(a){a(c(0))})(function(a){"use strict";var b=function(a){return new RegExp("^(?:"+a.join("|")+")$","i")};a.defineMode("cypher",function(c){var d,e=function(a){var b=a.next();if("\""===b)return a.match(/.*?"/),"string";if("'"===b)return a.match(/.*?'/),"string";if(/[{}\(\),\.;\[\]]/.test(b))return d=b,"node";if("/"===b&&a.eat("/"))return a.skipToEnd(),"comment";if(l.test(b))return a.eatWhile(l),null;if(a.eatWhile(/[_\w\d]/),a.eat(":"))return a.eatWhile(/[\w\d_\-]/),"atom";var c=a.current();return i.test(c)?"builtin":j.test(c)?"def":k.test(c)?"keyword":"variable"},f=function(a,b,c){return a.context={prev:a.context,indent:a.indent,col:c,type:b}},g=function(a){return a.indent=a.context.indent,a.context=a.context.prev},h=c.indentUnit,i=b(["abs","acos","allShortestPaths","asin","atan","atan2","avg","ceil","coalesce","collect","cos","cot","count","degrees","e","endnode","exp","extract","filter","floor","haversin","head","id","keys","labels","last","left","length","log","log10","lower","ltrim","max","min","node","nodes","percentileCont","percentileDisc","pi","radians","rand","range","reduce","rel","relationship","relationships","replace","reverse","right","round","rtrim","shortestPath","sign","sin","size","split","sqrt","startnode","stdev","stdevp","str","substring","sum","tail","tan","timestamp","toFloat","toInt","toString","trim","type","upper"]),j=b(["all","and","any","contains","exists","has","in","none","not","or","single","xor"]),k=b(["as","asc","ascending","assert","by","case","commit","constraint","create","csv","cypher","delete","desc","descending","detach","distinct","drop","else","end","ends","explain","false","fieldterminator","foreach","from","headers","in","index","is","join","limit","load","match","merge","null","on","optional","order","periodic","profile","remove","return","scan","set","skip","start","starts","then","true","union","unique","unwind","using","when","where","with","call","yield"]),l=/[*+\-<>=&|~%^]/;return{startState:function(){return{tokenize:e,context:null,indent:0,col:0}},token:function(a,b){if(a.sol()&&(b.context&&null==b.context.align&&(b.context.align=!1),b.indent=a.indentation()),a.eatSpace())return null;var c=b.tokenize(a,b);if("comment"!==c&&b.context&&null==b.context.align&&"pattern"!==b.context.type&&(b.context.align=!0),"("===d)f(b,")",a.column());else if("["===d)f(b,"]",a.column());else if("{"===d)f(b,"}",a.column());else if(/[\]\}\)]/.test(d)){for(;b.context&&"pattern"===b.context.type;)g(b);b.context&&d===b.context.type&&g(b)}else"."===d&&b.context&&"pattern"===b.context.type?g(b):/atom|string|variable/.test(c)&&b.context&&(/[\}\]]/.test(b.context.type)?f(b,"pattern",a.column()):"pattern"===b.context.type&&!b.context.align&&(b.context.align=!0,b.context.col=a.column()));return c},indent:function(b,c){var d=c&&c.charAt(0),e=b.context;if(/[\]\}]/.test(d))for(;e&&"pattern"===e.type;)e=e.prev;var f=e&&d===e.type;return e?"keywords"===e.type?a.commands.newlineAndIndent:e.align?e.col+(f?0:1):e.indent+(f?0:h):0}}}),a.modeExtensions.cypher={autoFormatLineBreaks:function(a){for(var b,c,d,c=a.split("\n"),d=/\s+\b(return|where|order by|match|with|skip|limit|create|delete|set)\b\s/g,b=0;b<c.length;b++)c[b]=c[b].replace(d," \n$1 ").trim();return c.join("\n")}},a.defineMIME("application/x-cypher-query","cypher")})}});
//# sourceMappingURL=cypher.js.map
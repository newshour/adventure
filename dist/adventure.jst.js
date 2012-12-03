this["JSTA"] = this["JSTA"] || {};

this["JSTA"]["choice.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
__p+='<li class="adventure-choice adventure-'+
( obj.choiceId )+
'">\n    <a href="#'+
( obj.destId )+
'" class="adventure-choice-link">'+
( obj.wording )+
'</a>\n</li>\n';
return __p;
};

this["JSTA"]["decision.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
__p+='<p class="adventure-wording">'+
( obj.wording )+
'</p>\n<ul class="adventure-choices">\n';
 for (var i = 0, len = obj.choices.length; i < len; i++) { 
;__p+='\n    ';
 var choice = obj.choices[i]; 
;__p+='\n    ';
 print(choice.render()); 
;__p+='\n';
 } 
;__p+='\n</ul>\n';
return __p;
};

this["JSTA"]["endgame.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
__p+='<p class="adventure-wording">'+
( obj.wording )+
'</p>\n<p class="adventure-restart"><a href="#restart" class="adventure-restart-link">Try again</a></p>\n';
return __p;
};
var perline=15;var divSet=false;var curId;var onizlemId;var colorLevels=Array('0','3','5','7','9','B','C','E','F');var colorArray=Array();var ie=false;var nocolor='none';if(document.all){ie=true;nocolor='';}
function getObj(id){if(ie){return document.all[id];}
else{return document.getElementById(id);}}
function addColor(r,g,b){var red=colorLevels[r];var green=colorLevels[g];var blue=colorLevels[b];addColorValue(red,green,blue);}
function addColorValue(r,g,b){colorArray[colorArray.length]=''+r+r+g+g+b+b;}
function setColor(color){var link=getObj(curId);var field=getObj(curId+'field');var picker=getObj('colorpicker');field.value=color;if(color==''){link.style.backgroundColor='#FFFFFF';link.style.color='#FFFFFF';color='#FFFFFF';}else{link.style.backgroundColor="#"+color;link.style.color=color;}
populer_uygula();picker.style.display='none';eval(getObj(curId+'field').title);}
function setDiv(){if(!document.createElement){return;}
var elemDiv=document.createElement('div');if(typeof(elemDiv.innerHTML)!='string'){return;}
genColors();elemDiv.id='colorpicker';elemDiv.style.position='absolute';elemDiv.style.zindex='99';elemDiv.style.display='none';elemDiv.style.border='#000000 1px solid';elemDiv.style.backgroundColor='#000000';elemDiv.innerHTML=getColorTable();document.body.appendChild(elemDiv);divSet=true;}
function pickColor(id){if(!divSet){setDiv();}
var picker=getObj('colorpicker');if(id==curId&&picker.style.display=='block'){picker.style.display='none';return;}
curId=id;var thelink=getObj(id);picker.style.top=getAbsoluteOffsetTop(thelink)+20+"px";picker.style.left=getAbsoluteOffsetLeft(thelink)+"px";picker.style.display='block';}
function genColors(){addColorValue('0','0','0');addColorValue('2','2','2');addColorValue('3','3','3');addColorValue('4','4','4');addColorValue('5','5','5');addColorValue('6','6','6');addColorValue('7','7','7');addColorValue('8','8','8');addColorValue('9','9','9');addColorValue('A','A','A');addColorValue('B','B','B');addColorValue('C','C','C');addColorValue('D','D','D');addColorValue('E','E','E');addColorValue('F','F','F');for(a=1;a<colorLevels.length;a++)
addColor(0,0,a);for(a=1;a<colorLevels.length-1;a++)
addColor(a,a,8);for(a=1;a<colorLevels.length;a++){b=Math.round(a/2);addColor(b,b,a);}
for(a=1;a<colorLevels.length-1;a++){b=Math.round(a/2)+4;addColor(b,b,8);}
for(a=1;a<colorLevels.length;a++)
addColor(a,0,a);for(a=1;a<colorLevels.length-1;a++)
addColor(8,a,8);for(a=1;a<colorLevels.length;a++){b=Math.round(a/2);addColor(b,1,b);}
for(a=1;a<colorLevels.length-1;a++){b=Math.round(a/2)+4;addColor(b,a,b);}
for(a=1;a<colorLevels.length;a++)
addColor(a,0,0);for(a=1;a<colorLevels.length-1;a++)
addColor(8,a,a);for(a=1;a<colorLevels.length;a++){b=Math.round(a/2);addColor(a,b,0);}
for(a=1;a<colorLevels.length-1;a++){b=Math.round(a/2)+4;addColor(8,b,a);}
for(a=1;a<colorLevels.length;a++)
addColor(0,a,0);for(a=1;a<colorLevels.length-1;a++)
addColor(a,8,a);for(a=1;a<colorLevels.length;a++){b=Math.round(a/2);addColor(b,a,0);}
for(a=1;a<colorLevels.length-1;a++){b=Math.round(a/2)+4;addColor(b,8,a);}
for(a=1;a<colorLevels.length;a++)
addColor(a,a,0);for(a=1;a<colorLevels.length-1;a++)
addColor(8,8,a);for(a=1;a<colorLevels.length;a++)
addColor(0,a,a);for(a=1;a<colorLevels.length-1;a++)
addColor(a,8,8);for(a=1;a<colorLevels.length;a++){b=Math.round(a/2);addColor(0,b,a);}
for(a=1;a<colorLevels.length-1;a++){b=Math.round(a/2)+4;addColor(a,b,8);}
return colorArray;}
function getColorTable(){var colors=colorArray;var tableCode='';tableCode+='<table border="0" style="border:1px solid #000000;" cellspacing="0" cellpadding="0">';for(i=0;i<colors.length;i++){if(i%perline==0){tableCode+='<tr>';}
tableCode+='<td bgcolor="#000000" style="border:1px solid #000000;"><a style=" color: '
+colors[i]+'; background-color: #'+colors[i]+';font-size: 10px;" title="'
+colors[i]+'" href="javascript:setColor(\''+colors[i]+'\');">&nbsp;&nbsp;&nbsp;</a></td>';if(i%perline==perline-1){tableCode+='</tr>';}}
if(i%perline!=0){tableCode+='</tr>';}
tableCode+='</table>';return tableCode;}
function relateColor(id,color){var link=getObj(id);if(color==''){link.style.backgroundColor=nocolor;link.style.color=nocolor;color=nocolor;}else{link.style.backgroundColor=color;link.style.color=color;}
eval(getObj(id+'field').title);}
function getAbsoluteOffsetTop(obj){var top=obj.offsetTop;var parent=obj.offsetParent;while(parent!=null){top+=parent.offsetTop;parent=parent.offsetParent;}
return top;}
function getAbsoluteOffsetLeft(obj){var left=obj.offsetLeft;var parent=obj.offsetParent;while(parent!=null){left+=parent.offsetLeft;parent=parent.offsetParent;}
return left;}
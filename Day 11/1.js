const regex=/Catholic/g;
const str1="Nory was a Catholic beacuse her mother was";
document.write(str1);
document.write("<hr><br/>", str1.replace(regex,"Hindu"));

var regex1=/Nory/i;
var output=regex1.exec(str1);
document.write("<br/>",output);
//text() method
var matchcase=regex1.test(str1);
document.write("<br/>",matchcase);


let txt="WHAT what what what this this this 5365566!!!";
let result=txt.match(/[A-z]/g);
document.write("<br/>",result);
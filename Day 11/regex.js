let k=/hii/g;
let m=" hii hyy hii"
document.write(m,"<hr/>")
document.write(m.replace(k,"hmm"),"<br/>")


let a=/hii/i;
document.write(a.exec(m),"<br/>")

document.write(a.test(m),"<br/><br/>")

let text="md_dobariya@gg.co"
document.write(text.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))

const para = document.querySelectorAll('p')

console.log(para);       // nodeList(3) [p, p.para, p#para]

console.log(para[0]);      // <p> tag

console.log(para[1]);      // <p class=''> tag

console.log(para[4]);      // <p id=''> tag




const class1 = document.querySelectorAll('.para')

console.log(class1);        // nodeList(2) [p.para, p.para]

console.log(class1[0]);        // <p class=''> tag

console.log(class1[1]);        // <p class=''> tag



const id1 = document.querySelectorAll('#para')

console.log(id1);         // NodeList(2) [p#para, p#para]

console.log(id1[0]);      // <p id=''> tag

console.log(id1[1]);      // <p id=''> tag





const para = document.querySelector('p')
console.log(para);


para.style.backgroundColor = 'red'

para.style.color = 'yellow'

para.style.padding = '15px'

para.style.fontSize = '30px'



const p1 = para.innerHTML = 'hello'
console.log(p1);


const p2 = para.innerHTML = '<div>hello</div>'
console.log(p2);


const p3 = para.innerHTML = '<li>hello</li>'
console.log(p3);



const p4 = para.innerText = 'js'
console.log(p4);




// dont perfrom it log as it is given in string

// const p5 = para.innerText = '<li>list</li>'
// console.log(p5);



const p6 = para.textContent = 'javascript'
console.log(p6);



// dont perfrom it log as it is given in string

// const p7 = para.textContent = '<div>list</div>'
// console.log(p7);


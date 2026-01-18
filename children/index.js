
const parent = document.querySelector('.parent')
console.log(parent);

const children01 = parent.children
console.log(children01);           // HTMLCollection(4) [div.child, div.child, div.child, div.child]

const first = parent.firstElementChild
console.log(first);

const last = parent.lastElementChild
console.log(last);

const nodes = parent.childNodes
console.log(nodes);



// const n_th = document.querySelectorAll('.parent02:nth-child(3)')
// console.log(n_th);




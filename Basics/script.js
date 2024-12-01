const parent = document.querySelector('.parent');
console.log(parent);

// will return HTMLCollection consist of 7 Elementnodes of parent only..
// for this we use parent.children
console.log("ElementNodes: ",parent.children);

// will return the inner text of elementnode at index 1 // output: 2. Tuesday
//console.log(parent.children[1].innerHTML);
for(let i=0; i<parent.children.length; i++){
    parent.children[i].style.backgroundColor = 'lightpink';
    parent.children[i].style.color = 'black';
    parent.children[i].style.padding = '15px';
    parent.children[i].style.borderRadius = '15px';
    parent.children[i].style.margin = '5px';
    console.log(parent.children[i].innerHTML);
}


// Moving from Parent to children
// Will Show the firstElementChild 
// Show the Elementnode of FirstElement // Monday
console.log("Moving from Parent to Children: ")
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);



// Moving from Children to parent
console.log("Moving from children to Parent: ");
const dayOne = document.querySelector('.day');
console.log(dayOne);
// will know the parent by using parentElement
console.log(dayOne.parentElement);
// will know the next Sibling by using nextElementSibling
console.log(dayOne.nextElementSibling);


// will return Nodelist consist of 15 nodes having 8 textnodes and 7 elementNodes
// To know all the nodes we use parent.childNodes
console.log("NODES: ",parent.childNodes);
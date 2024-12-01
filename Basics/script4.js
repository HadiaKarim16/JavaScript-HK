// Adding a new list item 
function addLanguage(languageName){
    const li = document.createElement('li');
    li.innerHTML = `${languageName}`;
    document.querySelector('.language').appendChild(li);
}
 addLanguage('JavaScript')
 addLanguage('python');
 addLanguage('TypeScript');
  
 // Adding language in a very optimized way 
 // Because in the above it have to traversed the whole tree...
 function addLangOptimization(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
 addLangOptimization('Java');

 // Editing
const secondLanguage = document.querySelector("li:nth-child(3)");
console.log(secondLanguage);
//secondLanguage.innerHTML ="Php";

const newli = document.createElement('li');
newli.textContent = 'Php';
secondLanguage.replaceWith(newli);

// const firstLang = document.querySelector("li:last-child");
// firstLang.outerHTML = '<li>React.js</li>';

// Removing a List item
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
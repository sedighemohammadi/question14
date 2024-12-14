//Count the number of <li> in the countItems.html file and show the results in console.  

function countList() {
    const listitems = document.querySelectorAll('li')
    console.log(listitems.length);
    
}
countList()
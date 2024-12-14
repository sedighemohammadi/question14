const allpara = document.querySelectorAll('p')
//todo5. Loop through the nodeList and get the text content of each paragraph
allpara.forEach(para => {
    console.log(para.textContent);
})
//todo6. Set a text content to the fourth paragraph
paragraph4.textContent = "this is a new sentence"
//todo7. Set id and class attribute for all the paragraphs using different methods
allpara.forEach((paragraph, index) => {
    paragraph.id = `para${index + 1}`;
    paragraph.className = `class${index + 1}`;
});
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
allpara.forEach(paragraph => {
    paragraph.style.color = 'blue';
    paragraph.style.backgroundColor = 'gray';
    paragraph.style.border = '1px solid black';
    paragraph.style.fontSize = '16px';
    paragraph.style.fontFamily = 'Arial, sans-serif';
});
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
allpara.forEach((paragraph, index) => {
    if (index === 0 || index === 2) {
        paragraph.style.color = 'green'; 
    } else {
        paragraph.style.color = 'red';
    }
});

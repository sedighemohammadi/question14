//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red
const h1 = document.querySelector('h1');
const listItems = document.querySelectorAll('ul li');

const colors = {
    completed: 'green',
    ongoing: 'yellow',
    coming: 'red'
};

let colorIndex = 0;
const colorArray = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];

setInterval(() => {
    h1.style.color = colorArray[colorIndex];
    colorIndex = (colorIndex + 1) % colorArray.length;
}, 1000);

listItems.forEach(item => {
    if (item.textContent.includes('Done')) {
        item.style.backgroundColor = colors.completed;
    }
    
    if (item.textContent.includes('Ongoing')) {
        item.style.backgroundColor = colors.ongoing;
    }
    
    if (item.textContent.includes('Coming')) {
        item.style.backgroundColor = colors.coming;
    }
});
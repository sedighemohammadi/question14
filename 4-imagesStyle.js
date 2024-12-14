//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops
const images = document.querySelectorAll('img') ; 
const evenImage = {
    border : '5px solid blue' , 
    borderRadius : '10px'
}
const oddImage = {
    border : '5px dashed red' , 
    borderRadius : '10px'
}
for(let i = 0 ; i < images.length ; i++){
    if( i % 2 === 0 ){
        images[i].style.border = evenImage.border ; 
        images[i].style.borderRadius = evenImage.borderRadius ;
    }else {
        images[i].style.border = oddImage.border ; 
        images[i].style.borderRadius = oddImage.borderRadius
    }
}

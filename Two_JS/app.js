
// setTimeout( () => {
//     console.log("Satish ");   
// },2000)

// const hello = function() {
//     console.log("satish");  
// }
// setTimeout(hello ,2000)

// const changeText = function(){
//     document.querySelector('h1').innerText = "Yadav jii"
// }

// const changeME = setTimeout(changeText, 2000)

// document.querySelector('#stop').addEventListener('click' , function(){
//     clearTimeout(changeME);
//     console.log("STOPPED");  
// })

const interval = function(str){
    console.log(str ,"Ydava jii");
    
} 
let message;

document.querySelector("#start").addEventListener("click" , function(){
    message = setInterval(interval, 1000, "satish");
})

document.querySelector("#stop").addEventListener("click" , function(){
    clearInterval(message)
})
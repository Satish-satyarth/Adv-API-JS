// document.getElementById("owl").onclick = function(){
//     alert("Owl clicked");
// }

// attchEvent ()
// jQuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById("owl").addEventListener("click" , function(){
//     alert("owl clicked")
// }, false)

// document.getElementById("images").addEventListener("click" , function(e){
//     console.log("clicked inside ul");  
// }, false)

// document.getElementById("owl").addEventListener("click" , function(e){
//     console.log("owl clicked");
//     e.stopPropagation();
// }, false)

// document.getElementById("google").addEventListener("click", function(event){
//     console.log("google clicked");
//     event.preventDefault();
//     event.stopPropagation();
// }, false)

document.querySelector("#images").addEventListener("click", function(e){
    console.log(e.target.tagName);
    
    if(e.target.tagName === "IMG"){
        console.log(e.target.id);
        let removeImg = e.target.parentNode
        removeImg.remove();
    }
    
}, false)


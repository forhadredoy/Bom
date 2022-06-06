// console.log(location)

// console.log(location.protocol);

// console.log(location.port);

// console.log(location.pathname);

// console.log(location.host)

//  const para1 =document.getElementById("para-1")
//  para1.innerHTML = location.protocol

//  const para2=document.getElementById("para-2")
//  para2.innerHTML = location.port

//  const para3 =document.getElementById("para-3")
//  para3.innerHTML = location.pathname

//  const para4 =document.getElementById("para-4")
//  para4.innerHTML = location.host
// function myFunction(){
//     var mohiful =prompt(" your choiche is mohiful? ")

//     if (mohiful){

//         alert(" I am confirm you are rathi")
//     }

//      else{
//          alert("no yau are mafu")
//      }   
    
// }
// myFunction();
// console.log (screen.width)
// console.log (screen.height)
// console.log (screen.availWidth)
// console.log (screen.availHeight)
// console.log (screen.colorDepth)
// console.log (screen.pixelDepth)
// console.log(window.history)
// console.log(window.back)
// console.log(window.navigator)



const button =document.getElementById("button")
const para = document.getElementById("paragraph")

button.addEventListener('click', ()=>{
    setInterval( () =>{

        para.innerText="this is user confirm message"
    }, 3000)

})
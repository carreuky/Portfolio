document.getElementById("about-me").style.color = "black";
document.getElementById("proj").style.borderBottom = "thick solid black";
document.getElementById("proj-p").style.paddingTop = "20px";
const btnContact=document.querySelector('.contact-me')

const btn = document.getElementById('btn-menu');

btn.addEventListener("click", function () {

    btn.style.backgroundColor = 'yellow'
    
    });
// btnContact.addEventListener("click", btnfunction(){
//     // style.display = 'block';
    

// });function(){
// //     btnContact.style.display = 'block'
//     alert('clickeddd')
// }
btnContact.addEventListener('click', function(){
    document.getElementById("contact-me").style.display='block'
    
})
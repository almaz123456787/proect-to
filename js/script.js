let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');



menu.onclick = () => {
menu.classlist.toggle('fa-utensils')    
navbar.classlist.toggle('active')
}



window.onscroll = () =>{
    menu.classlist.remove('fa-utensils')
navbar.classlist.remove('active')

if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
}else{
    document.querySelector('#scroll-top').classList.remove('active');
  
}

}

function openMenu(){
    document.querySelector("menu").style.transition = "all 0.4s ease-in-out";
    document.querySelector("menu").style.transform = "translateY(0)";
    document.querySelector(".menu-button").removeEventListener('click', openMenu);
    document.querySelector(".menu-button").addEventListener('click', closeMenu);
    sleep(400).then(() => { 
        document.querySelector("menu").style.transition = ""; 
    });
}
function closeMenu(){
    document.querySelector("menu").style.transition = "all 0.4s ease-in-out";
    document.querySelector("menu").style.transform = "translateY(-411px)";
    document.querySelector(".menu-button").removeEventListener('click', closeMenu);
    document.querySelector(".menu-button").addEventListener('click', openMenu);
    sleep(400).then(() => { 
        document.querySelector("menu").style.transition = ""; 
    });
}
document.querySelector(".menu-button").addEventListener('click', openMenu);
window.onresize = function() {
    if (window.innerWidth > 1000) {
        document.querySelector("menu").style.transform = "translateY(0)";
        try {
            document.querySelector(".menu-button").removeEventListener('click', closeMenu);
            document.querySelector(".menu-button").addEventListener('click', openMenu);
        } catch (e) {}
    } else if (window.innerWidth < 1001) {
        document.querySelector("menu").style.transform = "translateY(-411px)";
    }
}

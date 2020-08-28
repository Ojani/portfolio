window.onscroll = () => {
    const scrollY = window.scrollY;

    if(scrollY > 20) {
        document.querySelector(".nav-bar").classList.add("scrolled");
    } else {
        document.querySelector(".nav-bar").classList.remove("scrolled");
    }
}
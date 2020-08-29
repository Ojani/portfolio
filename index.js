window.onscroll = () => {
    const scrollY = window.scrollY;

    if(scrollY > 20) {
        document.querySelector(".nav-bar").classList.add("scrolled");
        window.onscroll = undefined;
    }
}

// Setting the current year where necessary.
Array.from(document.querySelectorAll(".year")).forEach(e => 
    e.innerText = new Date().getFullYear()
);
const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.atr);
        } else {
            entry.target.classList.remove(entry.target.atr);
        }
    });
});




const hello = document.querySelectorAll(".center");
hello.forEach((el) => {el.atr = 'fade-in'; obs.observe(el);});

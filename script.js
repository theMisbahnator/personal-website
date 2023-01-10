// blobs
const blob1 = KUTE.fromTo(
    '#blobt4',
    { path: '#blobt4' },
    { path: '#blobt5' },
    { repeat: 999, duration: 5000, yoyo: true }
  )
  const blob2 = KUTE.fromTo(
    '#blobb4',
    { path: '#blobb4' },
    { path: '#blobb2' },
    { repeat: 999, duration: 5000, yoyo: true }
  )
  blob1.start();
  blob2.start();

  const waves = []
  let subject = "layer"

  for (let i = 1; i <= 9; i++) {
    const wave = KUTE.fromTo (
        `#${subject}${i}`, 
        {path: `#${subject}${i}`}, 
        {path: `#${subject}${i}${i}`}, 
        {repeat: 999, duration: 3000, yoyo: true}
    )
    waves.push(wave); 
  }

  waves.forEach((wave) => wave.start());

window.addEventListener("scroll", (event) => {
    // blobs 
    let scroll = this.scrollY;
    let proportion = scroll / window.innerHeight; 
    let x = Math.max((960 - (proportion * 960)), 0);
    let y = Math.max((540 - (proportion * 540)), 0); 
    var mySVG = document.getElementById('visual');
    mySVG.setAttribute( "viewBox", "0 0 " + x + " " + y);

    // text of first screen
    var text = document.getElementById("greeting-text"); 

    let fuzz = 0 + (proportion * .5) * 10; 
    let op = (1 - proportion * 2.2); 
    text.style.opacity = op;
    text.style.filter = `blur(${fuzz}px)`; 
}); 


// transitions 
const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("here");
            entry.target.classList.remove(entry.target.alt);
            entry.target.classList.add(entry.target.atr);
        } 
        else {
            entry.target.classList.remove(entry.target.atr);
            entry.target.classList.add(entry.target.alt);
        }
    });
});

const hello = document.querySelectorAll(".center");
hello.forEach((el) => {el.atr = 'fade-in'; el.alt = "gt"; obs.observe(el);});

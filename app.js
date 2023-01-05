const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    }) 
});

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenLeftElements = document.querySelectorAll(".hidden-left");
const hiddenRightElements = document.querySelectorAll(".hidden-right");
const logoElements = document.querySelectorAll(".logo");
hiddenElements.forEach( (el) => observer.observe(el));
hiddenLeftElements.forEach( (el) => observer.observe(el));
hiddenRightElements.forEach( (el) => observer.observe(el));
logoElements.forEach( (el) => observer.observe(el));
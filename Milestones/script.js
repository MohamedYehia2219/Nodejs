let introSection = document.querySelector("section[class=intro]");
let index=2;
let id = setInterval(()=>{
    introSection.style.backgroundImage = `url("images/intro${index}.png")`;
    ++index;
    if(index==6)
        index=1;
},5000)
//------------------------------------------------------
let part1 = document.getElementById("p1");
let part1item1 = document.getElementById("p1i1");


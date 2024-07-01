let introSection = document.querySelector("section[class=intro]");
let index=2;
let id = setInterval(()=>{
    introSection.style.backgroundImage = `url("images/intro${index}.png")`;
    ++index;
    if(index==6)
        index=1;
},5000)
//------------------------------------------------------
// 2 lines with learn more button --> pop up window
// 4 cards beside each others
// paragraph with each image (big font) with animation.


//1- create div, img, h3, p with intailize vlues
//2- append the three elements to the div
//3- append the div to the part
//4- add class popUp to the div (classlist)
//5- when on click the img --> add class hidden to the div

let part1 = document.getElementById("p1");
let part1item1 = document.getElementById("p1i1");
let div = document.createElement("div");
let img = document.createElement("img");
let h3 = document.createElement("h3");
let p = document.createElement("p");
img.setAttribute("src","images/remove.png");

part1item1.onclick=function(){
    h3.innerText="Artificial Lift";
    p.innerText=`Discover the power of Artificial Lift & cutting-edge testing gear in the dynamic world of oil & gas.
                    Unleash the potential of wells with pumps,
                    gas lift & precision monitoring, optimizing production & resource management to new heights!.`;
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);

    part1.appendChild(div);

    div.classList.add("popUp");
};

img.onclick=function(){
    div.classList.add("hidden");
}



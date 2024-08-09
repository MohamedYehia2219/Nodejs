let introSection = document.querySelector("section[class=intro]");
let index=2;
let id = setInterval(()=>{
    introSection.style.backgroundImage = `url("images/intro${index}.png")`;
    ++index;
    if(index==6)
        index=1;
},5000)
//------------------------------------------------------
// Items
let part1item1 = document.getElementById("p1i1");
let part1item2 = document.getElementById("p1i2");
let part1item3 = document.getElementById("p1i3");
let part1item4 = document.getElementById("p1i4");

let part2item1 = document.getElementById("p2i1");
let part2item2 = document.getElementById("p2i2");
let part2item3 = document.getElementById("p2i3");
let part2item4 = document.getElementById("p2i4");

let part3item1 = document.getElementById("p3i1");
let part3item2 = document.getElementById("p3i2");
let part3item3 = document.getElementById("p3i3");
let part3item4 = document.getElementById("p3i4");

// pop up elements
let div = document.createElement("div");
let img = document.createElement("img");
img.setAttribute("src","images/remove.png");
let h3 = document.createElement("h3");
let p = document.createElement("p");
div.appendChild(img);
div.appendChild(h3);
div.appendChild(p);
div.classList.add("popUp");
img.onclick=function(){
    div.classList.add("hidden");
}

//Items of part 1 
part1item1.onclick=function(){
    h3.innerText="Artificial Lift";
    p.innerText=`Discover the power of Artificial Lift & cutting-edge testing gear in the dynamic world of oil & gas.
                Unleash the potential of wells with pumps, gas lift & precision monitoring, optimizing production & resource management to new heights!.`;  
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";
    div.classList.remove("hidden");
};
part1item2.onclick=function(){
    h3.innerText="Production Testing";
    p.innerText=`We offer a high accuracy clamp on flow meter for water injection monitoring to enable operators to enhance their oil recovery rate. This meter measures the water
                flows from outside of the pipe and is therefore not in contact with the water itself. There is no risk for corrosion, erosion or scaling from the injection water at all.`;
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";
    div.classList.remove("hidden");
};
part1item3.onclick=function(){
    h3.innerText="Software";
    p.innerText=`Our software is designed to help you achieve your goals efficiently. Whether you need to interpret seismic data,
                build static models, simulate reservoir performance, model well and network behavior, allocate production, schedule rigs,
                manage well integrity, account for carbon emissions, or report drilling activities, our software has you covered.
                Our software is a comprehensive solution that integrates all these functionalities in a user-friendly interface.`;
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";      
    div.classList.remove("hidden");
};
part1item4.onclick=function(){
    h3.innerText="Consultation";
    p.innerText=`CISS offers a wide array of geoscience and engineering consulting services. Our offerings range from highly focused single-well investigations to fully integrated field studies and field development planning,
                including project economics and risk assessment. To ensure consistent, high-quality results, CISS applies patented, tightly integrated workflow processes developed while solving complex problems.`; 
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";
    div.classList.remove("hidden");
};

//Items of part 2 
part2item1.onclick=function(){
    h3.innerText="Compound Balancing Pumping Unit";
    p.innerText=`Compound Balancing Pumping Unit creates compound balancing equipment and combines all the advantages of conventional beam pumping unit.
                At the same time, it reduces electricity usage when the minimum torque is reached.`; 
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";  
    div.classList.remove("hidden");
};
part2item2.onclick=function(){
    h3.innerText="Double-horsehead Beam";
    p.innerText=`Double-horsehead pumping unit is based on the model of conventional type. It adopts special curve beam arm. 
                It is one of the ten energy conservation pumping unit that China National Petrochemical Corp recommends, which is able to save more than 20% energy.`;
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";   
    div.classList.remove("hidden");
};
part2item3.onclick=function(){
    h3.innerText="Preposition type Double-horsehead";
    p.innerText=`Preposition type double-horsehead beam pumping unit is balanced with mounting horsehead on the back of walking beam,
                inside counterbalance and hanging balancing weight on the back-horse head. It displays simpler structure,
                easier ways of rebalancing and maintenance, smaller additional dynamic load, longer stroke length, less energy consumption, greater efficiency and longer service life.`;
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";
    div.classList.remove("hidden");
};
part2item4.onclick=function(){
    h3.innerText="Diameter adjust moment regulate";
    p.innerText=`Diameter adjust moment regulate pumping unit has advantages of simpler structure, reliable working quality and convenient repairment.
                It is extremely suitable for extraction of low and medium viscosity petro and high-water content petro for horizontal well,
                inclined well and viscous crude well that are hard to extract in normal condition, it is able to extract with greater size of reducer, motor and less SPM.`;
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";   
    div.classList.remove("hidden");
};

//Items of part 3 
part3item1.onclick=function(){
    h3.innerText="Echometer";
    p.innerText=`Experience unmatched accuracy in depth assessment with Echometer. Using cutting-edge echo-based technology, this compact device de- livers instant,
                reliable measurements for both water and underground applications. Say good- bye to uncertainty and hello to precise insights,
                whether you ’re diving into oceans or exploring subterranean landscapes. Elevate your depth measurement game with Echometer today!.`; 
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";  
    div.classList.remove("hidden");
};
part3item2.onclick=function(){
    h3.innerText="Ultrasonic Clamp on Meter";
    p.innerText=`Introducing our clamp meter – the smart solution for accurate current measurements with- out circuit interruption.
                Choose from Load Current or Leakage Current models, covering AC/DC and various methods. Discover a new era of effortless and safe measurements.
                Upgrade now for precision in a single clamp!.`;   
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";
    div.classList.remove("hidden");
};
part3item3.onclick=function(){
    h3.innerText="Digital Pressure Gauge";
    p.innerText=`Introducing our cutting-edge digital pressure gauges – the future of accurate pressure measurement. 
                Experience the advantage of crystal-clear digital displays that provide instant readings with unmatched clarity. These gauges go beyond tradition,
                storing and transmitting pressure data electronically for enhanced efficiency. Ideal for industrial, scientific, and medical contexts,
                our digital pressure gauges excel in measuring gases, liquids, and vapors in various containers.`;
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";   
    div.classList.remove("hidden");
};
part3item4.onclick=function(){
    h3.innerText="Heat Guns";
    p.innerText=`Introducing our state-of-the-art IR thermometers – your key to accurate temperature readings from a distance. From machinery to ovens, our devices deliver 
                non-contact measurements with unparalleled ease. Choose your ideal model with adjustable features for diverse applications. Upgrade to precision today!.`;
    document.body.append(div);
    div.style.top=window.scrollY+250+"px";   
    div.classList.remove("hidden");
};

//***************************************************Side Bar*************************************** */
let p1 = "Our mission is to deliver world-class knowledge"
let p2 = "Technology and Expertise to empower local talent"
let text = p2;
let toggle = false; 
let introSectionText = document.querySelector("p[class=introText]");
let id2 = setInterval(()=>{
    introSectionText.innerText=`${text}`;
    toggle = !toggle;
    if(toggle)
        text = p1;
    if(!toggle)
        text = p2;
},5000)
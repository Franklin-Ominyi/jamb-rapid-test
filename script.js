const a = document.forms['myForm']["q1"];
const ques = document.querySelector('.ques');
const option = document.querySelectorAll('.opt');
const scoreDom = document.querySelector('.scoreDom');
const choose = document.querySelectorAll('.choose');
const p = document.querySelector('.p-tag');
const btnModal = document.querySelectorAll('.btn-modal');
var subject = 0;



choose.forEach((btn,i)=>{
  btn.addEventListener('click', ()=>{
  
    choose[subject].classList.remove("active");
    subject = i;
    choose[subject].classList.add("active");
    numbers.forEach((data,iterate) => {
      data.classList.remove("answered");
      if (questions[subject][iterate].answered[1] == true) {
        numbers[iterate].classList.add("answered");
      } else {
        return;
      }
    })
    console.log(index,subject)
    clear();
    reFresh(index = 0);
    answered();
  })
})

choose[subject].classList.add("active");


const num = document.querySelector('#num');


const opt0 = document.querySelector("#opt0");
const opt1 = document.querySelector("#opt1");
const opt2 = document.querySelector("#opt2");
const opt3 = document.querySelector("#opt3");

const btn = document.querySelectorAll('.btn');
const quesNumDom = document.querySelector('.quesNum');
let arr = [[],[],[]];
let ans = [[],[],[]];

let subjectScore = [];

let score = [];
let result = [];
let index = 0;
let quesNum;




// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the modal
var modal = document.getElementById('myModal');


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // location.reload();
    }
}


//countdown
const countDom = document.querySelectorAll('.countDom');
var count = 60;
var countHour = 70;
countDom[0].innerHTML = countHour;
countDom[1].innerHTML = count;

const countDown = ()=>{
  if(count > 0){
    count--;
    countDom[1].innerHTML = count < 10 ? "0"+ count : count;
  }else if(count == 0){
    countHour--;
    countDom[0].innerHTML = countHour < 10 ? "0"+ countHour : countHour;
    count = 60;
  }  
}

const timeUp = ()=>{
  if(countHour == 0){
    submit();
  }  
}

setInterval(timeUp,500);

setInterval(countDown,1000);


// ///////////
const questions = [
  [
    {
      question: "Pineapple is an example of", options: ["composite fruit", "a simple fruit", "an aggregrate fruit", "a dehiscent fruit"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "In mammals, the organ directly on top of the kidney is the", options: ["prostate gland", "thyroid gland", "pancreas", "adrenal gland"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "The opening and closing of the stoma are regulated by", options: ["osmosis", "diffusion", "transpiration", "respiration"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "Which of the following is used mainly for balancing in fish", options: ["the caudal fin", "the pectoral fin", "the anal fin", "the dorsal fin"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "Insectivorous plants trap and kill their prey to derive", options: ["phoshorous", "calcium", "nitrogen", "zinc"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "During ovulation, an egg is released from the", options: ["corpus luteum", "ovarian funnel", "grafian folicle", "fallopian tube"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "Chewing the cud is an adaptation peculiar to", options: ["herbivores", "omnivores", "rodent", "ruminants"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "The likely pollinating agent of the flower is", options: ["wind", "water", "insect", "man"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "The barrier between material and foetal blood is the", options: ["placenta", "liver", "umbilical cord", "uterine wall"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "In the male reproductive system of mammal, sperm is stored in the", options: ["vas deferes", "urethra", "epididymis", "seminiferous tubules"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "A pair of genes that control a trait is referred to as", options: ["an allele", "recessive", "dominant", "a hybrid"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "Thryoxine and adrenalin are examples of hormones which control", options: ["blood grouping", "tongue rolling", "behavioural patterns", "colour variation"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "The flippers of a whale and the fins of a fish are example of", options: ["divergent evolution", "coevolution", "continous variation", "convergent evolution"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "Which of the following is most advanced in the evolutionary trend of animals", options: ["liverfluke", "earthworn", "snail", "cockroach"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "The use and disuse of body parts and inheritance of acquired traits were used to explain", options: ["Darwin's theory", "Lamarck's theory", "genetic drift", "gene flow"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "The plants that grow in deserts or very dry areas are referred to as", options: ["epiphytes", "xerophytes", "mesophytes", "hydrophytes"],
      cc: 1,
      answered: [false, false]
    },
  
  
    {
      question: "Movement of minerals aand chemical compounds within a plant occurs during", options: ["transpiration", "diffusion", "osmosis", "translocation"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "Oestrogen is a hormone that is synthesized in the", options: ["anterior pituitary", "ovaries", "testis", "adrenal cortex"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "A pollutant that is biodegradable is", options: ["cellophone", "sewage", "crude oil", "heavy metals"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "The special color change in chamelon is", options: ["chromatin", "chromatophore", "melanin", "carotenoid"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "The solid part of the ecosystem is referred to as the", options: ["biosphere", "lithosphere", "atmosphere", "hydrosphere"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "The clumping together of red blood cells is", options: ["transfusion", "aestivation", "agglutination", "fission"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "The soil with the highest water-retaining capacity is", options: ["loamy soil", "clayey soil", "stoney soil", "sandy soil"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "Radial symmetry is a feature common to the", options: ["platyhelminthes", "nematodes", "coelenterates", "anthropods"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "The cell of an onion bulb can be differentiated from a cheek cell by the presence of", options: ["plasmalemma", "chloroplast", "cell wall", "nucleus"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "In vascular plants, the sieve tubes and companion cells are present in the", options: ["phloem", "cambium", "cortex", "xylem"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "The cerebellum of the brain controls", options: ["the endocrine system", "reflex actions", "muscular activity", "emotional expression"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "Which of the following is aboreal organism", options: ["bird", "elephant", "fish", "antelope"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "The only vien that carries pure oxygenated blood is the", options: ["sciatic vein", "hepatic vein", "renal vein", "pulmonary vein"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "A non-renewable alternative source of energy is", options: ["hydroelectric power", "wind generators", "solar panels", "nuclear energy"],
      cc: 3,
      answered: [false, false]
    }
  ],
  [
    {
      question: "According to the kinetic theory, an increase in temperature causes the kinetic energy of particles to", options: ["remain constant", "decrease", "be zero", "increase"],
      cc: 3,
      answered: [false, false]
    },
    {
      question: "When cathode rays are deflected onto the electrode of an electrometer, the instrument becomes",
      options: ["bipolar", "negatively charged", "positively charged", "neutral"],
      cc: 1,
      answered: [false, false]
    },
    {
      question: "The filter in cigarette reduces the nicotine content by", options: ["adsorption", "absorption", "burning", "evaporation"],
      cc: 0,
      answered: [false, false]
    },
    {
      question: "The solution that will conduct higher amount of electricity is", options: ["2.0 mol dm<sup>-3</sup> of hydrochloric acid", "2.0 mol dm<sup>-3</sup> of ethanoic acid", "0.5 mol dm<sup>-3</sup> of hydrochloric acid", "0.5 mol dm<sup>-3</sup> of ethanoic acid"],
      cc: 2,
      answered: [false, false]
    },
    {
      question: "The suphide which is insoluble in dilute hydrochloric acid is",
      options: ["ZnS", "Na<sub>2</sub>S", "FeS", "CuS"],
      cc: 3,
      answered: [false, false]
    },
    {
      question: "On heating, which of the following compounds will decompose to the free metal, nitrogen (IV) oxide and oxygen", options: ["AgNO<sub>3</sub>", "Cu(NO<sub>3</sub>)<sub>2</sub>", "Ca(NO<sub>3</sub>)<sub>2</sub>", "NaNO<sub>3</sub>"],
      cc: 0,
      answered: [false, false]
    },
    {
      question: "Group IA metals are not found free in nature because they", options: ["are malleable and ductile", "have high boiling and melting points", "conduct heat and electricity", "are very reactive and unstable"],
      cc: 3,
      answered: [false, false]
    },
    {
      question: "Dynamic equilibrium describes a situation where", options: ["reactants are converted to product", "both forward and backward reactions proceed at the same time", "the concentration of reactants and products is equal", "a reaction gives back the reactants"],
      cc: 1,
      answered: [false, false]
    },
    {
      question: "Carbon exists naturally in combined state as", options: ["graphite", "wood", "coal", "diamond"],
      cc: 2,
      answered: [false, false]
    },
    {
      question: "Trioxonitrate(V) acid is not used for preparing hydrogen gas from metals because it", options: ["renders the metal positive", "is volatile", "is strongly oxidizing", "forms a layer of oxide on the metal"],
      cc: 2,
      answered: [false, false]
    },
    {
      question: "The ion that will give a white precipitate with aqueous NaOH and soluble in excess of the base is", options: ["Mg<sup>2+</sup>", "Zn<sup>2+</sup>", "Cu<sup>2+</sup>", "Ca<sup>2+</sup>"],
      cc: 1,
      answered: [false, false]
    },
    {
      question: "What is the molar mass of a substance, if 0.4 mole of the substance has a mass of 25.0g?", options: ["6.3g", "62.5g", "2.5g", "40.0g"],
      cc: 1,
      answered: [false, false]
    },
    {
      question: "If 30 cm<sup>3</sup> of a gas at 50 <sup>o</sup>C is warmed to 80 <sup>o</sup>C at a fixed pressure, the fractional increase in volume is", options: ["0.093", "1.090", "0.009", "0.910"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "What is the molar mass of a substance, if 0.4 mole of the substance has a mass of 25.0g?", options: ["6.3g", "62.5g", "2.5g", "40.0g"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "Which of the following represents an aromatic compound?", options: ["C<sub>6</sub>H<sub>5</sub>OH", "C<sub>6</sub>H<sub>12</sub>", "C<sub>6</sub>H<sub>9</sub>OH", "C<sub>6</sub>H<sub>8</sub>"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "The IUPAC nomenclature of the compound CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>2</sub>CH<sub>3</sub>", options: ["propyl ethanoate", "ethyl butanoate", "ethyl propanoate", "methyl butanoate"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "Polyvinyl chloride is used in the production of", options: ["glass", "alloy", "pipes", "ceramics"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "The compound that is used as anaesthetic is", options: ["CCl<sub>3</sub>", "CHCl<sub>3</sub>", "CH<sub>2</sub>Cl<sub>2</sub>", "CH<sub>3</sub>Cl"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "CH<sub>4(g)</sub> + Cl<sub>2(g)</sub> ==> CH<sub>3</sub>Cl<sub>(s)</sub> + HCl<sub>(g)</sub> <br> Which of the below factors help the above reaction to take place?", options: ["temperature", "concentration", "light", "catalyst"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "Zn<sub>(s)</sub> + CuSO<sub>4(aq)</sub> ==> ZnSO<sub>4(aq)</sub> + Cu<sub>(s)</sub> <br> In the reaction above, the substance that is being reduced is", options: ["Cu<sub>(s)</sub>", "Zn<sub>(s)</sub>", "CuSO<sub>4(aq)</sub>", "ZnSO<sub>4(aq)</sub>"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "The monomer of natural rubber is", options: ["2-methylbuta-1,3-diene", "1-buten-3-yne", "buta-1,3-diene", "2-chlorobuta-1,3-diene"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "The process of converting starch to ethanol is", options: ["cracking", "distillation", "fermentation", "oxidation"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "A gas that forms a black precipitate with lead(II) ethanoate is", options: ["Cl<sub>2</sub>", "NH<sub>3</sub>", "H<sub>2</sub>", "H<sub>2</sub>S"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "A few drops of NaOH solution was added to an unknown salt forming a white precipitate which is insoluble in excess solution. The cation likely present is", options: ["Zn<sup>2+</sup>", "Pb<sup>2+</sup>", "Ca<sup>2+</sup>", "Al<sup>3+</sup>"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "The reaction of sucrose with dilute HCl produces", options: ["An alkaline", "Glucose and Fructose", "A black mass of carbon", "Polysaccharide"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "A few drops of HNO<sub>3</sub> is added to an unknown solution and boiled for a while, if this produces a brown solution, the cation present is likely to be", options: ["Pb<sup>2+</sup>", "Cu<sup>2+</sup>", "Fe<sup>2+</sup>", "Fe<sup>3+</sup>"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "The oxidation number of boron in NaBH<sub>4</sub> is", options: ["-3", "-1", "+1", "+3"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "Which of the following will liberate hydrogen from dilute tetraoxosulphate(IV) acid?", options: ["Copper", "Gold", "Lead", "Magnesium"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "In a equilibrium reaction which of the following conditions indicates that maximum yield of the product will be obtained", options: ["&#916H > T&#916S", "Equilibrium constant is less than zero", "Equilibrium constant is very large", "&#916H - T&#916S > 0"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "How long would it take to deposit 0.08g of copper from CuCl<sub>2</sub> solution by passing a current of 0.5A? <br> <br>  [Cu = 64, F = 96500Cmol<sup>-1</sup>]", options: ["6 mins", "8 mins", "24 mins", "48 mins"],
      cc: 1,
      answered: [false, false]
    }],
  [
    {
      question: "The unit of moment of a couple can be expressed in", options: ["Nm<sup>-1</sup>", "Nm<sup>-2</sup>", "Nm", "Nm<sup>2</sup>"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "A car of mass 1500kg goes arround a circulaar curve of radius 50m at a speed of 40ms<sup>-1</sup>. The magnitude of the centripetal force on the car is", options: ["4.8 x 10<sup>4</sup>N", "4.8 x 10<sup>3</sup>N", "1.2 x 10<sup>3</sup>N", "1.2 x 10<sup>2</sup>N"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "A piece of iron weighs 250N in air and 200N in a liquid of density 1000kgm<sup>-3</sup>. The volume of the iron is <br> <br> [g=10ms<sup>-2</sup>]", options: ["5.0 x 10<sup>-3</sup>m<sup>-3</sup>", "4.5 x 10<sup>-3</sup>m<sup>-3</sup>", "2.5 x 10<sup>-3</sup>m<sup>-2</sup>", "2.0 x 10<sup>-3</sup>m<sup>-3</sup>"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "The pitch of a sound note depends on", options: ["timbre", "frequency", "harmonics", "quality"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "Transverse waves can be distinguished from longitudinal waves using the characteristic of", options: ["diffraction", "refraction", "polarization", "reflection"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "At low humidity in an environment, the human skin is usually", options: ["damp and rough", "damp and smooth", "dry and rough", "dry and smooth"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "The motion of smoke particles from a chimmey is typical of", options: ["random motion", "circular motion", "rotational motion", "oscilatory motion"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "The phenomenon of light bending round an obstacle is", options: ["diffraaction", "refraction", "reflection", "polarization"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "The bond that forms a semiconductor is", options: ["covalent", "electovalent", "ionic", "metallic"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "If two charged plates are maintained at a potential difference of 3kV, the work done in taking a charge of 	&#181;C across the field is", options: ["0.8J", "1.8J", "9.0J", "18.0J"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "If the decay constant of a radioactive substance is 0.231s<sup>-1</sup>, the half-life is", options: ["3.00s", "0.12s", "0.33s", "1.50s"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "The wavelength of the first overtone of a note in a closed pipe of length 33cm is", options: ["33 cm", "44 cm", "22 cm", "17 cm"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "Counting of currency notes with moist fingers is based on the principles of", options: ["diffusion", "cohesion", "adhesion", "viscosity"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "In a good thermos flask, the main cause of heat loss is", options: ["conduction through the cork", "the plastic base of the thermos flask", "the silvered walls and shiny metals", "the outer cover or jacket"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "Convex mirrors are used as driving mirros because images formed are", options: ["erect, virtual and diminished", "erect, real and diminished", "erect, virtual and magnified", "inveted, virtual and diminished"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "In the microscope, the eyepiece lens merely acts", options: ["an inverter", "a refiner", "a diminisher", "a magnifier"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "A sealed flask contiains 600cm<sup>3</sup> of air at 27<sup>o</sup>C and is heated to 35<sup>o</sup>C at constant pressure. The new volume is", options: ["508 cm<sup>3</sup>", "516 cm<sup>3</sup>", "608 cm<sup>3</sup>", "616 cm<sup>3</sup>"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "A car acceleraties uniformly from rest at 4 ms<sup>-2</sup>. How far will it travel in the fifth complete second?", options: ["100 m", "50 m", "32 m", "18 m"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "If a heavy barrel is rolled up a plane inclined at 30<sup>o</sup> to the horizontal, its velocity ratio wil be", options: ["3.0", "3.1", "3.2", "2.0"],
      cc: 3,
      answered: [false, false]
    },
  
    {
      question: "If a cage containing a truck of coal weighing 750 kg is raised to height 90 m in 1 minutes, what is the total power expended <br><br> [g = 10 ms<sup>-2</sup>]", options: ["11.50 kW", "12.60 kW", "11.25 kW", "12.20 kW"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "A bullet fired vertically upward from a gun held 2.0 m above the ground reaches its maximum height in 4.0 s. Calculate its initial velocity <br><br> [g = 10 ms<sup>-2</sup>]", options: ["10 ms<sup>-1</sup>", "8 ms<sup>-1</sup>", "40 ms<sup>-1</sup>", "20 ms<sup>-1</sup>"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "A perfect emitter or absorber of radiant energy is a", options: ["conductor", "black body", "white body", "red body"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "When a red rose flower is observed in blue light, what colour does the observer see?", options: ["red", "blue", "magneta", "yellow"],
      cc: 2,
      answered: [false, false]
    },
  
    {
      question: "Which of the following materials has an increase in resistance with temperature", options: ["water", "metals", "wood", "electrolyte"],
      cc: 1,
      answered: [false, false]
    },
  
    {
      question: "The process of detecting a pin mistakenly swallowed by a child is x-ray", options: ["diagnosis", "therapy", "crystallography", "mamnography"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "Which of the following particles will not be deflected by both magnetic and electric field?", options: ["gamma rays", "alpha particles", "wave particles", "beta particles"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "A piece of cork floats in a liquid, what fraction of its volume will be immersed in the liquid? <br><br>[density of cork = 0.25 x 10<sup>3</sup> kgm<sup>-3</sup>] <br> [density of the liquid = 1.25 x 10<sup>3</sup> kgm<sup>-3</sup>]", options: ["0.2", "0.1", "0.8", "0.5"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "Calculate the energy of the third level of an atom, if the ground state energy is -24.8eV", options: ["-2.75eV", "-1.75eV", "-9.20eV", "-8.20eV"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "A machine whose efficiency is 75% is used to lift a load of 1000N. Calculate the effort put in to the machine if it has a velocity ratio 4", options: ["333.33N", "334.33N", "343.32N", "233.33N"],
      cc: 0,
      answered: [false, false]
    },
  
    {
      question: "The focal length of a concave mirror is 2.0 cm. If an object is placed 8.0 cm from it, the image is at", options: ["2.3 m", "2.5 m", "2.7 m", "2.0 m"],
      cc: 2,
      answered: [false, false]
    }
  ]
];


  




ques.innerHTML = questions[subject][index].question;

for (var i = 0; i < questions[subject][index].options.length; i++) {
  option[i].innerHTML = questions[subject][index].options[i];
}

quesNum = index + 1;

const funcAddNum = () => {
  for (var i = 0; i < questions[subject].length; i++) {
    let span = document.createElement('span');
    span.innerHTML = (i + 1);
    span.className = "numbers";
    num.appendChild(span)
  }
}

funcAddNum();

const numbers = document.querySelectorAll('.numbers');

//checkSelect checks both the keyboard event and the mouse event
const checkSelect = () => {
  //check if any option is selected
  if (a.value == null || a.value == undefined || a.value == '') {
    questions[subject][index].answered[1] = false;
  } else if (a.value != null || a.value != undefined || a.value != '') {
    questions[subject][index].answered[1] = true;
    ans[subject][index] = a.value;
  };

  //adding color to the answered questions
  if (questions[subject][index].answered[1] == true) {
    numbers[index].classList.add("answered");
  } else {
    return;
  }

}

//updating the options which have been answered before in the DOM
const answered = () => {
  if (ans[subject][index] != null || ans[subject][index] != undefined || ans[subject][index] != "") {
    a.value = ans[subject][index];
  }
}

//reFresh just goes to the question with the index provided and it also calls the anwered function.

const reFresh = (index) => {
  quesNum = index + 1;
  quesNumDom.innerHTML = quesNum + ". ";

  //check whether question have been displayed
  if (questions[subject][index].question) {
    questions[subject][index].answered[0] = true;
  }

  //outputting the option in the dom
  for (var i = 0; i < questions[subject][index].options.length; i++) {
    option[i].innerHTML = questions[subject][index].options[i];
  }

  //outputting answers that have been already selected
  answered();


  ques.innerHTML = questions[subject][index].question;

}



//looping through the radio buttons to check if answered correctly and  update the arr array
a.forEach((data, i) => {
  data.addEventListener('click', () => {
    if (a.value != questions[subject][index].cc) {
      arr[subject][index] = false;
    } else if (a.value == questions[subject][index].cc) {
      arr[subject][index] = true;
    }
    checkSelect();
  })
})


//clear function
const clear = () => {
  var optionSelected = a.value;
  if (optionSelected == 0) {
    opt0.checked = false;
  } else if (optionSelected == 1) {
    opt1.checked = false;
  } else if (optionSelected == 2) {
    opt2.checked = false;
  } else if (optionSelected == 3) {
    opt3.checked = false;
  }
}

//adding click events to the numbers
numbers.forEach((number, i) => {
  number.addEventListener('click', () => {
    index = i;
    ques.innerHTML = questions[subject][index].question;
    clear();
    reFresh(i);
    answered();
  })
})



//next function
const next = () => {
  if (index + 1 < questions[subject].length) {
    clear();
    index = index + 1;
    quesNum = index + 1;
    ques.innerHTML = questions[subject][index].question;
    reFresh(index);
  }
}

const previous = () => {
  if (index > 0) {
    clear();
    index = index - 1;
    quesNum = index + 1;
    ques.innerHTML = questions[subject][index].question;
    reFresh(index);
  } else if (index == 0) {
    return;
  }

}
const submitYes=()=>{
  // console.log(arr)
  for(var i=0; i < questions.length; i++){{
    subjectScore[i] = arr[i].filter(data => data == true);
  }
  subjectScore.forEach((data,index)=>{
    score[index] = data.length;
  })
  }
  
  console.log(score);
  
  scoreDom.innerHTML = "You got " + score[0]  + "  questions in Biology and your score is " + (score[0]  / questions[0].length) * 100 + "% <br>" +
  
  "You got " + score[1] + "  questions in Chemistry and your score is " + (score[1] / questions[1].length) * 100 + "% <br>" + 

  "You got " + score[2] + "  questions in Physics and your score is " + (score[2] / questions[0].length) * 100 + "% <br>";
  console.log(score)
}
const submit = () => {
  console.log(arr)
  modal.style.display = "block";
  btnModal[0].innerHTML = "Yes";
  btnModal[1].innerHTML = "No";
  p.innerHTML = "Are you sure you want to submit?"

  btnModal[0].addEventListener('click', ()=>{
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          location.reload();
      }
    }
    p.innerHTML = '';

    submitYes()

  
    btnModal[0].innerHTML = "Write Exam Again";
    btnModal[1].innerHTML = "Exit";

    btnModal[0].addEventListener('click', ()=>{
      location.reload()
    })

    btnModal[1].addEventListener('click', ()=>{
      window.close();
    })
  }) 
  
  btnModal[1].addEventListener('click', ()=>{
    modal.style.display = "none";
  })
}


const press = (e) => {
  if (e.type === "keypress") {
    if (e.which == 97 || e.keyCode == 97) {
      a.value = "0";
    } else if (e.which == 98 || e.keyCode == 98) {
      a.value = "1";
    } else if (e.which == 99 || e.keyCode == 99) {
      a.value = "2";
    } else if (e.which == 100 || e.keyCode == 100) {
      a.value = "3";
    } else if (e.which == 112 || e.keyCode == 112) {
      previous();
    } else if (e.which == 110 || e.keyCode == 110) {
      next();
    } else if (e.which == 115 || e.keyCode == 115) {
      submit();
    }

    /////////////////////////////
    //computing correct or wrong in the arr array
    if (a.value != questions[subject][index].cc) {
      arr[subject][index] = false;
    } else if (a.value == questions[subject][index].cc) {
      arr[subject][index] = true;
    }

    checkSelect();

  }
}


//click event to the next and prev btn
btn[0].addEventListener('click', () => {
  previous()
}
)

btn[1].addEventListener('click', () => {
  next()
}
)

//updating the quesNumDom in the DOM
quesNumDom.innerHTML = quesNum + ". ";
window.addEventListener('keypress', press)

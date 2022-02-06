const a = document.forms["myForm"]["q1"];
const ques = document.querySelector(".ques");
const option = document.querySelectorAll(".opt");
const scoreDom = document.querySelector(".scoreDom");
const choose = document.querySelectorAll(".choose");
const p = document.querySelector(".p-tag");
const btnModal = document.querySelectorAll(".btn-modal");
import questions from "../data/data.js";

let subject = 0;

choose.forEach((btn, i) => {
 btn.addEventListener("click", () => {
  choose[subject].classList.remove("active");
  subject = i;
  choose[subject].classList.add("active");
  numbers.forEach((data, iterate) => {
   data.classList.remove("answered");
   if (questions[subject][iterate].answered[1] == true) {
    numbers[iterate].classList.add("answered");
   } else {
    return;
   }
  });

  clear();
  reFresh((index = 0));
  answered();
 });
});

choose[subject].classList.add("active");

const num = document.querySelector("#num");
const opt0 = document.querySelector("#opt0");
const opt1 = document.querySelector("#opt1");
const opt2 = document.querySelector("#opt2");
const opt3 = document.querySelector("#opt3");

const btn = document.querySelectorAll(".btn");
const quesNumDom = document.querySelector(".quesNum");
let arr = [[], [], []];
let ans = [[], [], []];

let subjectScore = [];

let score = [];
let result = [];
let index = 0;
let quesNum;

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// Get the modal
const modal = document.getElementById("myModal");
const resultModal = document.getElementById("result-modal");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
 modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
 if (event.target == modal) {
  modal.style.display = "none";
  // location.reload();
 }
};

//countdown
const countDom = document.querySelectorAll(".countDom");
var count = 60;
var countHour = 70;
countDom[0].innerHTML = countHour;
countDom[1].innerHTML = count;

const countDown = () => {
 if (count > 0) {
  count--;
  countDom[1].innerHTML = count < 10 ? "0" + count : count;
 } else if (count == 0) {
  countHour--;
  countDom[0].innerHTML = countHour < 10 ? "0" + countHour : countHour;
  count = 60;
 }
};

const timeUp = () => {
 if (countHour === 0 || countHour < 0) {
  submit();
 }
};

// Setting up timers
const timeupTimer = setInterval(timeUp, 500);
const countdownTimer = setInterval(countDown, 1000);

ques.innerHTML = questions[subject][index].question;

for (var i = 0; i < questions[subject][index].options.length; i++) {
 option[i].innerHTML = questions[subject][index].options[i];
}

quesNum = index + 1;

// Creating numbers sections
const funcAddNum = () => {
 for (var i = 0; i < questions[subject].length; i++) {
  let span = document.createElement("span");
  span.innerHTML = i + 1;
  span.className = "numbers";
  num.appendChild(span);
 }
};

funcAddNum();

const numbers = document.querySelectorAll(".numbers");

//checkSelect checks both the keyboard event and the mouse event
const checkSelect = () => {
 //check if any option is selected
 if (a.value == null || a.value == undefined || a.value == "") {
  questions[subject][index].answered[1] = false;
 } else if (a.value != null || a.value != undefined || a.value != "") {
  questions[subject][index].answered[1] = true;
  ans[subject][index] = a.value;
 }

 //adding color to the answered questions
 if (questions[subject][index].answered[1] == true) {
  numbers[index].classList.add("answered");
 } else {
  return;
 }
};

//updating the options which have been answered before in the DOM
const answered = () => {
 if (
  ans[subject][index] != null ||
  ans[subject][index] != undefined ||
  ans[subject][index] != ""
 ) {
  a.value = ans[subject][index];
 }
};

//reFresh just goes to the question with the index provided and it also calls the anwered function.
const reFresh = (index) => {
 quesNum = index + 1;
 quesNumDom.innerHTML = quesNum + ". ";

 //check whether question have been displayed
 // if (questions[subject][index].question) {
 //  questions[subject][index].answered[0] = true;
 // }

 //outputting the option in the dom
 for (var i = 0; i < questions[subject][index].options.length; i++) {
  option[i].innerHTML = questions[subject][index].options[i];
 }

 //outputting answers that have been already selected
 answered();

 ques.innerHTML = questions[subject][index].question;
};

//looping through the radio buttons to check if answered correctly and  update the arr array
a.forEach((data, i) => {
 data.addEventListener("click", () => {
  if (a.value != questions[subject][index].cc) {
   arr[subject][index] = false;
  } else if (a.value == questions[subject][index].cc) {
   arr[subject][index] = true;
  }
  checkSelect();
 });
});

//clear function
const clear = () => {
 opt0.checked = false;
 opt1.checked = false;
 opt2.checked = false;
 opt3.checked = false;
};

//adding click events to the numbers
numbers.forEach((number, i) => {
 number.addEventListener("click", () => {
  index = i;
  ques.innerHTML = questions[subject][index].question;
  clear();
  reFresh(i);
  answered();
 });
});

//next function
const next = () => {
 if (index + 1 < questions[subject].length) {
  clear();
  index = index + 1;
  quesNum = index + 1;
  ques.innerHTML = questions[subject][index].question;
  reFresh(index);
 }
};

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
};

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
};

//click event to the next and prev btn
btn[0].addEventListener("click", () => {
 previous();
});

btn[1].addEventListener("click", () => {
 next();
});

//updating the quesNumDom in the DOM
quesNumDom.innerHTML = quesNum + ". ";
window.addEventListener("keypress", press);

const submitYes = () => {
 modal.style.display = "none";
 resultModal.style.display = "block";
 window.onclick = function (event) {
  if (event.target == resultModal) {
   resultModal.style.display = "block";
  }
 };

 for (var i = 0; i < questions.length; i++) {
  {
   subjectScore[i] = arr[i].filter((data) => data == true);
  }
  subjectScore.forEach((data, index) => {
   score[index] = data.length;
  });
 }

 clearInterval(timeupTimer);
 clearInterval(countdownTimer);

 const resultBtn = document.querySelectorAll(".result");

 resultBtn[0].addEventListener("click", () => {
  location.reload();
 });

 resultBtn[1].addEventListener("click", () => {
  window.location.assign("index.html");
 });

 console.log(score);

 const score0 = Math.ceil((score[0] / questions[0].length) * 100);
 document.querySelector("#scorenum0").innerHTML = score[0];
 document.querySelector("#score0").innerHTML = score0;

 const score1 = Math.ceil((score[1] / questions[1].length) * 100);
 document.querySelector("#scorenum1").innerHTML = score[1];
 document.querySelector("#score1").innerHTML = score1;

 const score2 = Math.ceil((score[2] / questions[2].length) * 100);
 document.querySelector("#scorenum2").innerHTML = score[2];
 document.querySelector("#score2").innerHTML = score2;

 document.querySelector("#totalnum").innerHTML = score[0] + score[1] + score[2];
 document.querySelector("#totalscore").innerHTML = score0 + score1 + score2;
};

//Submit function
const submit = () => {
 modal.style.display = "block";

 btnModal[0].addEventListener("click", () => {
  window.onclick = function (event) {
   if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
   }
  };
  p.innerHTML = "";

  submitYes();
 });

 btnModal[1].addEventListener("click", () => {
  modal.style.display = "none";
 });
};

document.querySelector(".submit").addEventListener("click", submit);

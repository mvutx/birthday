const correctPasscode = "28.12.24";

/* CURRENT ACTIVE SECTION */

let currentSection = null;

/* ADD NUMBERS */

function addNumber(number){

  const input =
    document.getElementById("passcode");

  input.value += number;

}

/* DELETE */

function deleteNumber(){

  const input =
    document.getElementById("passcode");

  input.value =
    input.value.slice(0,-1);

}

/* CHECK PASSCODE */

function checkPasscode(){

  const input =
    document.getElementById("passcode").value;

  if(input === correctPasscode){

    /* HIDE LOCK SCREEN */

    document
      .getElementById("lockScreen")
      .classList.add("fade-out");

    setTimeout(()=>{

      document
        .getElementById("lockScreen")
        .style.display = "none";

      document
        .getElementById("mainContent")
        .classList.remove("hidden");

      /* SHOW FIRST SECTION */

      showOnlySection("heroSection");

    },800);

  }else{

    document
      .getElementById("error-message")
      .innerHTML =
      "Wrong passcode 💔";

  }

}

/* SHOW ONLY ONE SECTION */

function showOnlySection(sectionId){

  const sections =
    document.querySelectorAll(".content-section");

  /* HIDE ALL SECTIONS */

  sections.forEach(section=>{

    section.classList.remove("active-section");

    section.classList.add("hidden-section");

  });

  /* SHOW SELECTED SECTION */

  const target =
    document.getElementById(sectionId);

  target.classList.remove("hidden-section");

  setTimeout(()=>{

    target.classList.add("active-section");

  },100);

  currentSection = sectionId;

}

/* NEXT SECTION */

function nextSection(currentId,nextId){

  const current =
    document.getElementById(currentId);

  current.classList.remove("active-section");

  current.classList.add("fade-out");

  setTimeout(()=>{

    current.classList.add("hidden-section");

    current.classList.remove("fade-out");

    showOnlySection(nextId);

  },600);

}

/* OPTIONAL LOVE POPUP */

function showLovePopup(){

  document
    .getElementById("lovePopup")
    .classList.remove("hidden");

}

/* CLOSE POPUP */

function closeLovePopup(){

  document
    .getElementById("lovePopup")
    .classList.add("hidden");

}
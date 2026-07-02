const correctPasscode = "28.12.24";

/*=========================
        ADD NUMBER
=========================*/

function addNumber(number){

    const input = document.getElementById("passcode");

    input.value += number;

    document.getElementById("error-message").textContent = "";

}

/*=========================
      DELETE NUMBER
=========================*/

function deleteNumber(){

    const input = document.getElementById("passcode");

    input.value = input.value.slice(0,-1);

}

/*=========================
      CHECK PASSCODE
=========================*/

function checkPasscode(){

    const input = document.getElementById("passcode").value;

    if(input === correctPasscode){

        const lockScreen = document.getElementById("lockScreen");

        lockScreen.classList.add("fade-out");

        setTimeout(()=>{

            lockScreen.style.display="none";

            const main = document.getElementById("mainContent");

            main.classList.remove("hidden");

            showOnlySection("heroSection");

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        },700);

    }

    else{

        document.getElementById("error-message").textContent =
        "💔 Wrong passcode";

        document.getElementById("passcode").value="";

    }

}

/*=========================
      SHOW SECTION
=========================*/

function showOnlySection(id){

    document.querySelectorAll(".content-section").forEach(section=>{

        section.classList.add("hidden-section");

        section.classList.remove("active-section");

    });

    const target = document.getElementById(id);

    target.classList.remove("hidden-section");

    setTimeout(()=>{

        target.classList.add("active-section");

        target.scrollIntoView({
            behavior:"smooth"
        });

    },50);

}

/*=========================
      NEXT SECTION
=========================*/

function nextSection(current,next){

    const currentSection=document.getElementById(current);

    currentSection.classList.add("fade-out");

    setTimeout(()=>{

        currentSection.classList.remove("fade-out");

        currentSection.classList.add("hidden-section");

        showOnlySection(next);

    },500);

}

/*=========================
      ENTER KEY
=========================*/

document.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        checkPasscode();

    }

});
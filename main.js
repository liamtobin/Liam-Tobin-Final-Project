function releaseTheSideMenuBalrog() {
    document.getElementById('modal-menu').classList.add('show-menu');
};

function leaveNowAndNeverComeBack() {
    document.getElementById('modal-menu').classList.remove('show-menu');
};

document.getElementById('menu-trigger').addEventListener('click', releaseTheSideMenuBalrog);
document.getElementById('menu-close').addEventListener('click', leaveNowAndNeverComeBack);


window.onscroll = function() {scrollFunTimes()};

function scrollFunTimes() {
  if (document.body.scrollTop > 34 || document.documentElement.scrollTop > 34) {
    document.getElementById('header-desk').classList.add('fixed', 'tranzisheewowow');
  }
};
// window.onscroll = function() {scrollUpFunTimes()};

// function scrollUpFunTimes() {
//   if (document.body.scrollTop < 35 || document.documentElement.scrollTop < 35) {
//     document.getElementById('header-desk').classList.remove('fixed', 'tranzisheewowow');
//   }
// };


const form = document.querySelector('form');
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messages = document.getElementById("messages");

const formUrl = "https://formspree.io/mnqgogdo";

async function handleFormSubmit(evt) {
    evt.preventDefault();

    const formData = {
        name: nameInput.value,
        email: emailInput.value
    }

    try {
        messages.innerHTML = "";

        const options = {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            method: 'POST',
        }
        const response  = await fetch(formUrl, options)

        if (response.ok) {
            messages.innerHTML = '<span class="success">Thanks for your submission!</span>'
        } else {
            throw new Error();
        }
    } catch {
        messages.innerHTML = '<span class="error">Something went wrong. Try again.</span>'
    }
};

form.addEventListener('submit', handleFormSubmit);
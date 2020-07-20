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
    document.getElementById('mobile-head').classList.add('fixed-mobile', 'tranzisheewowow');
  } else {
    document.getElementById('header-desk').classList.remove('fixed', 'tranzisheewowow');
    document.getElementById('mobile-head').classList.remove('fixed-mobile', 'tranzisheewowow');

  };
};

const form = document.querySelector('form');
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messages = document.getElementById("messages");
const errors = [];


const formUrl = "https://formspree.io/mnqgogdo";

async function handleFormSubmit(evt) {
    evt.preventDefault();

    const formData = {
        name: nameInput.value,
        email: emailInput.value
    }

    // console.log(formData);

    //validation of the form fields

    messages.innerHTML = "";

    if (nameInput.value.length === 0) {
        errors.push("Name is required.")
    };
    if (!emailInput.value.length) {
        errors.push("Email is required.")
    }

    for (let i = 0; i < errors.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = errors[i];
        messages.appendChild(listItem);
    };

    try {
        messages.innerHTML = "";

        const options = {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            method: 'POST',
        }
        const response  = await fetch(formUrl, options)

        if (response.ok) {
            messages.innerHTML = '<span class="success">Thanks for your submission!</span>';
        } else {
            throw new Error();
        }
    } catch {
        messages.innerHTML = '<span class="error">Something went wrong. Try again.</span>'
    }
};

form.addEventListener('submit', handleFormSubmit);
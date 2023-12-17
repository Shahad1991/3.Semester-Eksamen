//menu list//
const menu = document.getElementById('menu');
const list = document.getElementById('list');

const content = document.getElementById('content');
const dropdown = document.getElementById('dropdown');
const dropdownContent = document.getElementById('dropdown-content');

const back = document.getElementById('back');

function toggleMenu() {
    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
    } else {
        list.classList.add("hidden");
    }
}
menu.addEventListener('click', toggleMenu);

function toggleContent() {
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        list.classList.add('hidden');

    } else {
        dropdown.classList.add('hidden');
    }
}

content.addEventListener('click', toggleContent);

back.addEventListener('click', () => {
    list.classList.remove('hidden');
    dropdown.classList.add('hidden');
})


//forsiden slidshow //
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(index) {
    showSlides((slideIndex += index));
}

function currentSlide(index) {
    showSlides((slideIndex = index - 1));
}

function showSlides(index) {
    const slides = document.getElementsByClassName('slide');
    const indicators = document.getElementsByClassName('indicator');

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
    }

    slides[slideIndex].style.display = 'block';
    indicators[slideIndex].classList.add('active');
}

setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);

// bookning side, skifte bookningtider med en gang og et forløb knap//

const forløbButton = document.getElementById('forløb');
const engangButton = document.getElementById('engang');
const etforløbtiderGrupp = document.querySelector('.etforløbtider');
const engangtiderGrupp = document.querySelector('.engangtider');
const enGangPris = document.getElementById("en-gang-pris");
const etForløbPris = document.getElementById("et-forløb-pris");

forløbButton.addEventListener('click', () => {
    forløbButton.style.backgroundColor = '#606542';
    etforløbtiderGrupp.style.display = 'block';
    engangtiderGrupp.style.display = 'none';
});

engangButton.addEventListener('click', () => {
    engangButton.style.backgroundColor = '#606542';
    etforløbtiderGrupp.style.display = 'none';
    engangtiderGrupp.style.display = 'block';
});

function testFunction() {
    console.log("Funktionen fungerer!"); // Udskriver til konsollen, så du kan se, om funktionen blev kørt
    alert("Funktionen fungerer!"); // Viser en beskedboks, når funktionen udføres
}

// Kald funktionen et sted i din kode for at se, om den fungerer
testFunction();
const bookButton = document.getElementById('book');
const bookLabels = document.querySelector('.book-labels');

// Lyt efter klik på "Book" knappen
bookButton.addEventListener('click', function (event) {
    event.preventDefault(); // Forhindrer standard knapadfærd

    if (bookLabels.style.display === 'none' || bookLabels.style.display === '') {
        bookLabels.style.display = 'block'; // Vis book-labels, hvis de er skjulte eller ikke synlige
    } else {
        bookLabels.style.display = 'none'; // Skjul book-labels, hvis de er synlige
    }
});








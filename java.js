const forløbButton = document.getElementById('forløb');
const engangButton = document.getElementById('engang');
const etforløbtiderGrupp = document.querySelector('.etforløbtider');
const engangtiderGrupp = document.querySelector('.engangtider');
const enGangPris = document.getElementById("en-gang-pris");
const etForløbPris = document.getElementById("et-forløb-pris");

forløbButton.addEventListener('click', () => {
    console.log("yes")
    forløbButton.style.backgroundColor = '#606542';
    etforløbtiderGrupp.style.display = 'block';
    engangtiderGrupp.style.display = 'none';
    etForløbPris.style.display = 'block';
    enGangPris.style.display = 'none';

    engangButton.style.backgroundColor = '';

});

engangButton.addEventListener('click', () => {
    engangButton.style.backgroundColor = '#606542';
    etforløbtiderGrupp.style.display = 'none';
    engangtiderGrupp.style.display = 'block';
    enGangPris.style.display = 'block';
    etForløbPris.style.display = 'none';


    forløbButton.style.backgroundColor = '';
});


const tid1Elements = document.querySelectorAll('.tid1');

tid1Elements.forEach(element => {
    element.addEventListener('click', () => {
        console.log('Clicked on a tid1 element');
        // Handling når et 'tid1' element klikkes
    });
});

//event for book button//
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

let tidElements = document.querySelectorAll('.tid, .tid1');

// Funktion til at fjerne farven fra alle tidselementer
function fjernFarve() {
    tidElements.forEach((element) => {
        element.style.backgroundColor = '';
    });
}

// Tilføjer klikhåndterere til hvert tidselement
tidElements.forEach((element) => {
    element.addEventListener('click', (e) => {
        fjernFarve(); // Fjern farve fra alle tidselementer

        // Skift farven på det klikkede tidselement
        e.target.style.backgroundColor = '#606542';
    });
});

const bekræftelseForm = document.getElementById('bekræftelseForm');
const inputs = bekræftelseForm.querySelectorAll('input[type="checkbox"]');

inputs.forEach(input => {
    input.addEventListener('change', function (event) {
        event.target.nextElementSibling.classList.toggle('selected');
    });
});










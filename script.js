'use strict'

const cards = document.querySelector('.cards');



function renderPage(data) {
    data.forEach(e => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const img = document.createElement('img');
        img.src = e.image.medium;
        const link = document.createElement('a');
        link.href = './info.html'
        link.textContent = e.name;

        cards.append(card);
        card.append(img);
        card.append(link);

        card.addEventListener('click', function () {
            localStorage.setItem('id', e.id);
            window.location = './info.html';
        })

    });
}

// ./info.html

function getData() {
    fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(data => {
            const dta = [];
            data.map((e, i) => {
                if (i < 50) dta.push(e);
            })

            console.log(dta);
            renderPage(dta)
        });

}


getData()
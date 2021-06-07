'use strict'

const id = localStorage.getItem('id');

const title = document.querySelector('.title');
const img = document.querySelector('.img');
const details = document.querySelector('.details');
const seasons = document.querySelector('.seasons');
const sesSpan = document.querySelector('.seasHdr span');
const cast = document.querySelector('.cast');



function generateAbout() {
    fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(data => {
            const dta = data;
            title.textContent = dta.name
            details.innerHTML = dta.summary
            img.src = dta.image.original
        });

    fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
        .then(res => res.json())
        .then(data => {
            const dta = data;
            sesSpan.textContent = `${dta.length}`;
            dta.forEach(e => {
                const li = document.createElement('li');
                li.textContent = `${e.premiereDate} - ${e.endDate}`;
                seasons.append(li)
            });
        })

    fetch(`http://api.tvmaze.com/shows/${id}/cast`)
        .then(res => res.json())
        .then(data => {
            const dta = data;
            console.log(data);
            dta.forEach(e => {
                const li = document.createElement('li');
                li.textContent = `${e.character.name}`;
                cast.append(li)
            })
        })
}


generateAbout()


// http://api.tvmaze.com/shows/${id}    show
// http://api.tvmaze.com/shows/${id}/seasons  seasons
// http://api.tvmaze.com/shows/${id}/cast   cast 

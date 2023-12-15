'use strict';


const images = [
    {'id': '1', 'url': '/image/akira.jpg'},
    {'id': '2', 'url': '/image/blackLagoon.jpg'},
    {'id': '3', 'url': '/image/ergoProxy.jpg'},
    {'id': '4', 'url': '/image/ghostInTheShell.jpg'},
    {'id': '5', 'url': '/image/monster.jpg'},
    {'id': '6', 'url': '/image/paprika.webp'},
    {'id': '7', 'url': '/image/perfectBlue.jpg'},
]

const containerItems = document.querySelector('#container-items')


const loadImages = (images, container)=>{
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'>
        </div>
        `
    });
}

loadImages (images, containerItems)

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length -1]
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item')
}


document.querySelector('#previous').addEventListener('click', next)
document.querySelector('#next').addEventListener('click', previous)
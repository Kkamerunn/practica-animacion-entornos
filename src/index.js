import _ from 'lodash';
import {developerName} from './developer';
import './styles.css';
import Icon from '../src/skate.png';
import anime from 'animejs/lib/anime.es.js';

function component() {
    //const element = document.createElement('div');

    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const container = document.getElementById("container");

    const myIcon = new Image();
    myIcon.src = Icon;

    //element.appendChild(myIcon);
    container.appendChild(myIcon);

    return container;
}

//document.body.appendChild(component());
//component();

console.log(developerName);

const container = document.getElementById("container");

const letters = document.querySelectorAll("#welcome span");

const showScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    let p_1 = document.querySelector("#about p");
    let p_2 = document.querySelector("#vision p");
    let p_3 = document.querySelector("#mission p");
    
    if (scrollTop >= 575 && scrollTop < 1150) {
        container.style.backgroundColor = "#8ac4d0";
        anime({
            targets: p_1,
            translateX: 250,
            scale: 1.2
        });
    } else if (scrollTop >= 1150 && scrollTop < 1725) {
        container.style.backgroundColor = "#f4d160";
        anime({
            targets: p_2,
            translateX: 250,
            scale: 1.2
        });
    } else if (scrollTop >= 1725) {
        container.style.backgroundColor = "#fbeeac";
        const animation = anime({
            targets: p_3,
            translateX: 250,
            scale: 1.2
        }); 
        animation();  
    } else if (scrollTop < 575) {
        container.style.backgroundColor = "#28527a";
    }
}
 
window.addEventListener('scroll', showScroll);

let elements = document.querySelectorAll("#welcome span");

anime({
    targets: elements,
    translateX: [270, 0],
    delay: anime.stagger(100, {easing: 'easeOutQuad'})
});




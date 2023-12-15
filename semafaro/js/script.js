const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0; //let pois a variavel vai mudar
let IntervalId = null;

const trafficlight = (event) =>{
    stopAutomatic();
    turnOn[event.target.id]();
    
}

const nextIndex = () => /*{*/colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    /*
    if(colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0;
    }*/
/*}*/

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () =>{
    clearInterval(IntervalId)
}

/*Criando objeto */
const turnOn = {
    'red': () => img.src = '/image/vermelho.png',
    'yellow': () => img.src = '/image/amarelo.png',
    'green': () => img.src = '/image/verde.png',
    'automatic': () => IntervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficlight)
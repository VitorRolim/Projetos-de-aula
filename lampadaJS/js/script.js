const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const fix = document.getElementById('fix');


function ligarLampada(){
    if(!seLampQuebrada ()){
        lamp.src = '/image/ligada.jpg';
        document.body.style.backgroundColor = 'yellow'
        document.body.style.color = 'black'
    }
    
}

function seLampQuebrada(){
    document.body.style.backgroundColor = 'white'
    return lamp.src.indexOf('quebrada') > -1
}

function desligarLampada(){
    if(!seLampQuebrada ()){
        lamp.src = '/image/desligada1.png';
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
    
    
}

function lampadaQuebrada(){
    
    lamp.src = '/image/quebrada1.png'
    
}

function consertarLampada(){
    window.location.reload(true);
}

turnOn.addEventListener('click', ligarLampada)
turnOff.addEventListener('click', desligarLampada)
fix.addEventListener('click', consertarLampada)
lamp.addEventListener('mouseover', ligarLampada)
lamp.addEventListener('mouseleave', desligarLampada)
lamp.addEventListener('dblclick', lampadaQuebrada)

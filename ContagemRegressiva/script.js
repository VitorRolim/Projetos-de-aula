'use scrict'

const formatarDigito = (digito) => `0${digito}`.slice(-2)


const atualizar = (tempo) =>{
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdeSegundos = tempo % 60;
    const qtdeMinutos = Math.floor((tempo % (60 * 60)) / 60); //a cada 60 segudos é 1 min, vezes 60 é uma 1 hora
                      //Pega somente o número inteiro
    const qtdeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdeDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdeSegundos)
    minutos.textContent = formatarDigito(qtdeMinutos)
    horas.textContent = formatarDigito(qtdeHoras)     
    dias.textContent = formatarDigito(qtdeDias)
}

const contagemRegressiva = (tempo) =>{
    const pararContagem = () => clearInterval(id);
    
    const contar = () => {
        if(tempo === 0){
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () =>{
    //1 de janeiro de 1970
    const dataEvento = new Date('2023-10-21 22:30:00')
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}


contagemRegressiva(tempoRestante())
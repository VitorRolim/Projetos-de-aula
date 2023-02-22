const mostrarResultado = document.getElementById('calcular');
const limparCampo = document.getElementById('limpar');

function calcularNB(){
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const nota4 = document.getElementById('nota4').value;
    const nota5 = document.getElementById('nota5').value;
    const nota6 = document.getElementById('nota6').value;
    const resultado = document.getElementById('resultado');
    

    if(nota1 !== '' && nota2 !== '' && nota3 !== '' && nota4 !== '' && nota5 !== '' && nota6 !==''){
        const resultMatematica = (parseInt(nota1) + parseInt(nota4)) / 2;
        const resultHistoria = (parseInt(nota2) + parseInt(nota5)) / 2;
        const resultGeografia = (parseInt(nota3) + parseInt(nota6)) / 2;

        resultado.textContent = `A sua nota em Matematica foi ${resultMatematica}.
        A sua nota em História foi ${resultHistoria}.
        A sua nota em Geografia foi ${resultGeografia}`
        document.getElementById('resultado').style.backgroundColor= 'green';


    }else{
        document.getElementById('resultado').style.backgroundColor= 'red';
        document.getElementById('resultado').style.color = 'white';
        resultado.textContent = 'Preencha todos os Campos!'
    }
}

function limparInput(){
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('nota4').value = '';
    document.getElementById('nota5').value = '';
    document.getElementById('nota6').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('resultado').style.backgroundColor = 'white';
}

mostrarResultado.addEventListener('click', calcularNB);
limparCampo.addEventListener('click', limparInput);

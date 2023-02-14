const calcular = document.getElementById('calcular');

function calculaImc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('areatexto');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        

        let classificacao = "";
        if(valorIMC < 18.5){
            classificacao = ('de magreza grau 0.');
        }else if(valorIMC >18.5 && valorIMC < 24.9){
            classificacao = (' normal grau 0.')
        }else if(valorIMC >25.0 && valorIMC < 29.9){
            classificacao = ('de sobrepeso grau I.')
        }else if(valorIMC >30.0 && valorIMC < 39.9){
            classificacao = ('de obesidade grau II.')
        }else if(valorIMC >40.0){
            classificacao = ('de obesidade grave grau III.')
        }

        resultado.textContent = `${nome} seu IMC é de ${valorIMC} e sua classificação é  ${classificacao}`;

        
    }else{
        resultado.textContent = 'Preencha todos os campos'
    }

}

calcular.addEventListener('click', calculaImc);

function calcular(tipo, valor) {

    if (tipo === 'acao') {
        if (valor === 'c') {
            document.getElementById('saida_num').value = ''
        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('saida_num').value += valor
        } else if (valor === '=') {
            var valor_campo = eval(document.getElementById('saida_num').value)
            document.getElementById('saida_num').value = valor_campo
        }

    } else if (tipo === 'valor') {
        document.getElementById('saida_num').value += valor
    }
}



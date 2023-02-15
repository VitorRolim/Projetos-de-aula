class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados() {
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null)
            return false
        }
        return true
    }

}

class Bd{

    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    } 

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d){
        /*
        let id = this.getProximoId('id')

        if(id === null){
            alert('entrei aqui')
            id = 0
        } else {
            alert('entrei no else')
            id = this.getProximoId()
        }

        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)*/

        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){
        //array de despesas
        let despesas = Array()

        let id = localStorage.getItem('id')

        //recuperar todas as despesas cadastradas em localstorage
        for(let i = 1; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))

            //verificar se tem items removidos
            if(despesa === null){
                continue
            }
            despesa.id = i
            despesas.push(despesa)
        }

        return despesas
    }

    pesquisar(despesa){
        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosRegistros()
        
        console.log(despesa)
        console.log(despesasFiltradas)


        //ano
        if(despesa.ano != ''){
            console.log('filtro de ano')
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)

        }
        //mes
        if(despesa.mes != ''){
            console.log('filtro de mes')
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }

        //dia
        if(despesa.dia != ''){
            console.log('filtro de dia')
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }
        //tipo
        if(despesa.tipo != ''){
            console.log('filtro de tipo')
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }
        //descricao
        if(despesa.descricao != ''){
            console.log('filtro de descricao')
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }
        //valor
        if(despesa.valor != ''){
            console.log('filtro de valor')
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }
        console.log(despesasFiltradas)
    }

    remover(id){
        localStorage.removeItem(id)
    }
}

let bd = new Bd()

function cadastrarDespesa(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value, 
        mes.value, 
        dia.value, 
        tipo.value, 
        descricao.value, 
        valor.value)

    if(despesa.validarDados()){
        bd.gravar(despesa)
        document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal-body').innerHTML = ' Despesa foi cadastrada com sucesso!'
        document.getElementById('button').className = 'btn btn-success'
        document.getElementById('button').innerHTML = 'Clique para voltar'
        $('#modalRegistraDespesa').modal('show')
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''
    }else{
        document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal-body').innerHTML = 'Volte para cadastrar os dados corretamente'
        document.getElementById('button').className = 'btn btn-danger'
        document.getElementById('button').innerHTML = 'Voltar e corrigir'
        $('#modalRegistraDespesa').modal('show')
    }
}

function carregaListaDespesas(despesas = Array(), filtro = false){

    if(despesas.length == 0 && filtro == false){
        
        despesas = bd.recuperarTodosRegistros()
    }

    //adicionando dinamicamente item na tebala
    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''
    //percorrer o array despesas, listando dinamicamente
    despesas.forEach(function(d){
        //criando tr
        let linha = listaDespesas.insertRow()
        //criando td
        linha.insertCell(0).innerHTML =`${d.dia}/ ${d.mes}/ ${d.ano}`
        
        //melhorando o tipo
        switch(parseInt(d.tipo)){
            case 1: d.tipo = 'Alimentação'
            break
            case 2: d.tipo = 'Educação'
            break
            case 3: d.tipo = 'Lazer'
            break
            case 4: d.tipo = 'Saúde'
            break
            case 5: d.tipo = 'Transporte'
            break
        }
        
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor

        //criar botao de exclusao
        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}` 
        btn.onclick = function() {
            

            let id = this.id.replace('id_despesa_', '')
            bd.remover(id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)

        console.log(d)


    })
}

function pesquisarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)
    
    let despesas = bd.pesquisar(despesa)

    carregaListaDespesas(despesas, true)
}
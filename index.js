let competidores = ['Rafael','Manoel','Daniel']

function positions(array){
    let posicaoDaniel = array.indexOf('Daniel')
    if(posicaoDaniel!=0){
        let provisorio = array[0]
        array[0] = 'Daniel'
        array[posicaoDaniel] = provisorio
    }
    else{
        return "Daniel é o vencedor"
    }
    let podio = ['Este é o pódio']
    let posicao = 1
    for(let i=0;i<array.length;i++){
        podio.push(`${posicao}º ${array[i]}`)
        posicao++
    }
    return podio
}

console.log(positions(competidores))
var listaDeNomes =['cesar', 'Pamela', 'Camila','hendy']
var busca = 'cesar'

    for(var i= 0; i < listaDeNomes.length; i++){
       if(listaDeNomes[i] == busca ){
           console.log('Encontrei o nome')
           break
       }
    }
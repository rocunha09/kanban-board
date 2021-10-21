function moveForward(id){
    var task = document.getElementById(id)
    var arrow = document.getElementById(id)
    var item = task
    task.remove()
    
    var colunas = ['backlog', 'toDo', 'doing', 'done'];

    var ColunaAtual = task.getAttribute('name')
    ColunaAtual = ColunaAtual.split("_").pop()
    
    for(var i = 0; i < colunas.length; i++){
        if (ColunaAtual == 'done'){
            alert('Você tem certeza que quer deletar esse card?')
                       return;
        }

        if (ColunaAtual == colunas[i]) {
            var proxima = i+1
            console.log(ColunaAtual + ' - ' +colunas[proxima]);
            ColunaAtual  = colunas[proxima]
            
            var colunaDestino = colunas[proxima]
            var destino = document.getElementById(colunaDestino)
            
            var novoName = id + '_' + colunaDestino
            task.setAttribute('name', novoName)
            
            destino.appendChild(item);
            return;
        }
        
    }
}


function moveBack(id){
    var task = document.getElementById(id)
    var item = task
    task.remove()
    
    var colunas = ['backlog', 'toDo', 'doing', 'done'];

    var ColunaAtual = task.getAttribute('name')
    ColunaAtual = ColunaAtual.split("_").pop()
    
    for(var i = 0; i < colunas.length; i++){
        if (ColunaAtual == colunas[i] && i>0) {
             var proxima = i-1
             console.log(ColunaAtual + ' - ' +colunas[proxima]);
            ColunaAtual  = colunas[proxima]
            
            var colunaDestino = colunas[proxima]
            var destino = document.getElementById(colunaDestino)
           
            var novoName = id + '_' + colunaDestino
            task.setAttribute('name', novoName)
            
            destino.appendChild(item);
            return;
        }
    }
}

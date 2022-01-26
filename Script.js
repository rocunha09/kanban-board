function movement(id, movement){
    var task = document.getElementById(id)
    var item = task
    
    var colunas = ['backlog', 'toDo', 'doing', 'done'];
    var ColunaAtual = task.getAttribute('name')
    ColunaAtual = ColunaAtual.split("_").pop()
    
    if (ColunaAtual == 'backlog' && movement == 'back'){
        return;
    } 

    if (ColunaAtual == 'done' && movement == 'moveForward'){
        return;
    } 
    
    task.remove()
    
    for(var i = 0; i < colunas.length; i++){
 main
        if (ColunaAtual == colunas[i]) {
            var proxima = movement == 'moveForward' ? i+1 : i-1
            ColunaAtual  = colunas[proxima]
            
            var colunaDestino = colunas[proxima]
            var destino = document.getElementById(colunaDestino)
           
            var novoName = id + '_' + colunaDestino
            item.setAttribute('name', novoName)
            
            destino.appendChild(item);
            return;
        }
        
    }
}

//criar uma lista de tasks para popular o kanban usando data.json
//necessário parametrizar cors

var ajax = new XMLHttpRequest()
ajax.open("GET", "data.json")
ajax.responseType = "json"

ajax.send();

ajax.addEventListener("readystatechange", function() {
    if(ajax.readyState === 4 && ajax.status === 200){
        console.log(ajax)
        console.log(ajax.response)
    }
})

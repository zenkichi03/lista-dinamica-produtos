const variavelPrincipal = window.onload = function(){
    const listaItens = document.querySelectorAll("#lista > li");
    const armazenaPreco = document.querySelector("#armazenaPreco");
    const suaCesta = document.querySelector("#suaCesta");

    let cesta = [];

    let funcaoPrincipal = ()=>{
        let calculo = 0;
        for(let item of listaItens) {       
            item.addEventListener('click', function(){            
                let nomeDoItem = item.innerHTML; 
                let presencaDoItem = false;                       
                for(let elemento of cesta){
                    if(elemento.textContent == nomeDoItem){
                        presencaDoItem = true;                        
                    }                    
                }
                console.log(presencaDoItem);
                if (presencaDoItem){
                    alert("Item já adicionado à cesta.");                    
                } else{
                    cesta.push(item);
                    let elementoCriado = document.createElement('li');
                    suaCesta.appendChild(elementoCriado).textContent = nomeDoItem;                                
                    calculo += Number(item.dataset.preco);
                    armazenaPreco.value = calculo.toLocaleString('pt-br',
                    {style: 'currency', currency: 'BRL'});
                }                                             
            })                                        
        }    
    }
    funcaoPrincipal();    
}
export { variavelPrincipal };
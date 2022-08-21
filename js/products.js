const URL = 'https://japceibal.github.io/emercado-api/cats_products/101.json';
const list = document.getElementById("list")

function autos(){
    fetch(URL)
    .then(resp => resp.json()) 
    .then(data => {
        console.log(data.products); 
   
        let productos = data.products; //
    
        let i = 0; //
    
        for(let products of productos){
            i++ // 
            list.innerHTML += `  <div class="list-group list-group-item list-group-item-action cursor-active" id="list" > 
                                    <div class="row">
                                        <div class="col-3 img-fluid">
                                            <img src="${products.image}" class="img-thumbnail rounded-start" width="300px" id="si${i}"></img>
                                        </div>
                                         <div class="col-7">
                                            <h5 id="si2${i}">${products.name} - ${products.currency} - ${products.cost} <br> <p id="si3${i}"><small>${products.description}</small></p></h5>
                                        </div>
             
                                        <div class="col text-end">
                                                <p><small class=" text-muted justify-content-between" id="si3${i}">${products.soldCount} vendidos</small></p>
                                        </div>
                                    </div>
                                 </div>`
             //definimos el contenido que va a aprecer en el html
      }
    })
}
autos(); // llamamos a la funcion 
    
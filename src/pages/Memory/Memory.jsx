import './Memory.css';
fetch("https://dummyjson.com/products") 
.then(function (result) {
  return result.json();
})
.then(function (result) {
  displayData(result.products);
}); 

function displayData(arr) {

for (let index = 0; index <2; index++) {

  
const cardsArea = document.querySelector(".cards-area");

const div1 = document.createElement("div");


div1.className = "col-md-4 col-sm-12";


const div2 = document.createElement("div");
div2.className = "card mb-3";


const img = document.createElement("img");
img.src = arr[index].images[0];
img.className = "card-img-top";


const div3 = document.createElement("div");
div3.className = "card-body";


const h5 = document.createElement("h5");
h5.className = "card-title";
h5.innerText =arr[index].title;

const h4=document.createElement('h4');
h4.innerHTML=arr[index].price+"$";


const p = document.createElement("p");
p.className = "card-text";
p.innerText = arr[index].description;

div3.append(h5);
div3.append(p);
div3.append(h4);


div2.append(img);
div2.append(div3);


div1.append(div2);

cardsArea.append(div1);

}
}


const Memory = () => {
  return (
    <div className="deta">
    <h1 className="text-center">/Memory/</h1>
    <div className='faterdeta'>
      <div className='child1'>
        <h1 className='filter'>Filter:</h1>
        <div className='line'></div>
        <div class="accordion accord" id="accordionExample">
<div className="accordion-item">
<h2 className="accordion-header">
  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  <h2>Availability</h2>
  </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
  <div className="accordion-body box">
    <div><input type="checkbox"></input>
    <label>In stock (9)</label>
    </div>
    <div><input type="checkbox"></input>
    <label>Out of stock(3)</label>
    </div>
  </div>
</div>
</div>
</div>
  <div className='line'></div>
  <div class="accordion accord" id="accordionExample">
<div className="accordion-item">
<h2 className="accordion-header">
  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  <h2>Price</h2>
  </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show price" data-bs-parent="#accordionExample">
    <input type="number" placeholder='from' className='inputprice'></input>
    <input type="number" placeholder='to'   className='inputprice'></input>
  </div>
</div>
</div>

          <div className="accordion accord" id="accordionExample">
            <h1>Custom Menu</h1>
            <div className="accordion-item">
              <h1 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Touch Display
                </button>
              </h1>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <li>Nillkin</li>                 
                    <li>Teflon</li>                 
                    <li>Genric</li>                 
                    <li>Wacom</li>                 
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h1 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Scratch Guard
                </button>
              </h1>
            </div>
            <div className="accordion-item">
              <h1 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Tempard Glass
                </button>
              </h1>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <ul>
                    <li>AMzer</li>                 
                    <li>Glass</li>                 
                    <li>Genric</li>                 
                    <li>Wacom</li>                 
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h1 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                USB Cable
                </button>
              </h1>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <ul>
                    <li>AMzer</li>                                
                    <li>Genric</li>                 
                    <li>apaple</li>                 
                  </ul>
                </div>
              </div>
              <div className="accordion-item">
              <h1 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Ear Phone
                </button>
              </h1>
            </div>
            <div className="accordion-item">
              <h1 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                SSD Card
                </button>
              </h1>
            </div>
            <div className="accordion-item">
              <h1 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Pen Drive
                </button>
              </h1>
            </div>
            </div>
          </div>

</div>
  
    
    <div className='child2'>
    <h1 className='text-center'>You're viewing 12 of 12 products</h1>
    <div className="container mx-auto">
      <div className="row  mt-5 cards-area">
      </div>
  </div>
  <h1 className='text-center'>You Complete it</h1>
    </div>

      </div>

      <p className='text-center'><pre>Please always click the refresh button above to see more <i className="fa-solid fa-rotate-right"></i></pre></p>



    </div>

  )
}

export default Memory
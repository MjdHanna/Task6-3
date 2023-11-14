import './NavBarStyle.css';
import slide1 from './../images/slide1.jpg';
import slide2 from './../images/slide2.jpg';
import slide33 from './../images/slide33.jpg';
import strong from './../images/strong section.jpg';
import phone1 from './../images/phone4.jpg';
import phone3 from './../images/phone6.jpg';



 fetch("https://dummyjson.com/products") 
.then(function (result) {
  return result.json();
})
.then(function (result) {
  displayData(result.products);
}); 

function displayData(arr) {

for (let index = 0; index < 10; index++) {
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



const NavBar = () => {
  return (
    <div className="Nav">
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active ff">
      <div className='word'>
      <h3>4K RESOLUATION</h3>
      <h1>EXCLUSIVE STEEL FARME</h1>
      <button>BUY NOW</button>
      </div>
      <img src={slide1} className="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item fff">
    <div className='word2'>
      <h3>ZANIA BLACK EDITION</h3>
      <h1>CRUVE BEVEL DUAL AUDIO</h1>
      <button>BUY NOW</button>
      </div>
      <img src={slide2} className="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item fff">
    <div className='word2'>
      <h3>DETAL ZERTIGA PROCESSOR</h3>
      <h1>FULL SCREEN DISPLAY</h1>
      <button>BUY NOW</button>
      </div>
      <img src={slide33} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="deta">
        <h1 className="text-center">WHAT MAKES THE ESSENTIAL DIFFERENT?</h1>
        <h3 className="text-center">EXPERIENCE HIGH PERFORMANCE AND SECURE </h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 S1">
              <i className="fa-solid fa-mobile-screen"></i>
              <h3 className="text-center">PERFECT CUT</h3>
              <h2 className="text-center">Dual camera</h2>
              <pre className="text-center">Lorem ipsum dolor sit amet consectetur adipisic
   fames
              </pre>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 S1 S2">
              <i className="fa-solid fa-ticket"></i>
              <h3 className="text-center">PRETTY</h3>
              <h2 className="text-center">INTELLIGENT PROCESSING</h2>
              <pre className="text-center">Lorem ipsum dolor sit amet consectetur adipisic
  fames
              </pre>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 S1 S3">
              <i className="fa-solid fa-camera-retro"></i>
              <h3 className="text-center">MOST POPULAR</h3>
              <h2 className="text-center">8GB DDR5 RAM</h2>
              <pre className="text-center">Lorem ipsum dolor sit amet consectetur adipisic
  fames
              </pre>
            </div>
          </div>
        </div>
    </div>
    


    <div className='div2'>
      <h2 className='text-center'>POSSIBILITIES. PERFORMANCE. POWER.</h2>
      <p className='text-center'> FASTER PROCESSING WITH LESS POWER</p>
      <div className='fatherimg'>
        <img src={strong} alt='ggggg' />
        <div className="info1">
        <i className="fa-solid fa-camera-retro"></i>
            <h2 >SCORPION PROCESSOR</h2>
            <pre>Tristique senectus et netus 
et malesuada fames ac turpis.</pre>
          </div>
          <div className="point1">
            <i className="fa-solid fa-location-dot"></i>
            <div className="line1"></div>
      </div>
      <div className="info2">
      <i className="fa-solid fa-camera-retro"></i>
            <h2 >DUAL SIM CARDS</h2>
            <pre>Donec ultrices tincidunt arcu non 
sodales neque sodales ut.</pre>
          </div>
          <div className="point2">
            <i className="fa-solid fa-location-dot"></i>
            <div className="line2"></div>
          </div>
          <div className="info3">
            <i className="fa-solid fa-camera-retro"></i>
            <h2 >48 MP CAMERA</h2>
            <pre>Cursus euismod quis viverra nibh 
cras pulvinar mattis nunc sed..</pre>
          </div>
          <div className="point3">
            <i className="fa-solid fa-location-dot"></i>
            <div className="line3"></div>
          </div>
          <div className="info4">
          <i className="fa-solid fa-camera-retro"></i>
            <h2>48 HRS BACKUP</h2>
            <pre>Tristique senectus et netus 
et malesuada fames ac turpis.</pre>
          </div>
          <div className="point4">
            <i className="fa-solid fa-location-dot"></i>
            <div className="line4"></div>
          </div>
    </div>
</div>



<div className='div3'>
        <h1 className="text-center">INNOVATIVE QUALITIES & FEATURES</h1>
        <p className="text-center" >SHOW YOURS TO THE WORLD</p>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="S20">
              <i className="fa-solid fa-charging-station" ></i>
                <div className="S22">
                  <h2 >INTELLIGENT PROCESSOR</h2>
                  <pre>Tellus in hac habitasse platea  
    dictumst vestibulum rhoncus srd</pre>
                </div>
              </div>
              <div className="S20">
              <i className="fa-solid fa-border-top-left" ></i>
                <div className="S22">
                  <h2 >STYLISH BEVEL EDGES</h2>
                  <pre>Tellus in hac habitasse platea  
    dictumst vestibulum rhoncus srd</pre>
                </div>
            </div>
            <div className="S20">
            <i className="fa-solid fa-headphones-simple" ></i>
              <div className="S22">
                <h2 >HD SURROUND AUDIO</h2>
                <pre>Tellus in hac habitasse platea  
  dictumst vestibulum rhoncus srd</pre>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={phone1} alt='www' />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="S21">
              <i className="fa-solid fa-wifi" ></i>
              <div className="S221">
                <h2 >4.0 WIFI SPECS</h2>
                <pre>Tellus in hac habitasse platea  
  dictumst vestibulum rhoncus srd</pre>
              </div>
            </div>
            <div className="S21">
              <i className="fa-solid fa-bars" ></i>
              <div className="S221">
                <h2 >MULIT TASKING & THREADING</h2>
                <pre>Tellus in hac habitasse platea  
  dictumst vestibulum rhoncus srd</pre>
              </div>
            </div>
            <div className="S21">
              <i className="fa-solid fa-cloud"></i>
              <div className="S221">
                <h2 >CLOUD STORAGE</h2>
                <pre>Tellus in hac habitasse platea  
  dictumst vestibulum rhoncus srd</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div className='div4'>
        <h1 className="text-center"><i>NEW ARRIVALS</i></h1>
        <h3 className="text-center"><i> SEE OUR GOODS AND FIND THE PERFECT OPTION FOR YOU WHETHER IT IS:<span> A LAPTOP OR MOBILE</span>.</i></h3>
        <div className="container mx-auto">
          <div className="row  mt-5 cards-area">
          </div>
      </div>
      </div>


      <div className='div5'>
        <div className="arrow1"><a href="#photo"><i class="fa-solid fa-arrow-up"></i></a></div>
        <div className="container pt-5">
          <h1 className="text-center" >SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h1>
          <h3 className="text-center" >DESIGNED TO PERFECTION</h3>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src={phone3} alt='ppp' />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      IPHONE X
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.</strong>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      IPHONE 11
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      IPHONE 11 PRO
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      SOME OF DETAILS ABOUT THEM
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <footer>
        <h2 >SUBSCRIBE NOW</h2>
        <h2  >GET OUR UPDATES ALWAYS FAST</h2>
        <h3 >YOUR PERSONAL DATA WILL ALWAYS BE SAFE</h3>
        <input type="email" placeholder="enter your email id" class="input"/>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Some help for you
          </button>
          <ul className="dropdown-menu end">
            <li><Link className="dropdown-item" to="#">SEARCH</Link></li>
            <li><Link className="dropdown-item" to="#">HELP</Link></li>
            <li><Link className="dropdown-item" to="#">INFORMATION </Link></li>
            <li><Link className="dropdown-item" to="#">PRIVCAY POLICE</Link></li>
            <li><Link className="dropdown-item" to="#">SHIPPING DETALIS</Link></li>
          </ul>
        </div>
      </footer>
      <div className="last"><p>© 2023, Phono (password: buddha) Design Themes</p>
        <button id="accept">ACCEPT</button>
        <button id="REJECTED">REJECTED</button>
        <i className="fa-solid fa-plane-circle-xmark" ></i>
        <i className="fa-brands fa-screenpal" ></i>
      </div> */}


</div>

)
}
export default NavBar
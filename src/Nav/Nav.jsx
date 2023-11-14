import { useEffect } from 'react';
import logo from './../images/logo.jpg';
import phone5 from './../images/phone5.jpg'
import './NavStyle.css';
import { Link } from 'react-router-dom';


const Nav = () => {
  useEffect(() => {
    const res=document.querySelector(".result")
const flag1=document.querySelector(".flags1");
const flag2=document.querySelector(".flags2");
const flag3=document.querySelector(".flags3");
const flag4=document.querySelector(".flags4");
const flag5=document.querySelector(".flags5");
const flag6=document.querySelector(".flags6");
const flag7=document.querySelector(".flags7");
const flag8=document.querySelector(".flags8");
const flag9=document.querySelector(".flags9");
const flag10=document.querySelector(".flags10");

flag1.addEventListener("click",function(event){
  res.innerHTML="SYR";
})
flag2.addEventListener("click",function(event){
  res.innerHTML="UAE";
})
flag3.addEventListener("click",function(event){
  res.innerHTML="TN";
})
flag4.addEventListener("click",function(event){
  res.innerHTML="UK";
})
flag5.addEventListener("click",function(event){
  res.innerHTML="LEB";
})
flag6.addEventListener("click",function(event){
  res.innerHTML="POL";
})
flag7.addEventListener("click",function(event){
  res.innerHTML="ESP";
})
flag8.addEventListener("click",function(event){
  res.innerHTML="BRA";
})
flag9.addEventListener("click",function(event){
  res.innerHTML="ARG";
})
flag10.addEventListener("click",function(event){
  res.innerHTML="RUS";
})

  }, [])
  
  return (
    <div className="Nav">
    <div className="What">
        <h2>Long Weekend Sale Up to 50% OFF Shop Now</h2>
    </div>
    <div className='naaav'>
    <div className='image'>
    <img src={logo} alt='logo' style={{width:"150px",height:"50px"}}/>
    </div>
    <nav>
      <ul>
        <li><Link to=''>Home</Link></li>

        <li className="nav-item esecond" >
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Collection
                  </button>
                  <ul className="dropdown-menu">
                    <div className="list">
                    <div className="l1">
                    <li>
                    <li><h5>SSD CARD</h5></li>
                    <li><a className="dropdown-item" href="s">Affinity M20</a></li>
                    <li><a className="dropdown-item" href="s">Affinity P40 Pro</a></li>
                    <li><a className="dropdown-item" href="s">PO V40 ThinQ</a></li>
                    <li><a className="dropdown-item" href="s">Tencho 7.3</a></li>
                    <li><a className="dropdown-item" href="s">Tencho 8.5</a></li>
                    <li><a className="dropdown-item" href="s">Nexian</a></li>
                    <li><a className="dropdown-item" href="s">Fix A Phone</a></li>
                    <li><a className="dropdown-item" href="s">FHisense</a></li>
                    <li><a className="dropdown-item" href="s">Force Cell</a></li>
                    <li><a className="dropdown-item" href="s">Ningbo</a></li>
                  </li>
                </div>
                <div className="l1">
                  <li>
                    <li><h5>POWER BANKS</h5></li>
                    <li><a className="dropdown-item" href="p">Spots 8 Lite</a></li>
                    <li><a className="dropdown-item" href="p">Spots ERA 5X</a></li>
                    <li><a className="dropdown-item" href="p">Phonelink</a></li>
                    <li><a className="dropdown-item" href="p">Musah</a></li>
                    <li><a className="dropdown-item" href="p">Connect 4</a></li>
                    <li><a className="dropdown-item" href="p">Alcatel</a></li>
                    <li><a className="dropdown-item" href="p">MobiAir</a></li>
                    <li><a className="dropdown-item" href="p">Beat Cell</a></li>
                    <li><a className="dropdown-item" href="p">Hunk Cell</a></li>
                  </li>
                </div>
                <div className="l1">
                  <li>
                    <li><h5>EARPHONE</h5></li>
                    <li><a className="dropdown-item" href="e">Spots Y93 1815</a></li>
                    <li><a className="dropdown-item" href="e">Tencho F12 Pro</a></li>
                    <li><a className="dropdown-item" href="e">Telefonika</a></li>
                    <li><a className="dropdown-item" href="e">T-Blast</a></li>
                    <li><a className="dropdown-item" href="e">Alcatel</a></li>
                    <li><a className="dropdown-item" href="e">Ampy</a></li>
                    <li><a className="dropdown-item" href="e">Crystal Cell</a></li>
                    <li><a className="dropdown-item" href="e">MOI Cell</a></li>
                    <li><a className="dropdown-item" href="e">Groove Cell</a></li>
                    <li><a className="dropdown-item" href="e">Olly Cell</a></li>
                  </li>
                </div>
                <div className="l1">
                  <li>
                    <li><h5>ANDROID</h5></li>
                    <li><a className="dropdown-item" href="a">Tencho 10 Lite</a></li>
                    <li><a className="dropdown-item" href="a">Tencho 7.3</a></li>
                    <li><a className="dropdown-item" href="a">Spectrum</a></li>
                    <li><a className="dropdown-item" href="a">Hisense</a></li>
                    <li><a className="dropdown-item" href="a">Bluesky</a></li>
                    <li><a className="dropdown-item" href="a">GreatDid</a></li>
                    <li><a className="dropdown-item" href="a">Mastic</a></li>
                    <li><a className="dropdown-item" href="a">Pigeon Cell</a></li>
                    <li><a className="dropdown-item" href="a">Arise Cell</a></li>
                    <li><a className="dropdown-item" href="a">Ritz Cell</a></li>
                  </li>
                </div>
                <img src={phone5}   alt='menu'  style={{width: "300px", height: "300px"}} />
                </div>
                  </ul>
                  
              </div>
              </li>

        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/Android'>Android</Link></li>
        <li><Link to='/Accessories'>Accessories</Link></li>
        <li><Link to='/Memory'>Memory & Storage</Link></li>
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="Mjd" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu n" id='Drop'>
                <li><Link to='/about' className="dropdown-item">About</Link></li>
                <li><Link to='/contact' className="dropdown-item">Contact</Link></li>
                <li><Link to='/blog' className="dropdown-item">Blog</Link></li>
                <li><Link to='/faqs' className="dropdown-item">Faq's</Link></li>
                </ul>
              </li>
              <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="select" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Choose your special server <i className="fa-solid fa-shuttle-space" style={{color:"greenyellow"}}></i>: <span className="result text-center" style={{color:"red",fontSize:"20px"}}></span>
              </a>
              <ul className="dropdown-menu n flags">
                <li><button className="flags1">SYR</button></li>
                <li><button className="flags2">UAE</button></li>
                <li><button className="flags3">TN</button></li>
                <li><button className="flags4">UK</button></li>
                <li><button className="flags5">LEB</button></li>
                <li><button className="flags6">POL</button></li>
                <li><button className="flags7">ESP</button></li>
                <li><button className="flags8">BRA</button></li>
                <li><button className="flags9">ARG</button></li>
                <li><button className="flags10">RUS</button></li> 
              </ul>
          </div>
          <div className='iii'>
          <i className="fa-brands fa-tiktok" style={{color:"black"}}></i>
          <i className="fa-brands fa-apple"></i>
          <i className="fa-regular fa-snowflake" style={{color:"skyblue"}}></i>
          <i className="fa-solid fa-hand-holding-dollar" style={{color:"greenyellow"}}></i>

          </div>
      </ul>
    </nav>
    </div>
</div>
  )
}

export default Nav
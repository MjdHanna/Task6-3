import './About.css';
import about1 from './../../images/about1.jpg';
import about2 from './../../images/about2.jpg';
import about3 from './../../images/about3.jpg';
import team1 from './../../images/team1.jpg';
import team2 from './../../images/team2.jpg';
import team3 from './../../images/team3.jpg';
import team4 from './../../images/team4.jpg';

const AboutUs = () => {
  return (
    <div className='about'>
        <h1 className='text-center'>About us</h1>
        {/* Start about1 */}
        <div className='about1'>
            <div className='about2'>
                <h2>Stylish Mobile Covers</h2>
                <p>Quisque volutpat mattis eros. Nullam malesu 
erat ut ki diaml ka dhuddu pochu turpis.
pede. Donec nec justo eget felis facilisis 
Morbi in sem quis dui placerat ornare. Pellentesque 
euismod in, pharetra a, ultricies in, diam. Sed arcu
Etiam pretium varius quam in aliquam. Curabitur 
vitae interdum erat cursus. Morbi laoreet sapien 
scelerisque dapibus. Aliquam erat volutpat Nunc 
. Aliquam sem fringilla ut morbi tincidunt
Risus nec feugiat in fermentum posuere urna
pharetra massa massa ultricies mi quis. Sap
senectus. Nam aliquam sem et tortor consequat</p>
            </div>
            <div className='about3'>
            <img src={about1} alt='nc'/>
            </div>
        </div>
        {/* end about1 */}


        {/* start icons */}
        <div className='icons'>
          <h1 className='text-center'>FITS & PROTECTS YOUR PHONE PERFECTLY</h1>

          <div className='icon1'>

            <div className='icon2'>
              <div className='icon21'>
                <div className='i'><i className="fa-brands fa-pagelines" style={{color:"white",width:"25px",height:"25px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}></i></div>
                <div className='words'>
                <h3>DIGITAL PRINTING</h3>
                <p style={{color:"white"}}>liquam sit amet cursus mauris. Sed      ipsum.</p>
                </div>
              </div>
              <div className='icon21'>
                <div className='i'><i className="fa-solid fa-location-pin" style={{color:"white",width:"25px",height:"25px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}></i></div>
                <div className='words'>
                <h3>LASER CUT</h3>
                <p style={{color:"white"}}>liquam sit amet cursus mauris. Sed      ipsum.</p>
                </div>
              </div>
              <div className='icon21'>
                <div className='i'><i class="fa-solid fa-heart" style={{color:"white",width:"25px",height:"25px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}></i></div>
                <div className='words'>
                <h3>SHOCKPROOF</h3>
                <p style={{color:"white"}}>liquam sit amet cursus mauris. Sed      ipsum.</p>
                </div>
              </div>
            </div>

            <div className='icon3'>
            <div className='icon21'>
                <div className='i'><i class="fa-solid fa-user" style={{color:"white",width:"25px",height:"25px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}></i></div>
                <div className='words'>
                <h3>WATERPROOF</h3>
                <p style={{color:"white"}}>liquam sit amet cursus mauris. Sed      ipsum.</p>
                </div>
              </div>
              <div className='icon21'>
                <div className='i'><i class="fa-solid fa-dharmachakra" style={{color:"white",width:"25px",height:"25px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}></i></div>
                <div className='words'>
                <h3>WEAR-RESISTANT</h3>
                <p style={{color:"white"}}>liquam sit amet cursus mauris. Sed      ipsum.</p>
                </div>
              </div>
              <div className='icon21'>
                <div className='i'><i class="fa-solid fa-wand-magic-sparkles" style={{color:"white",width:"25px",height:"25px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}></i></div>
                <div className='words'>
                <h3>LIGHTWIGHT</h3>
                <p style={{color:"white"}}>liquam sit amet cursus mauris. Sed      ipsum.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
        {/* End Icons */}

        {/* Start Under The Icons */}
        <div className='A'>
          <div className='B'>
            <div className='Bimagee'><img src={about2} alt='nf' /></div>
            <div className='wordss'>
            <h2>Screen Protection from scratches</h2>
            <p>Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl</p>
            </div>
          </div>
          <div className='B'>
          <div className='wordss'>
            <h2>Premium-quality Genuine and PU leather</h2>
            <p>Aliquam sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl. Sed vestibulum nulla elementum auctor tincidunt.</p>
            </div>
            <div className='Bimage'><img src={about3} alt='nf' /></div>
          </div>
        </div>
        {/* End Under the Icons  */}

        {/* Start Team */}
        <div>
          <h1 className='text-center'>OUR TEAM</h1>
          <h3 className='text-center'>THE PEOPLE WORKED HARD THROUGH</h3>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 team">
              <img src={team1} alt='team1' />
              <h2>FREDAN CASEY</h2>
              <h4>CEO</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 team">
              <img src={team2} alt='team1' />
              <h2>JAFFI DIXON</h2>
              <h4>PRODUCTION MANAGER</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 team">
              <img src={team3} alt='team1' />
              <h2>OLIVIA BOWERS</h2>
              <h4>QUALITY ANALYST</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 team">
              <img src={team4} alt='team1' />
              <h2>SAM RICHARDS</h2>
              <h4>SALES EXECUTIVE</h4>
            </div>
          </div>
        </div>




    </div>
  )
}

export default AboutUs
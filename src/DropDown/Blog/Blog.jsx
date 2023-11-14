import './BlogStyle.css';
import map from './../../images/maps.jpg';
const Blog = () => {
  return (
    <div className='c1'>
    <h1 className='text-center'>Contact Us</h1>
    <div className='map'>
        <img src={map} alt='map' />
    </div>

    <div className='container'>
        <div className='row'>
            <div class="col-lg-4 col-md-6 col-sm-12 carde">
              <h3>Phone</h3>
              <p>0803 - 080 - 3081</p>
              <p>0803 - 080 - 3082</p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 carde">
              <h3>Email</h3>
              <p>mail@example.com</p>
              <p>support@example.com</p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 carde">
              <h3>Adress</h3>
              <p>No: 58 A, East Madison Street,</p>
              <p>Baltimore, MD, USA 4508s</p>
            </div>
        </div>
    </div>

    <div className='container'>
    <h2 className='text-center'>Have a question or comment? Don't be shy: Reach out and say hi! Support hours: Monday-Friday, 7am-3pm</h2>
    </div>

    <div className='container'>
      <div className='Input'>

        <div className='input1'>
          <input type='text' placeholder='Enter your name'></input>
          <input type='email' placeholder='Email'></input>
        </div>

        <div className='phonenumber'>
          <input type='number' placeholder='Phone Number'></input>
        </div>

        <div className='comment'>
          <input type='text' placeholder='Comment'></input>
        </div>
        <div className='button'>
          <button>S E N D</button>
        </div>
      </div>
    </div>
</div>
  )
}

export default Blog
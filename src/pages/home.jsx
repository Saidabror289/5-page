import './home.css'
import lamp from '../assets/lamp.png'
function Home(){
    return(
        <>
        <div className="home">
            <div className="text">
<h4>MODERN INTERIOR</h4>
<h1>Create Your <br />
Interior <br /> Design.</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation.</p>
<button>CONTACT</button>
</div>
<img src={lamp} alt="" />
        </div>
        </>
    )
}
export default Home
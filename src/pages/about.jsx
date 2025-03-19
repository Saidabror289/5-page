import './about.css'
import sofa from '../assets/sofa.png'
function About(){
    return(
        <>
        <div className="about">
            <img src={sofa} alt="" />
            <div className="text">
                <h4>ABOUT US</h4>
                <h1>Interioris The Will <br />
                of An Epoch Mextreo</h1>
                <p>There are many variations of passages of Lorem Ipsum available,
but the majority have suffered alteration in some form injected
humour, or randomised words which don't look even slightly
believable.If you are going to use a passage of Lorem Ipsum,
sure there isn't anything embarrassing hidden the middleof text.
All the Lorem Ipsum generators on the Internettend to repeat
predefined chunks as necessary,making this the first true
generator on the Internet.</p>
<button>LEARN MORE</button>
            </div>
        </div>
        </>
    )
}
export default About
import './AboutMe.css'
import ProfilePhoto from "/Me_3.jpeg"
import Email from '/Gmail.png'
import LinkedIn from '/LinkedIn.png'
import { Typewriter } from '../TypingEffect/Typewriter'


function AboutMe() {
    return (  
        <div className="About_Me">
            <div className="About_Me_Content">
                <div className="Title">
                    <Typewriter text="Hii there, welcome to my portfolio!" speed={50}/>
                </div>
                <div className="About">
                    <p>My name is Conor Tansey. I'm a software engineer from Ireland 
                    and have an MSc in Computer Science from the University of Birmingham and a
                    BA in Mathematics from Trinity College Dublin. I recently worked in high frequency
                    trading and am currently pursuing my next opportunity.</p>
                    <p>Interested in various areas including full stack development, distributed systems, finance and machine learning.</p>
                </div>
                <h5>Contact Links</h5>
                <div className="Social_Links">
                    <a href="https://www.linkedin.com/in/conortansey/" target="_blank">
                    <img className="LinkedIn" src={LinkedIn} alt="LinkedIn"/>
                    </a>
                    <a href="mailto:ctansey101@gmail.com">
                        <img className="Gmail" src={Email} alt="Email" />
                    </a>
                </div>
            </div>
            <div className="Photo">
                <img src={ProfilePhoto} alt="Not found" />
            </div>
        </div>
    );
}

export default AboutMe;
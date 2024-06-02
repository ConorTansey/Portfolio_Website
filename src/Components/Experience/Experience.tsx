import SigLogo from '/SigLogo.png'
import InnopharmaLogo from '/Innopharma_Logo.png'
import AcademyOfGrindsLogo from '/Academy_of_Grinds.png'
import './Experience.css'

function Experience() {
    return ( 
        <div className="Professional_Wrapper">
            <div className="Professional_Grid">
                <div className="SIG">
                    <img className="SIG_Img" src={SigLogo} alt="Image not found"/>
                </div>
                <div className="SIG_Description">
                    <p><h3>Software Engineer | 2022 - 2023</h3></p>
                    <ul>
                        <li>Developed the front and back end of the trading application used by traders and researchers, added functionality to the order management system to support the order processing of new financial instruments and worked on the simulation exchange system to test trading strategies all using C++, C#, HTML, CSS and ReactJS.</li>
                        <li>Experience building analytical tools and ETL pipelines for researchers using Python and SQL.</li>
                        <li>Was often given the responsibility of working in a production support role which involved quickly diagnosing and resolving issues that arose within the live production environment.</li>
                    </ul>
                </div>
                <div className="Innopharma">
                    <img className="Trinity_Img" src={InnopharmaLogo} alt="Image not found" />
                </div>
                <div className="Innopharma_Description">
                    <p><h3>Software Engineer | 2020 - 2021</h3></p>
                    <ul>
                        <li>Contributed to full stack development tasks mostly using Java and ReactJS/Typescript. Sample tasks included improving the user experience of the company’s website, migrating the security authentication system from OAuth 1.0
to OAuth 2.0 and adding API functionality.</li>
                        <li>Was the lead developer behind an instance segmentation machine learning model built in PyTorch which was
used to segment images of particles passing by a camera.</li>
                    </ul>
                </div>
                <div className="Grinds">
                    <img className="Grinds_Img" src={AcademyOfGrindsLogo} alt="Image not found" />
                </div>
                <div className="Grinds_Description">
                <p><h3>Mathematics Teaching Assistant | 2019 - 2020</h3></p>
                    <ul>
                        <li>Taught both Leaving and Junior Certificate classes both pure and applied mathematics </li>
                        <li>Topics included statistics, probability, calculus and algebra</li>
                    </ul>
                </div>
            </div>
        </div> 
     );
}

export default Experience;
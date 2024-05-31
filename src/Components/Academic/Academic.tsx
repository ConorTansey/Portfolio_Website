import UoB from '/UoB.svg'
import Trinity from '/Trinity.png'
import './Academic.css'

function Academic() {
    return ( 
    <div className="Education_Wrapper">
        <div className="Education_Grid">
            <div className="UoB">
                <img className="UoB_Img" src={UoB} alt="" />
            </div>
            <div className="UoB_Description">
                <p><h3>University of Birmingham - MSc Computer Science</h3> 2021 - 2022</p>
                <p><b>Achieved First Class Honours (Distinction)</b></p>
                <p><b>Classes Taken</b>: Data Structures and Algorithms, Computer Systems, Full Stack Development, Machine Learning, Building Useable Software, Software Project</p>
            </div>
            <div className="Trinity">
                <img className="Trinity_Img" src={Trinity} alt="" />
            </div>
            <div className="Trinity_Description">
                <p><h3>Trinity College Dublin - BA Mathematics</h3> 2016 - 2020</p>
                <p><b>Achieved Upper Second Class Honours</b></p>
                <p><b>Classes Taken</b>: Calculus, Linear Algebra, Computation Theory and Logic, Symbolic Programming,Formal Verification, Differential Equations, Complex Analysis</p>
            </div>
        </div>
    </div> );
}

export default Academic;
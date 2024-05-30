import './Projects.css'

function Projects() {
    return ( 
    <div className="Projects">
        <div className="Projects_Wrapper">
            <div className="Matching_Engine">
                <a href="https://github.com/ConorTansey/Matching-Engine-Simulator" target="_blank">Matching Engine Simulator</a>
                <p>Built an order book matching engine in C# that takes in a file containing trade data and simulates trades being matched against each other and calculating various metrics such as profit and long/short exposure </p>
            </div>
            <div className="Portfolio_Website">
                <a href="https://github.com/ConorTansey/Portfolio_Website" target="_blank">Personal Website</a>
                <p>Built this personal portfolio website using HTML, CSS, Typescript and React</p>
            </div>
            <h3>Currently Building</h3>
            <div className="Travel_App">
                <p>Building a website where solo travellers are able to connect with other solo travellers using TypeScript, React, Express, NodeJS and MongoDB. Coming soon!</p>
            </div>
            <div className="AI">
                <p>Currently building a transformer based language model in PyTorch to generate text in the style of any author it is trained on. Coming soon!</p>
            </div>
        </div>
    </div> );
}

export default Projects;
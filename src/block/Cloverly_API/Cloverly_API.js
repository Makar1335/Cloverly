import './Cloverly_API.scss';
import Map from '../../resources/img/Map.png';

const Cloverly_API = () => {
    return (
        <section className="section-cloverly_api">
            <div className='text'>
                <text className='header'>
                    Cloverly API
                </text>
                <h1>
                    Offset Your Carbon Footprint in Real Time
                </h1>
                <p>
                    Cloverly's powerful API calculates the impact of common carbon-intensive activities in real time and uses verified, quality carbon offset projects to neutralize them. Ready to get started? Create an account to integrate the Cloverly API for free, or contact us for custom solutions.
                </p>
            </div>

            <div className='buttons'>
                <input className="Started" type="submit" value="Get Started for Free"></input>
                <input className="Talk" type="submit" value="Let's Talk"></input>
            </div>

            <div className='picture'>
                <img src={Map}></img>
            </div>
        </section>
    );
}

export default Cloverly_API;
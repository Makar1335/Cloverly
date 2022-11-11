import './HowItWork.scss';

import MiniMap from '../../resources/img/MiniMap.png'
import MagnifyingGlass from '../../resources/img/magnifyingGlass.png'
import SolarPanel from'../../resources/img/solarPanel.png'


const HowItWork = () => {
    return (
        <section className="section-howitwork">
            <div className='columns'>

                <div className='left'>
                    <text className='header'>
                    How It Works
                    </text>
                    <h1>
                    Connecting the Carbon Offset Infrastructure for a More Sustainable World
                    </h1>
                    <p>
                    Businesses and consumers count on Cloverly to offset their carbon footprint and create positive environmental change based on real-time business activities. Whether you implement our ready-to-use applications or install our API as part of a custom integration, Cloverly can help you go greener, faster.
                    </p>

                    <div className='buttons'>
                        <input className="Learn_More" type="submit" value="Learn More"></input>
                    </div>
                </div>

                <div className='right'>
                    <div className='sideText'>
                        <img src={MiniMap}></img>
                        <h2>
                        Matching the Offset
                        </h2>
                        <p>
                        The Cloverly API can find and match the best offset per transaction. If your customer orders a product in California, for example, we might partner with an improved forest management project in California to keep the benefit local.
                        </p>
                    </div>
                    <div className='sideText'>
                        <img src={MagnifyingGlass}></img>
                        <h2>
                        Transaction Transparency
                        </h2>
                        <p>
                        We believe in transparency and fully validated transactions. That's why every time you (or your customers) choose to offset an emission-producing activity with Cloverly, we provide real-time transactional data to show the location, type, and amount of carbon offset.
                        </p>
                    </div>
                    <div className='sideText'>
                        <img src={SolarPanel}></img>
                        <h2>
                        Verified Sources
                        </h2>
                        <p>
                        To effectively neutralize carbon emissions, we know that quality matters. That's why Cloverly works with reputable, internationally recognized suppliers who track and verify registered carbon offset projects.
                        </p>
                    </div>
                </div>
            </div>
            

        </section>
    );
}

export default HowItWork;
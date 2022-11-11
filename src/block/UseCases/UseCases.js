import './UseCases.scss';
import Ecommerce from '../../resources/cardImg/ecommerce.png'
import Energy from '../../resources/cardImg/energy.png'
import Enterprise from '../../resources/cardImg/enterprise.png'
import Fintech from '../../resources/cardImg/fintech.png'
import Fleet from '../../resources/cardImg/fleet.png'
import Flights from '../../resources/cardImg/flights.png'
import Rideshare from '../../resources/cardImg/rideshare.png'
import Supply from '../../resources/cardImg/supply.png'

const UseCases = () => {
    return (
        <section className="section-useCases">
            <div className='text'>
                <text className='header'>
                    Use Cases
                </text>
                <h1>
                    Used in Every Environment, to Save the Environment
                </h1>
                <p>
                    There are many sources of carbon emissions, including some that we don't typically associate with environmental impacts. For example, even cloud computing requires physical servers powered by electricity. Below are a few common use cases for carbon offsetting.
                </p>
            </div>

            <div className='Cards'>
                <div className='left'>
                    <div className='card'>
                        <img src={Ecommerce}></img>
                        <div className='card-text'>
                            <p className='heading'>Ecommerce</p>
                            <p>
                                See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.
                            </p>
                            <p>
                                <a href='#'>Learn more</a>
                            </p>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Flights}></img>
                        <div className='card-text'>
                            <p className='heading'>Flights</p>
                            <p>
                                Take off the carbon impact of aviation. With the Cloverly API, calculate and offset miles flown and impact generated.
                            </p>
                            <p>
                                <a href='#'>Learn more</a>
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Energy}></img>
                        <div className='card-text'>
                            <p className='heading'>Energy</p>
                            <p>
                                Find out how the energy industry is using carbon offsets to make a difference and create a more sustainable world.
                            </p>
                            <p>
                                <a href='#'>Learn more</a>
                            </p>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Fintech}></img>
                        <div className='card-text'>
                            <p className='heading'>Fintech</p>
                            <p>
                                Cloverly can help identify carbon footprints based on financial transaction data and purchase the offsets needed to mitigate these effects.
                            </p>
                            <p>
                                <a href='#'>Learn more</a>
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className='right'>

                    <div className='card'>
                        <img src={Rideshare}></img>
                        <div className='card-text'>
                            <p className='heading'>Rideshare</p>
                            <p>
                                Miles traveled and carbon emitted can be easily calculated and offset in real time with Cloverly.
                            </p>
                            <p>
                                <a href='#'>Learn more</a>
                            </p>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Enterprise}></img>
                        <div className='card-text'>
                            <p className='heading'>Enterprise Resource Planning</p>
                            <p>
                                Learn how enterprise software companies are using the Cloverly integration to offset their environmental effects.
                            </p>
                            <p>
                                <a href='#'>Learn more</a>
                            </p>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Supply}></img>
                        <div className='card-text'>
                            <p className='heading'>Supply Chain</p>
                            <p>
                                Calculate offsets based on your supply chain, make a difference, and see how others are doing it, too.
                            </p>
                            <p>
                                <a href='#'>Learn more</a>
                            </p>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Fleet}></img>
                        <div className='card-text'>
                            <p className='heading'>Fleet</p>
                            <p>
                                You track mileage and fuel economy for your vehicle fleet. So you already have the data the Cloverly API needs to calculate and offset the carbon impact.
                            </p>
                            <p>
                                <a href='#'>Learn more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='text'>
                    <h2>
                        Don't See Your Industry?
                    </h2>
                    <p>
                        Cloverly can accommodate a variety of use cases for many different carbon-producing activities. Even if you don't see your industry here or you're not sure what activities to offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon emissions.
                    </p>
                </div>


                <div className='buttons'>
                    <input className="Learn_More" type="submit" value="Contact Us"></input>
                </div>
            </div>



        </section>
    );
}

export default UseCases;
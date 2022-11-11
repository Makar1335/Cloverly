import Navigation from '../../components/nav/nav';
import './preview.scss';
import Footer from '../../components/footer/footer';

import Phone from '../../resources/img/phone.png';
import IMG7 from '../../resources/img/image 7.png';
import IMG8 from '../../resources/img/image 8.png';
import IMG9 from '../../resources/img/image 9.png';

const Preview = () => {
    return (
        <section className="section-preview">
            <Navigation/>
            <div className='text'>
                <div className='pretitle'>
                    Sustainability on Demand
                </div>
                <h1 className='Helping'>
                    Helping the World Go Carbon Neutral sadasda 
                </h1>
                <p>
                    Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to neutralize the environmental impact of everyday activities like ecommerce deliveries, ridesharing, flights, and more.
                </p>
                
            </div>
            <div className='buttons'>
                <input className="Started" type="submit" value="Get Started"></input>
                <input className="Talk" type="submit" value="Let's Talk"></input>
            </div>

            <Footer/>
        </section>
    );
}

export default Preview;
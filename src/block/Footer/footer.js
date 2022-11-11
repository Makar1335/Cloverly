import './footer.scss';
import Cloverly from '../../resources/img/Cloverly.png'
const Footer = () => {
    return (
        <section className="section-Footer">

            <div className='tyty'>
                <img src={Cloverly}></img>
                <div>
                    <a href='#'>Login</a>
                    <input className="GetAPIKeys" type="submit" value="Get API Keys"></input>
                </div>
            </div>

            <div className='links'>
                <div className='Product'>
                    <name>Product</name>
                    <p><a href='#'>Emission Calculations</a></p>
                    <p><a href='#'>Diverse Offset Portfolio</a></p>
                </div>
                <div className='Use Cases'>
                    <name>Use Cases</name>
                    <p><a href='#'>Ecommerce</a></p>
                    <p><a href='#'>Rideshare</a></p>
                </div>
                <div className='Developers'>
                    <name>Developers</name>
                    <p><a href='#'>API Docs</a></p>
                    <p><a href='#'>Ask Cloverly</a></p>
                </div>
                <div className='About'>
                    <name>About</name>
                    <p><a href='#'>How It Works</a></p>
                    <p><a href='#'>Offset Projects</a></p>
                </div>
                <div className='Xto-to'>
                    <name></name>
                    <p><a href='#'>FAQ</a></p>
                    <p><a href='#'>Careers</a></p>
                </div>
            </div>

            <div className='Cloverly'>
                <p>
                © 2020 Cloverly
                </p>
            </div>
        </section>
    );
}

export default Footer;
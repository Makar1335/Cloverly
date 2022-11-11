import './PartnerSpotlight.scss';
import Partner from '../../resources/img/partner.png'
import GoogleLooker from '../../resources/img/googleLooker.png'

const PartnerSpotlight = () => {
    return (
        <section className="section-PartnerSpotlight">
            <img src={Partner} className='Partner'></img>

            <div className='rightPart'>
                <div className='text'>
                    <div className='pretitle'>
                        Partner Spotlight
                    </div>
                    <p className='text1'>
                        <b>At the JOIN data conference</b>, the team from Looker (now part of Google) used data provided by attendees to determine the carbon footprint of their travel to the conference and offset it with Cloverly.
                    </p>
                    <p className='quotationmarks'>
                        “ ”
                    </p>
                    <p className='text2'>
                        We built a little Javascript application to let you select how much of your carbon footprint you wanted to offset and then got an estimated price via Cloverly, which provides a simple API for purchasing Renewable Energy Certificates (RECs). Once we had the estimate from Cloverly, which helpfully tells you not just cost, but also where the RECs you're purchasing will come from, we approved the purchase and executed it via the API.
                    </p>
                    <p>
                        <a>Read Full Story</a>
                    </p>
                </div>

                <div className='namePartner'>
                    <img src={GoogleLooker}></img>
                    <p>
                    Daniel Mintz<br/>
                    Chief Data Evangelist at Looker
                    </p>
                </div>

                <div className='buttons'>
                    <input className="MorePartners" type="submit" value="More Partners"></input>
                </div>
            </div>

        </section>
    );
}

export default PartnerSpotlight;
import './ForDevelopers.scss';

import CurlApi from '../../resources/img/CurlApi.png'

const ForDevelopers = () => {
    return (
        <section className="section-forDevelopers">
            <div className='text'>

                <div className='pretitle'>
                    For Developers, By Developers
                </div>
                <h1 className='Helping'>
                    Simple Integration. <br />
                    RESTful API.
                </h1>
                <p>
                    The Cloverly API calculates and offsets carbon emissions on a per-transaction basis. We can determine the amount of carbon emitted and offset that quantity by purchasing carbon offsets in real time. Explore our developer docs to find the right endpoints for your application, and sign up for free to get the Cloverly sandbox keys.
                </p>
            </div>

            <div className='buttons'>
                <input className="GetAPIKeys" type="submit" value="Get API Keys"></input>
                <input className="DeveloperDocs" type="submit" value="Developer Docs"></input>
            </div>

            {/* <img src={CurlApi}></img> */}
        </section>
    );
}

export default ForDevelopers;
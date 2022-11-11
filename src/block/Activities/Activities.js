import './Activities.scss';

const Activities = () => {
    return (
        <section className="section-Activities">
            <div className='text'>
                <h1 className='Helping'>
                What Activities Will You Offset?    
                </h1>
                <p>
                Neutralize your carbon footprint with the Cloverly API.
                </p>
            </div>

            <div className='buttons'>
                <input className="TryCloverly" type="submit" value="Try Cloverly"></input>
            </div>
        </section>
    );
}

export default Activities;
import './css/certification.scss';
import certificationInfo from './info/certificationInfo.json';

const certificationImages = import.meta.glob('./images/certifications/*.{png,jpg,jpeg,svg}', {
    eager: true,
    query: '?url',
    import: 'default',
});

function Certification () {
    return (
        <div className='Certification d-flex justify-content-center align-items-center' id='certification-div'>
            <div>
                <h1 className='text-center fw-bold'>
                    Professional Certification
                    <hr />
                </h1>
                <div className='container'>
                    <div className='row'>
                        {[...certificationInfo].sort((a, b) => b.id - a.id).map(certification => (
                            <div className='col-lg-6 mb-5' key={certification.id}>
                                <div className='card'>
                                    <img
                                        src={certificationImages[`./images/certifications/${certification.imgSrc}`]}
                                        width={399}
                                        alt={certification.name}
                                    />
                                    <h5 className='m-3 project-descriptions'>
                                        {certification.name}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certification;

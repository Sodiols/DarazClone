import './contentBanner.css'
import ContentBannerData from '../../Data/ContentBannerData';

const ContentBanner = () => {
    return (
        <div className="contentBanner">
            <div className='container'>
                <div className="row">
                    {
                    ContentBannerData.map(data =>
                    <div key={data.id} className="col-lg-2 col-sm-12 m-2">
                        <img src={data.image} alt={data.name} className='img-fluid' width="40" />
                        <a href={data.link}>{data.name}</a>
                    </div> )
                    }
                </div>
            </div>
        </div>
    );
};

export default ContentBanner;
import './DarazMall.css'
import DarazMallData from '../../Data/DarazMallData';

const DarazMall = () => {
    return (
        <div className="darazMall">
        <div className="container py-5">
            <h4>DARAZMALL</h4>
            <div className='darazmall-container d-flex flex-wrap'>
                {DarazMallData.map(data => 
                    <div key={data.id} className="col-lg-2 col-md-4 col-sm-6 card-body">
                        <img src={data.image} alt="product" className='img-fluid p-2' />
                        <p className='p-2'>{data.name}</p>
                        <h5 className='p-2'>{data.price}</h5>
                        <h6 className='p-2'><del className="text-muted">{data.prevprice}</del> {data.percentage}</h6>
                    </div>
                    )}
            </div>
        </div>
    </div>
    );
};

export default DarazMall;
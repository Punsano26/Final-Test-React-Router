import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const ComDetail = () => {
  const {id} = useParams();
  const [comData, setComData] = useState({});
   useEffect(() => {
     fetch("http://localhost:8000/computer/" + id)
       .then((res) => res.json())
       .then((data) => {
         setComData(data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, [id]);
  return (
    <div className="row">
    <div className="offset-lg-3 col-lg-6">
      <div className="contianer">
        <div className="card row">
          <div className="card-title">
            <h2>Computer Detail</h2>
          </div>
          {comData && (
            <div className="card-body">
              <img src={comData.image + "&" + comData.id} alt="Computer" />
              <div className="card-text">
                <h3>{comData.name} ({comData.id})</h3>
                <h5 className='contack'>Contack Detail : </h5>
                <h5>Brand : {comData.brand}</h5>
                <h5>Model : {comData.model}</h5>
                <h5>Price : {comData.price}</h5>
                <h5>CPU_type : {comData.CPU_type}</h5>
              </div>
              <div className="backTo">
              <Link className='btn btn-danger' to="/">
                Back to  Listing
              </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ComDetail
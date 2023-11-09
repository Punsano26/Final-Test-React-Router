import { useNavigate, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const EditCom = () => {
  const {id} = useParams();
    const [computer, setComputer] = useState({
        brand: "",
        model: "",
        price: "",
        CPU_type: "",
        image: "https://source.unsplash.com/random/200x200/?computer",
    });
    const navigate = useNavigate();
    useEffect(()=>{
      fetch("http://localhost:8000/computer/" + id)
        .then((res) => res.json())
        .then((data) => {
          setComputer(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },[id]);
  const handleChange = (e) =>{
    setComputer({...computer, [e.target.name]: e.target.value});
  };

  const handleSummit =(e) => {
    e.preventDefault();
    const computerData = {
        brand: computer.brand,
        model: computer.model,
        price: computer.price,
        CPU_type: computer.CPU_type,
        image: computer.image,
    };
    fetch("http://localhost:8000/computer/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(computerData),
    })
      .then((res) => {
        alert("save sucessfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSummit}>
            <div className="card">
              <div className="card-title">
                <h2>Edit new Computer</h2>
              </div>
              <div className="card-body">
                <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="id">ID</label>
                      <input
                        type="int"
                        disabled
                        name="id"
                        id="id"
                        value={id}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="brand">Brand</label>
                      <input
                        type="text"
                        required
                        name="brand"
                        id="brand"
                        value={computer.brand}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="model">Model</label>
                      <input
                        type="text"
                        required
                        name="model"
                        id="model"
                        value={computer.model}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        type="double"
                        required
                        name="price"
                        id="price"
                        value={computer.price}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="CPU_type">CPU_type</label>
                      <input
                        type="text"
                        required
                        name="CPU_type"
                        id="CPU_type"
                        value={computer.CPU_type}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="image">Image</label>
                      <input
                        type="text"
                        required
                        name="image"
                        id="image"
                        value={computer.image}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                
                
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditCom
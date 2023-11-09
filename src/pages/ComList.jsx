import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const ComList = () => {
  const [comData, setComData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/computer")
      .then(
        // convert เป็น jason
        (res) => {
          return res.json();
        }
      )
      // เรียกใช้ State
      .then((response) => {
        setComData(response);
      })
      // เปลี่ยนเป็น messsage
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const loadEdit = (id) => {
    navigate("/computer/edit/" + id);
  };
  const loadDetail = (id) => {
    navigate("/computer/detail/" + id);
  };
  const removeCom = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/computer/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("remove successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Computer List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/computer/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <br />

          <table className="table table-bordered table-striped table-dark ">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Brand</td>
                <td>Model</td>
                <td>Price</td>
                <td>CPU_type</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {comData &&
                comData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.price}</td>
                    <td>{item.CPU_type}</td>
                    
                    <td>
                      <a
                        className="btn btn-success"
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                      >
                        Edit
                      </a>
                      <a
                        className="btn btn-danger"
                        onClick={() => {
                          removeCom(item.id);
                        }}
                      >
                        Delete
                      </a>
                      <a
                        className="btn btn-primary"
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComList;

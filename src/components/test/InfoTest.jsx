import React from "react";
import "./test.css";
import { Link } from "react-router-dom";

function Info(props) {
  return (

    <div className="col-2 col-md-3">
      <div className="card card1" style={{ width: "100%" }}>
        <div>
          <img
            className="radius"
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.15752-9/314420343_1287401555432654_6797001471692597047_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=g3mU0zEbA-oAX_x4RYi&_nc_ht=scontent.fhan14-3.fna&oh=03_AdRBT4y7Y_ydC_3Atn349spONKcp8kObWEcfUSDm2g-tRA&oe=638C5895"
            alt="Card image cap"
          />
        </div>
        <div className="card-body box">
          <h3 className="card-title">Name: Kiều Hải Long</h3>
          <h5 className="card-text">Student code: A35983</h5>
          <h5 className="card-text">Job: Student</h5>
          <h5 className="card-text t1">Address: Hà Nội</h5>
        </div>
        <div className=" btn-logout">
          <Link to="/main" className="btn btn-primary">
            Go Main
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CourseItem.propTypes = {};

function CourseItem(props) {
  console.log(props);
  const { name, point, time } = props.item;
  return (
    <div className="col-sm-4" style={{ marginBottom: "20px" }}>
      <div className="test">
        <div className="card">
          <div className="card-body">
            <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-9 col-lg-9">
              <h5 className="card-title">name : {name}</h5>
              <p>Time : {time}</p>
              <p>Point {point}</p>
              <p>Difficult</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <Link to="/test" className="btn btn-primary">
              Start
            </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;

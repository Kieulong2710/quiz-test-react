import React from "react";
import PropTypes from "prop-types";

Sort.propTypes = {};

function Sort({setSortValue}) {
  return <div className="col-4 col-md-4">
  {/* <!-- Sort --> */}
  <div className="input-group">
    <select className="custom-select" id="inputGroupSelect04" 
    onChange = {(e)=>setSortValue(e.target.value)}
    > 
      <option selected >Choose...</option>
      <option value="1">Time</option>
      <option value="2">Point</option>
      
    </select>
  </div>
</div>;
}

export default Sort;

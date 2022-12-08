import React from "react";

Search.propTypes = {};

function Search({setKeySearch}) {
  return (
    
        <div className="col-10 col-md-8">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
            </div>

            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name = "keySearch"
              onChange = {(e)=>setKeySearch(e.target.value)}
            />
            <button type="button" className="btn btn-primary">
              Tìm kiếm
            </button>
          </div>
        </div>

        
      
  );
}

export default Search;

import React from "react";
import PropTypes from "prop-types";
import InfoTest from "../components/test/InfoTest";
import Testlist from "../components/test/testlist"
TestContainer.propTypes = {};

function TestContainer(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <InfoTest />
          <div className="col-10 col-md-9">
            <div className="row">
              <Testlist />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestContainer;

import React, { Component } from "react";

class Default extends Component {
  render() {
    return (
      <div>
        <h1 className="text-blue text-title text-center my-5">404 error</h1>
        <h2 className="text-orange text-title text-center my-5">
          <span>
            <i className="fa fa-surprise "></i>
          </span>
        </h2>
        <h2 className="text-red text-center my-5">
          That page doesn't live here.
        </h2>
      </div>
    );
  }
}

export default Default;

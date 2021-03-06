import { Link } from "react-router";
import React from "react";

const Repositories = () => {
  return (
    <div>
      <h3>
        {"Repositories"}
      </h3>
      <div className="row">
        <Link
            className="medium-2 columns button"
            to="#"
        >
          <span className="fi-social-github">
            {"Github"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Repositories;

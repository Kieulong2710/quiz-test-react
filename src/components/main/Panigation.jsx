import React from "react";
import PropTypes from "prop-types";

Panigation.propTypes = {};

function Panigation({ totalItem, numberOnePage, numberPage }) {
  const totalPage = Math.ceil(totalItem / numberOnePage);
  const page = [];
  for (let i = 1; i <= totalPage; i++) {
    page.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          className="page-item"
          onClick={() =>
            numberPage((pre) => {
              if (pre === 1) {
                return 1;
              }
              return pre - 1;
            })
          }
        >
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {page.map((item) => {
          return (
            <li
              className="page-item"
              key={item}
              onClick={() => numberPage(item)}
            >
              <a className="page-link" href="#">
                {item}
              </a>
            </li>
          );
        })}

        {}
        <li
          className="page-item"
          onClick={() =>
            numberPage((pre) => {
              if (pre === page.length) {
                return pre;
              }
              return pre + 1;
            })
          }
        >
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Panigation;

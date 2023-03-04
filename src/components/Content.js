import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className="container my-3">
      {items.length > 0 ? (
        <ul className="list-group">
          {items.map((item) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <label className="form-check-label mx-3">{item.taskName}</label>
              </div>
              <div className="ms-auto">
                <small className="text-muted">{item.remarks}</small>
                <FaTrashAlt
                  className="mx-3 text-danger"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">The list is empty.</p>
      )}
    </main>
  );
};

export default Content;

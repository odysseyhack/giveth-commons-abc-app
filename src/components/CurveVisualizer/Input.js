import React from "react";

function Input({ handler, name }) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">{name}</span>
      </div>
      <input
        type="number"
        className="form-control"
        placeholder="Reserve"
        value={handler[0]}
        onChange={e => handler[1](e.target.value)}
      />
    </div>
  );
}

export default Input;

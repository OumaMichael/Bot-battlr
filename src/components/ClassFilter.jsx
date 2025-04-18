import React, { useState } from "react";

export default function ClassFilter({ botClasses, onApply }) {
  const [selected, setSelected] = useState([]);

  const toggle = (e) => {
    const { value, checked } = e.target;
    setSelected(prev => checked ? [...prev, value] : prev.filter(c => c !== value));
  };

  return (
    <div className="ui segment">
      <h4>Select Classes:</h4>
      {botClasses.map(cls => (
        <div key={cls}>
          <label>
            <input type="checkbox" value={cls} onChange={toggle} /> {cls}
          </label>
        </div>
      ))}
      <button className="ui button" onClick={() => onApply(selected)}>Apply Filters</button>
    </div>
  );
}

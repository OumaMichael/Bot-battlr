import React, { useState } from "react";

function ClassFilter({ botClasses, onApply }) {
  const [selected, setSelected] = useState([]);

  const toggleCheckbox = (e) => {
    const { value, checked } = e.target;
    setSelected(checked ? [...selected, value] : selected.filter(c => c !== value));
  };

  return (
    <div className="filter">
      <h4>Select Classes:</h4>
      {botClasses.map(cls => (
        <div key={cls}>
          <label>
            <input type="checkbox" value={cls} checked={selected.includes(cls)} onChange={toggleCheckbox} />
            {cls}
          </label>
        </div>
      ))}
      <button className="ui button" onClick={() => onApply(selected)}>Apply</button>
    </div>
  );
}

export default ClassFilter;

import React from "react";

export default function SortControls({ onSortChange }) {
  return (
    <div className="ui segment">
      <div className="ui three buttons">
        <button className="ui button" onClick={() => onSortChange("health")}>Health</button>
        <button className="ui button" onClick={() => onSortChange("damage")}>Damage</button>
        <button className="ui button" onClick={() => onSortChange("armor")}>Armor</button>
      </div>
    </div>
  );
}

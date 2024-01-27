import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  function handleEditClick() {
    // setIsEditing(!isEditing);      // not a good practice
    setIsEditing((editing) => !editing); // When a state is updating based on their previous state, should use call back function
  }
  let editableplayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableplayerName = (
      <input type="text" value={playerName} required onChange={handleChange} />
    );
  }
  return (
    <li>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

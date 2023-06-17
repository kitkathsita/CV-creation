import React from "react";

function AddButton({clickFunction}) {
  return (
    <button onClick={clickFunction} className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
      Add new section
    </button>
  );
}

export default AddButton;

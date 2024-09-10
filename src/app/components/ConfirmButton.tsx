import React from "react";

const ConfirmButton = () => {
  return (
    <div>
      <button
        type="submit"
        className="
        px-4 py-2 text-white bg-primary-900 rounded-md flex flex-row items-center justify-center gap-2 text-sm"
      >
        Confirmar asistencia
      </button>
    </div>
  );
};

export default ConfirmButton;

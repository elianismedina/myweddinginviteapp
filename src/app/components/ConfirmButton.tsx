import React from "react";

const ConfirmButton = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <button
        onClick={async () => {
          const res = await fetch("/api/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: "elianismedina05@outlook.com",
              firstName: "Elianis",
            }),
          });
          const data = await res.json();
          console.log(data);
        }}
        className="px-4 py-2 text-white bg-primary-900 rounded-md flex flex-row items-center justify-center gap-2 text-sm"
      >
        Confirmar asistencia
      </button>
    </div>
  );
};

export default ConfirmButton;

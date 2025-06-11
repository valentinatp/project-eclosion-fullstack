import React from "react";
import imagenesRegister from "../../../assets/imagenes-register";



const LoadingScreen = () => {


  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      style={{ minHeight: "100vh", caretColor: "transparent" }}
>
      <div className="text-center">
        <img
          src={imagenesRegister.img4}
          alt="Cargando..."
          className="w-24 h-24 mx-auto mb-4"
        />
        <p className="text-xl font-semibold text-gray-700">Redirigiendo...</p>
      </div>
    </div>
  );
}

export default LoadingScreen
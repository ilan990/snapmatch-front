import React from 'react';
import './index.css'; 
import 'tailwindcss/tailwind.css'; 

function App() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Application de Gestion de Photos</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-md rounded-lg">
          {/* Contenu du premier composant */}
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          {/* Contenu du deuxième composant */}
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          {/* Contenu du troisième composant */}
        </div>
      </div>
    </div>
  );
}

export default App;

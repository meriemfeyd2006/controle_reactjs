import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Editer({ taches, setTaches, tache, setTache }) {
  const Navigate = useNavigate();

  function Editer(e) {
    e.preventDefault(); // Correction ici

    const newTask = taches.map((item) =>
      item.id === tache.id ? { ...item, ...tache } : item
    );

    setTaches(newTask);
    Navigate("/Table");
  }

  return (
    <section className="bg-white p-1 xs:p-8">
      <div className="max-w-96 sm:max-w-4xl mx-auto border border-blue-400 rounded-lg p-8">
        <h2 className="sm:text-xl text-[12px] font-bold mb-6 text-blue-500">
         Modifier Les Information Personnelle 
        </h2>
        <form>
          <div className="space-y-6">
            <div>
              <label htmlFor="nom" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                onChange={(e) => setTache({ ...tache, nom: e.target.value })}
                type="text"
                id="nom"
                name="nom"
                value={tache?.nom || ""}
                className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"
              />
            </div>
            <div>
              <label htmlFor="prenom" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                Prénom
              </label>
              <input
                onChange={(e) => setTache({ ...tache, prenom: e.target.value })}
                type="text"
                id="prenom"
                name="prenom"
                value={tache?.prenom || ""}
                className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"
              />
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
              <div>
                <label htmlFor="email" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  onChange={(e) => setTache({ ...tache, email: e.target.value })}
                  type="email"
                  id="email"
                  name="email"
                  value={tache?.email || ""}
                  className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  onChange={(e) => setTache({ ...tache, tele: e.target.value })}
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={tache?.tele || ""}
                  className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"
                />
              </div>
            </div>
            <div>
              <label htmlFor="nom_tache" className="text-xs xs:text-sm font-medium text-gray-700 mb-1">
                Nom de la Tâche
              </label>
              <input
                onChange={(e) => setTache({ ...tache, nom_tache: e.target.value })}
                type="text"
                id="nom_tache"
                name="nom_tache"
                value={tache?.nom_tache || ""}
                className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"
              />
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end gap-4">
            <button
              onClick={(e) => Editer(e)}
              type="submit"
              className="sm:w-[86px] w-full h-[50px] text-xs sm:text-base bg-blue-500 rounded-[5px] p-[13px_25px] text-white"
            >
              Editer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Editer;

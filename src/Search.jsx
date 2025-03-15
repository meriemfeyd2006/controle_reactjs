import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { motion } from "framer-motion";

function Search({ taches1, setTaches1 }) {
  const [search, setSearch] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function handleSearch() {
    const newListe = taches1.filter((item) =>
      item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setSearch(newListe);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-lg"
      >
        <SearchIcon className="absolute left-4 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-full p-3 pl-12 border rounded-full shadow-md focus:ring-4 focus:ring-blue-400 focus:outline-none border-gray-300 text-gray-900"
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </motion.div>

      <motion.button
        onClick={handleSearch}
        className="mt-4 bg-white text-teal-600 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-all"
        whileHover={{ scale: 1.1 }}
      >
        Rechercher
      </motion.button>

      {/* Résultats */}
      <div className="mt-6 w-full max-w-lg space-y-4">
        {search.length > 0 ? (
          search.map((item, index) => (
            <motion.div
              key={index}
              className="p-5 bg-white shadow-lg rounded-xl border border-gray-300 transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <p className="text-sm text-gray-700 font-semibold mt-2">{item.salaire} DH</p>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-gray-100 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Aucun résultat trouvé
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default Search;

import { Link, useNavigate } from "react-router-dom";

function Taches({ taches1,setTaches1,tache,setTache }) {

 
  const Navigate = useNavigate();
  const handelForm = () => {
    Navigate("/Form");
    
  };

  const handleSearch = (e) => {
    // Implement the search logic here
    console.log("Searching for:", e.target.value);
  };

 
  return (
    <>
      <div>
        
        <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                fill="#BEE3F8"
                d="M44,7L4,23l40,16l-7-16L44,7z M36,23H17l18-7l1,6V23z"
              />
              <path
                fill="#3182CE"
                d="M40.212,10.669l-5.044,11.529L34.817,23l0.351,0.802l5.044,11.529L9.385,23L40.212,10.669 M44,7L4,23 l40,16l-7-16L44,7L44,7z"
              ></path>
              <path
                fill="#3182CE"
                d="M36,22l-1-6l-18,7l17,7l-2-5l-8-2h12V22z M27.661,21l5.771-2.244L33.806,21H27.661z"
              ></path>
            </svg>
          </div>
          TaskEase

        </div>
        <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" to="/">Accueil</Link>
            <Link className="px-4" to="/Taches">Taches</Link>
            <Link className="px-4" to="/Search">Rechercher_nom_tache</Link>
        </div>
        <div className="hidden md:block">
            
        </div>
      </div>
    </header>
        <div className="flex flex-col" style={{ marginTop: '50px' }}>
          <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="flex justify-center items-center min-h-screen">
                <table className="w-[1200px] mx-auto rounded-xl border border-gray-300 shadow-lg">
                  <thead>
                    <tr className="bg-teal-50">
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-teal-600 capitalize rounded-t-xl"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-teal-600 capitalize rounded-t-xl"
                      >
                        TITLE
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-teal-600 capitalize rounded-t-xl"
                      >
                        DESCRIPTION
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-teal-600 capitalize rounded-t-xl"
                      >
                        SALAIRE
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-teal-600 capitalize rounded-t-xl"
                      >
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    {taches1.map(function (item, index) {
                      return (
                        <tr className="bg-white transition-all duration-500 hover:bg-gray-50" key={item.id}>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {item.id}
                          </td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {item.title}
                          </td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {item.description}
                          </td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {item.salaire} DH
                          </td>
                          <td className="p-5">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={handelForm}
                                className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-500 transition-all duration-500 flex items-center"
                              >
                                Demand
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Taches;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Interface from "./Interface";
import Taches from "./Taches";
import { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import Editer from "./Editer";
import Search from "./Search";
import Login from "./Login";

function App() {

  const [taches1,setTaches1] = useState(
    [
      {
        id: 1,
        title: "Développement Frontend",
        description: "Création des interfaces utilisateur en React.js.",
        salaire: 8000
      },
      {
        id: 2,
        title: "Développement Backend",
        description: "Mise en place d'API avec Laravel.",
        salaire: 8500
      },
      {
        id: 3,
        title: "Design UI/UX",
        description: "Conception graphique et amélioration de l'expérience utilisateur.",
        salaire: 7000
      },
      {
        id: 4,
        title: "Gestion de Projet",
        description: "Suivi et coordination des équipes techniques.",
        salaire: 9000
      },
      {
        id: 5,
        title: "Analyste Fonctionnel",
        description: "Analyse des besoins clients et rédaction des spécifications.",
        salaire: 7500
      },
      {
        id: 6,
        title: "Administrateur Système",
        description: "Gestion et maintenance des serveurs.",
        salaire: 8000
      },
      {
        id: 7,
        title: "Développeur Mobile",
        description: "Création d'applications pour Android et iOS.",
        salaire: 8500
      },
      {
        id: 8,
        title: "Chef d'Équipe",
        description: "Encadrement des développeurs et gestion des tâches.",
        salaire: 9500
      },
      {
        id: 9,
        title: "Testeur QA",
        description: "Validation et tests des fonctionnalités développées.",
        salaire: 7000
      },
      {
        id: 10,
        title: "Rédacteur Technique",
        description: "Création de documentation technique pour les produits.",
        salaire: 6000
      },
      {
        id: 11,
        title: "Architecte Logiciel",
        description: "Conception de l'architecture des applications.",
        salaire: 10000
      },
      {
        id: 12,
        title: "Spécialiste Cybersécurité",
        description: "Protection des systèmes contre les attaques.",
        salaire: 11000
      },
      {
        id: 13,
        title: "Consultant IT",
        description: "Proposition de solutions techniques aux clients.",
        salaire: 9000
      },
      {
        id: 14,
        title: "Responsable Marketing",
        description: "Création et mise en œuvre des campagnes marketing numériques.",
        salaire: 8000
      },
      {
        id: 15,
        title: "Data Analyst",
        description: "Analyse et interprétation des données pour les rapports.",
        salaire: 8500
      },
      {
        id: 16,
        title: "Développeur Fullstack",
        description: "Travail sur les parties frontend et backend.",
        salaire: 9000
      },
      {
        id: 17,
        title: "Spécialiste SEO",
        description: "Optimisation des sites pour les moteurs de recherche.",
        salaire: 7500
      },
      {
        id: 18,
        title: "Ingénieur DevOps",
        description: "Automatisation et optimisation des pipelines de développement.",
        salaire: 9500
      },
      {
        id: 19,
        title: "Support Technique",
        description: "Assistance aux utilisateurs et résolution des problèmes techniques.",
        salaire: 7000
      },
      {
        id: 20,
        title: "Formateur IT",
        description: "Formation des équipes sur les nouvelles technologies.",
        salaire: 7500
      }
    ]
    
  )

  const [taches, setTaches] = useState([
    { id: 1, nom: "Meriem", prenom: "Feyd", email: "feydmeriem@gmail.com", tele: "0684648611", nom_tache: "Développement Frontend" },
    { id: 2, nom: "Mariam", prenom: "Elfakiri", email: "elfakirimeriem@gmail.com", tele: "0784688691", nom_tache: "Développement Backend" },
  ]);
  const [tache, setTache] = useState({
    id:"",
    nom: "",
    prenom: "",
    email: "",
    tele: "",
    nom_tache: "",
  });

 

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/data", {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*://localhost:*/*'
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log("Fetched data:", result); // Debugging
        setTasks(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
    
        
// console.log(tasks)

  return (
    <>
    {/* <Table/> */}
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Search" element={<Search  taches1 = {taches1} setTaches1/>} />
        <Route path="/Editer" element={<Editer taches = {taches} setTaches={setTaches} tache = {tache} setTache={setTache}  />} />
        <Route path="/Taches" element={<Taches taches1 = {taches1} setTaches1 = {setTaches1} tache = {tache} setTache={setTache}/>} />
        <Route path="/Form" element={<Form taches = {taches} setTaches={setTaches} tache = {tache} setTache={setTache} />} />
        <Route path="/Table" element={<Table taches = {taches} setTaches={setTaches} tache = {tache} setTache={setTache}   />} />
      </Routes>

      {/* <Table tasks={tasks} /> */}
    </>
  );
}

export default App;

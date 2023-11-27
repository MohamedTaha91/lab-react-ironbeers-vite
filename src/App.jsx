import "./App.css";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AddBeerPage from "./pages/AddBeerPage"
import AllBeersPage from "./pages/AllBeersPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import Navbar from "./components/Navbar";
import { Route, Routes, Link } from 'react-router-dom'


/*
Route /, which renders the HomePage component
Route /beers, which renders the AllBeersPage component.
Route /random-beer, which renders the RandomBeerPage component.
Route /new-beer, which renders the AddBeerPage component.
Route /beers/:beerId, which renders the BeerDetailsPage component. 
*/

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React IronBeers</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

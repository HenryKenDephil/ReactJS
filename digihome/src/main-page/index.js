
// import hook using useEffect, useState
import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";

function App() {
  // load data using a hook

  const [allHouses, setAllHouses] = useState([]);
  useEffect( () => {
    const fetchHouses = async () => {
      const rsp = await fetchHouses("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  // memoization or caching use memo

  const featuredHouse = useMemo(() => {
    if (allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    } 
  }, [allHouses]);
  

 

  return (
   <Router>
      <div className="container"> 
        <Header subtitle=" Providing the most affordable housing in the region" /> 
        <HouseFilter allHouses={allHouses} /> 
        <Switch>
            <Route path ="/searchresults/:country">
              <SearchResults results allHouses={allHouses} /> 
            </Route>

            <Router path ="/house/:id">
              <HouseFromQuery allHouses={allHouses} /> 
            </Router>

            <Route path ="/">
              <FeaturedHouse house={ featuredHouse }>FeaturedHouse</FeaturedHouse>
            </Route>
        </Switch>
      </div>
   </Router>
  );
}

export default App;

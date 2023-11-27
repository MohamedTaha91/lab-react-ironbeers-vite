import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const AllBeersPage = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                setBeers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching beers:", error);
            });
    }, []);

    return (
        <div>
            <h2>All Beers</h2>
            <ul>
                {beers.map((beer) => (
                    <li key={beer._id}>
                        <Link to={`/beers/${beer._id}`}>
                            <img src={beer.image_url} alt={beer.name} />
                            <h3>{beer.name}</h3>
                            </Link>
                            <p>{beer.tagline}</p>
                            <p>{beer.description}</p>
                            <p>Contributed by: {beer.contributed_by}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default AllBeersPage;

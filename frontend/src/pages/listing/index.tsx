import Pagination from "components/pagination";
import MovieCard from "components/MovieCard";
import { BASE_URL } from "utils/requests";

import './style.css';
import axios from "axios";

function Listing(){

    //Errado:
    axios.get(`${BASE_URL}/movies?size=12&page=0`).then(response => {
        console.log(response.data);
    });

    return(
        <>
        <Pagination />
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <MovieCard />
            </div>    
            <div className="col-md-6">
                <MovieCard />
            </div>    
            <div className="col-md-6">
                <MovieCard />
            </div>    
            <div className="col-md-6">
                <MovieCard />
            </div>    
        </div>
        </div>
        </>
    );
}

export default Listing;
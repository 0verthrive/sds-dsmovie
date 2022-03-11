import Pagination from "components/pagination";
import MovieCard from "components/MovieCard";

import './style.css';

function Listing(){
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
import Pagination from "components/pagination";
import MovieCard from "components/MovieCard";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

import { useEffect, useState } from "react";
import './style.css';
import axios from "axios";

function Listing(){
    //Mantem o estado no componente
    const [pageNumber, setPageNumber] = useState(0);
    //Executar algo na instanciação ou destruição do componente, observar estado
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`).then(response => {
            const data = response.data as MoviePage;
            setPageNumber(data.number);
        });
    }, [])
    
    return(
        <>
        <p>{pageNumber}</p>
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
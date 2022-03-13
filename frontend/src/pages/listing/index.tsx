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
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    })

    //Executar algo na instanciação ou destruição do componente, observar estado
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`).then(response => {
            const data = response.data as MoviePage;
            setPage(data)
       });
    }, [pageNumber])
  
    const handlePageNumber = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return(
        <>
        <p>{pageNumber}</p>
        <Pagination page={page} onChange={handlePageNumber}/>
        <div className="container">
        <div className="row">

            {page.content.map(movie => (
                <div key={movie.id} className="col-md-6">
                <MovieCard movie={movie}/>
            </div>
            ))}

                
        </div>
        </div>
        </>
    );
}

export default Listing;
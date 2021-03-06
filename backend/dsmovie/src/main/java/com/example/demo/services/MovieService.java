package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.MovieDTO;
import com.example.demo.entities.Movie;
import com.example.demo.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository MR;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pgb){
		
		Page<Movie> result = MR.findAll(pgb);
		
		Page<MovieDTO> pg = result.map(x -> new MovieDTO(x));
			
		return pg;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id){
		
		Movie result = MR.findById(id).get();
		
		MovieDTO dto = new MovieDTO(result);
			
		return dto;
	}
	
}

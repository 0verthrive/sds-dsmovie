package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.MovieDTO;
import com.example.demo.dto.ScoreDTO;
import com.example.demo.entities.Movie;
import com.example.demo.entities.Score;
import com.example.demo.entities.User;
import com.example.demo.repositories.MovieRepository;
import com.example.demo.repositories.ScoreRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository MR;
	
	@Autowired
	private UserRepository UsR;
	
	@Autowired
	private ScoreRepository ScR;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = UsR.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = UsR.saveAndFlush(user);
		}
		
		Movie movie = MR.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = ScR.saveAndFlush(score);
		
		double sum = 0.0;
		for(Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = MR.save(movie);
		
		return new MovieDTO(movie);
	}
}

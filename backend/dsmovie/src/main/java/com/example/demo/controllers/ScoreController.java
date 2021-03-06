package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.MovieDTO;
import com.example.demo.dto.ScoreDTO;
import com.example.demo.services.ScoreService;

@RestController
@RequestMapping(value ="/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService SS;
	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO dto){
		
		MovieDTO mdto = SS.saveScore(dto);
		
		return mdto;
	}
}

package com.devwolves.NewsAPI.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.devwolves.NewsAPI.dto.News;
import com.devwolves.NewsAPI.service.NewsService;


@RestController
@CrossOrigin(origins="*")
@RequestMapping("/newsAPI")
public class NewslAPI {
	@Autowired
	private NewsService newsService;
	@Autowired
	private Environment environment;
	@GetMapping("/getnews")
	public ResponseEntity<List<News>> getGoals(){
		try {
			return new ResponseEntity<List<News>>(newsService.findAll(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, environment.getProperty(e.getMessage()));
		}
	}
	
		
	@PostMapping("/addNews")
	public ResponseEntity<String> addNews(@RequestBody News news){
		try {
			return new ResponseEntity<String>(newsService.save(news), HttpStatus.CREATED);
		} catch (Exception e) {

			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}
	
}

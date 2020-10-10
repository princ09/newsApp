package com.devwolves.NewsAPI.service;

import java.util.List;

import com.devwolves.NewsAPI.dto.News;


public interface NewsService {
	public List<News> findAll() throws Exception;
	public String save(News News) throws Exception;
	
}

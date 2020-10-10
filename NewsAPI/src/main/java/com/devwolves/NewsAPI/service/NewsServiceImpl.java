package com.devwolves.NewsAPI.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devwolves.NewsAPI.dto.News;
import com.devwolves.NewsAPI.entity.NewsEntity;
import com.devwolves.NewsAPI.repository.NewsRepository;

@Service
public class NewsServiceImpl implements NewsService {
	@Autowired
	private NewsRepository newsRepository;

	@Override
	public List<News> findAll() throws Exception {
		List<NewsEntity> newsEntities = newsRepository.findAll();
		List<News> news = newsEntities.stream().map(newsEntity->{
			return newsEntity.getNewsDTO();
		}).collect(Collectors.toList());
		if(news.isEmpty())
			throw new Exception("NewsService.NO_NEWS_ADDED");
		return news;
	}

	@Override
	public String save(News news) throws Exception {
		if(newsRepository.save(news.getNewsEntity())!=null)
			return "News Added Sucessfully";
		else
			throw new Exception("NewsService.UNKNOWN_ERROR");
	}

}

package com.devwolves.NewsAPI.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devwolves.NewsAPI.entity.NewsEntity;


public interface NewsRepository extends JpaRepository<NewsEntity , String> {
	public List<NewsEntity> findAll();
	public NewsEntity save(NewsEntity newsEntity);
}

package com.devwolves.NewsAPI.entity;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.devwolves.NewsAPI.dto.News;

@Entity
@Table(name = "news")
public class NewsEntity {
	
	@Id
	private Integer sourceid;
	private String sourcename;
	private String author;
	private String title;
	private String description;
	private String url;
	private String urlToImage;
	private String publishedAt;
	private String content;
	public NewsEntity() {
		
	}
	public NewsEntity(Integer sourceid, String sourcename, String author, String title, String description, String url,
			String urlToImage, String publishedAt, String content) {
		super();
		this.sourceid = sourceid;
		this.sourcename = sourcename;
		this.author = author;
		this.title = title;
		this.description = description;
		this.url = url;
		this.urlToImage = urlToImage;
		this.publishedAt = publishedAt;
		this.content = content;
	}
	public Integer getSourceid() {
		return sourceid;
	}
	public void setSourceid(Integer sourceid) {
		this.sourceid = sourceid;
	}
	public String getSourcename() {
		return sourcename;
	}
	public void setSourcename(String sourcename) {
		this.sourcename = sourcename;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUrlToImage() {
		return urlToImage;
	}
	public void setUrlToImage(String urlToImage) {
		this.urlToImage = urlToImage;
	}
	public String getPublishedAt() {
		return publishedAt;
	}
	public void setPublishedAt(String publishedAt) {
		this.publishedAt = publishedAt;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public News getNewsDTO() {
		News news = new News( sourceid,  sourcename,  author,  title,  description,  url,
				 urlToImage,  publishedAt,  content);
		return news;
	}
}

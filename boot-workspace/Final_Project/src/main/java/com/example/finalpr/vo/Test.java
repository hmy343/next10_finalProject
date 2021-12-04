package com.example.finalpr.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Test {

	@JsonProperty
	private String id;
	
	@JsonProperty
	private String title;
	
	@JsonProperty
	private String content;
	
	@JsonProperty
	private int articleno;
}
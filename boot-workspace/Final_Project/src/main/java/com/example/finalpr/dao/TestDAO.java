package com.example.finalpr.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.finalpr.vo.Test;

@Mapper
public interface TestDAO {

	public List<Test> testData();
	

}
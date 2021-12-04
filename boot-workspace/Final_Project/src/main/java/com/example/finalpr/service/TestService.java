package com.example.finalpr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalpr.dao.TestDAO;
import com.example.finalpr.vo.Test;

@Service	
public class TestService {
	
	@Autowired
	TestDAO testDAO;
	
	public List<Test> testData() {
		return testDAO.testData();
	}
}
package com.example.finalpr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ResponseBody;

import com.example.finalpr.service.TestService;
import com.example.finalpr.vo.Test;

@Controller
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class TestController {

	public static void main(String[] args) {
	}
	
	@Autowired
	TestService testService;
	
	@GetMapping("/test")
//	@ResponseBody
	public Test test( ) { 
		return testService.testData();
	}
	
}

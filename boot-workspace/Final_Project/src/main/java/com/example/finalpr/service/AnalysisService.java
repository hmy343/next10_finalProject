package com.example.finalpr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalpr.dao.AnalysisDao;
import com.example.finalpr.vo.Analysis;

@Service
public class AnalysisService {

	@Autowired
	AnalysisDao analysisDao;
	
	
	public List<Analysis> indexPro() {
		return analysisDao.indexPro();
	}


	public List<Analysis> midIndex() {
		return analysisDao.midInsex();
	}


	public List<Analysis> allIndex() {
		return analysisDao.allIndex();
	}

}

package com.example.finalpr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalpr.dao.SearchDao;
import com.example.finalpr.vo.Search;

@Service
public class SearchService {
	
	@Autowired
	SearchDao searchDao;

	public List<Search> subCnt() {
		return searchDao.subCnt();
	}

	public List<Search> tdVstr() {
		return searchDao.tdVstr();
	}

	public List<Search> ageTd() {
		return searchDao.ageTd();
	}

}

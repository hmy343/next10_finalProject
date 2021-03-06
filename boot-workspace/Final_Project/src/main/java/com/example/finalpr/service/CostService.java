package com.example.finalpr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalpr.dao.CostDao;
import com.example.finalpr.vo.Cost;

@Service
public class CostService {

	@Autowired
	CostDao costDao;

	public List<Cost> expnBiz() {
		return costDao.expnBiz();
	}

	public List<Cost> vstrExpn() {
		return costDao.vstrExpn();
	}
}

package com.example.finalpr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalpr.dao.HomeDao;
import com.example.finalpr.vo.Home;

@Service
public class HomeService {

	@Autowired
	HomeDao homeDao;
	public Home vstrMax() {
		return homeDao.vstrMax();
	}
	public Home expnTotal() {
		return homeDao.expnTotal();
	}
	public List<Home> srRank() {
		return homeDao.srRank();
	}
	public List<Home> dsRank() {
		return homeDao.dsRank();
	}
	public List<Home> expnRank() {
		return homeDao.expnRank();
	}

}

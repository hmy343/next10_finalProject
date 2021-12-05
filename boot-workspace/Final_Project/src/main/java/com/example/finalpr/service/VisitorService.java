package com.example.finalpr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalpr.dao.VisitorDao;
import com.example.finalpr.vo.Visitor;


@Service
public class VisitorService {
	
	@Autowired
	VisitorDao visitorDao;

	public List<Visitor> ctpvVstr() {
		return visitorDao.ctpvVstr();
	}

	public List<Visitor> ctsgVstr() {
		return visitorDao.ctsgVstr();
	}

	public List<Visitor> sgtdVstr() {
		return visitorDao.sgtdVstr();
	}

	public List<Visitor> vsFest() {
		return visitorDao.vsFest();
	}
	
	

}

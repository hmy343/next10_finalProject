package com.example.finalpr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalpr.dao.KeywDao;
import com.example.finalpr.vo.Keyword;

@Service
public class KeywService {

	@Autowired
	KeywDao keywDao;
	public List<Keyword> dsSrch() {
		return keywDao.dsSrch();
	}
	public List<Keyword> cnpExpd() {
		return keywDao.cnpExpd();
	}

}

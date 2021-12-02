package com.example.finalpr.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.finalpr.vo.Test;

@Mapper
@Repository
public interface TestDAO {

	Test testData() throws DataAccessException;
	

}

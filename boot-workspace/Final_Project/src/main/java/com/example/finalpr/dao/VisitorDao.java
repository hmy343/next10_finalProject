package com.example.finalpr.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.finalpr.vo.Visitor;

@Mapper
@Repository
public interface VisitorDao {

	List<Visitor> ctpvVstr();

	List<Visitor> ctsgVstr();

	List<Visitor> sgtdVstr();

	List<Visitor> vsFest();

	
}

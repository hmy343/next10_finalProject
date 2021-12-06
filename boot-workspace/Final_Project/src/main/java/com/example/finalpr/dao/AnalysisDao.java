package com.example.finalpr.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.finalpr.vo.Analysis;

@Mapper
@Repository
public interface AnalysisDao {

	List<Analysis> indexPro();

	List<Analysis> midInsex();

	List<Analysis> allIndex();

}

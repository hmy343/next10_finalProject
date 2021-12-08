package com.example.finalpr.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.finalpr.vo.Search;

@Mapper
@Repository
public interface SearchDao {

	List<Search> subCnt();

	List<Search> tdVstr();

	List<Search> ageTd();

	List<Search> mainCnt();

	List<Search> latLot();

}

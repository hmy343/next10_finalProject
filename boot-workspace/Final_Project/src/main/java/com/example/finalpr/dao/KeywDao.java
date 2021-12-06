package com.example.finalpr.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.finalpr.vo.Keyword;

@Mapper
@Repository
public interface KeywDao {

	List<Keyword> dsSrch();

	List<Keyword> cnpExpd();

}

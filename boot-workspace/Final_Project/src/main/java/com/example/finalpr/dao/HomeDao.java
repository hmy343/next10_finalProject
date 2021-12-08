package com.example.finalpr.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.finalpr.vo.Home;

@Mapper
@Repository
public interface HomeDao {

	Home vstrMax();

	Home expnTotal();

	List<Home> srRank();

	List<Home> dsRank();

	List<Home> expnRank();

}

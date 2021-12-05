package com.example.finalpr.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalpr.service.SearchService;
import com.example.finalpr.vo.Search;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class SearchController {
	
	@Autowired
	SearchService searchService;
	
	@GetMapping("/search")
	public String search() {
		
		JSONObject json = new JSONObject();
		
		
		// 관광지 검색 순위 분포 (버블 다이어그램)
		JSONArray sub_cnt = new JSONArray();
		List<Search> searchList = (List<Search>)searchService.subCnt();
		System.out.println(searchList);
		for (Search s:searchList) {
			JSONObject o = new JSONObject();
			o.put("main_type", s.getKey_word());
			o.put("sub_type", s.getSr_sub_type());
			o.put("search_cnt", s.getSub_cnt());
			sub_cnt.add(o);
		}
		
		json.put("sub_cnt", sub_cnt);

		
		// 주요 관광지 총 방문자수(막대)
		JSONArray td_vstr = new JSONArray();
		searchList = (List<Search>)searchService.tdVstr();
		for (Search s:searchList) {
			JSONObject o = new JSONObject();
			o.put("tour_ds_nm", s.getTour_ds_nm());
			o.put("vstr_total", s.getVstr_total());
			td_vstr.add(o);
		}
		
		json.put("td_vstr", td_vstr);
		
		
		
		// 연령대별 주요 관광지 방문자수
		JSONArray age_td_vstr = new JSONArray();
		searchList = (List<Search>)searchService.ageTd();
		for (Search s:searchList) {
			JSONObject o = new JSONObject();
			o.put("age", s.getAge()+"대");
			o.put("tour_ds_nm", s.getTour_ds_nm());
			o.put("vstr_total", s.getVstr_total());
			age_td_vstr.add(o);
		}
		
		json.put("age_td_vstr", age_td_vstr);
		
		
		return json.toJSONString();
	}

}

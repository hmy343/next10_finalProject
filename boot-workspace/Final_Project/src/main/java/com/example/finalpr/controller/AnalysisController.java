package com.example.finalpr.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalpr.service.AnalysisService;
import com.example.finalpr.vo.Analysis;



@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class AnalysisController {
	
	@Autowired
	AnalysisService analysisService;
	
	@GetMapping("/analysis")
	public String analysis() {
		
		JSONObject json = new JSONObject();
		
		
		/* 부산시 전체 지수분포 */
		JSONArray index_pro = new JSONArray();
		List<Analysis> anayList = (List<Analysis>)analysisService.indexPro();
		for (Analysis a:anayList) {
			JSONObject o = new JSONObject();
			o.put("sub_index", a.getSub_index());
			o.put("index_kpi", a.getIndex_kpi());
			index_pro.add(o);
		}
		
		json.put("index_pro", index_pro);
		
		
		/* 중분류별 */
		JSONObject mid_index = new JSONObject();
		JSONArray tour_rsc = new JSONArray();
		JSONArray tour_infra = new JSONArray();
		JSONArray tour_effect = new JSONArray();
		
		anayList = (List<Analysis>)analysisService.midIndex();
		for (Analysis a:anayList) {
			JSONObject rsc = new JSONObject();
			rsc.put("sgg_nm", a.getSgg_nm());
			rsc.put("val", a.getTour_rsc());
			tour_rsc.add(rsc);
			
			JSONObject infra = new JSONObject();
			infra.put("sgg_nm", a.getSgg_nm());
			infra.put("val", a.getTour_infra());
			tour_infra.add(infra);
			
			JSONObject effect = new JSONObject();
			effect.put("sgg_nm", a.getSgg_nm());
			effect.put("val", a.getTour_effect());
			tour_effect.add(effect);
		}
		mid_index.put("tour_resc", tour_rsc);
		mid_index.put("tour_infra", tour_infra);
		mid_index.put("tour_effect", tour_effect);
		
		json.put("mid_index", mid_index);
		
		
		/* 지수 테이블 */
		JSONArray all_index = new JSONArray();
		anayList = (List<Analysis>)analysisService.allIndex();
		for(Analysis a:anayList) {
			JSONObject o = new JSONObject();
			o.put("sgg_nm", a.getSgg_nm());
			o.put("his_rsc", a.getHis_rsc());
			o.put("facility", a.getFacility());
			o.put("festival", a.getFestival());
			o.put("residence", a.getResidence());
			o.put("safety", a.getSafety());
			o.put("visitors", a.getVisitors());
			o.put("industry", a.getIndustry());
			all_index.add(o);
		}
		
		json.put("all_index", all_index);
		
		System.out.println(json);
		
		return json.toJSONString();
	}

}

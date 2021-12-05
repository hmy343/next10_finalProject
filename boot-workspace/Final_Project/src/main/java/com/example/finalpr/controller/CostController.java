package com.example.finalpr.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalpr.service.CostService;
import com.example.finalpr.vo.Cost;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class CostController {
	
	@Autowired
	CostService costService;
	
	@GetMapping("/cost")
	public String cost() {
		
		JSONObject json = new JSONObject();    // 전체 데이터 담을 객체
		
		
		// 용도별 분포 (업종별 소비금액 비율 비교 - 파이)
		JSONArray expn_biz = new JSONArray();
		List<Cost> costList = (List<Cost>)costService.expnBiz();
		for (Cost c:costList) {
			JSONObject o = new JSONObject();
			o.put("expn_biz_nm", c.getExpn_biz_nm());
			o.put("expn_total", c.getExpn_total());
			expn_biz.add(o);
		}
		json.put("expn_biz", expn_biz);
		
		
		
		// 구별 방문자수 + 구별 사용금액 (막대)
		JSONArray sgg_vstr_expn = new JSONArray();
		costList = (List<Cost>)costService.vstrExpn();
		for (Cost c:costList) {
			JSONObject o = new JSONObject();
			o.put("sgg_nm", c.getSgg_nm());
			o.put("vstr_total", c.getVstr_total());
			o.put("expn_total", c.getExpn_total());
			sgg_vstr_expn.add(o);
		}
		json.put("sgg_vstr_expn", sgg_vstr_expn);
		
		return json.toJSONString();
	}

}

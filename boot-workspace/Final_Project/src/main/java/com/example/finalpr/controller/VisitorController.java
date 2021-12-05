package com.example.finalpr.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalpr.service.VisitorService;
import com.example.finalpr.vo.Visitor;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
// 그냥 Controller하면 안됨
// React에서 html을 뿌리는 것이아니라 render해주기때문인듯???
@RestController
public class VisitorController {

	@Autowired
	VisitorService visitorService;
	
	@GetMapping("/visitor")
	public String visitor() {
	
		JSONObject json = new JSONObject();   // 전체 데이터 담을 객체

		
		// 유입경로별 관광객수
		JSONArray ctpv_str = new JSONArray();      // 배열 타입으로 담을 객체
		List<Visitor> vstrList = (List<Visitor>)visitorService.ctpvVstr();
		for (Visitor v:vstrList) {
			JSONObject o = new JSONObject();
			o.put("ctpv_nm", v.getCtpv_nm());
			o.put("vstr_total", v.getVstr_total());
			ctpv_str.add(o);
			//System.out.println(o);
		}
		json.put("ctpv_vstr", ctpv_str);
		
		
		
		
		// 생키차트(유입도시-행정구)
		JSONArray sankey_data = new JSONArray();
		vstrList = (List<Visitor>)visitorService.ctsgVstr();
		for (Visitor v:vstrList) {
			JSONObject o = new JSONObject();
			o.put("ctpv_nm", v.getCtpv_nm());
			o.put("sgg_nm", v.getSgg_nm());
			o.put("vstr_total", v.getVstr_total());
			sankey_data.add(o);
		}
		
		
		// 생키차트(행정구-관광지)
		vstrList = (List<Visitor>)visitorService.sgtdVstr();
		for (Visitor v:vstrList) {
			JSONObject o = new JSONObject();
			o.put("sgg_nm", v.getSgg_nm());
			o.put("tour_ds_nm", v.getTour_ds_nm());
			o.put("vstr_total", v.getVstr_total());
			sankey_data.add(o);
		}
		json.put("sankey_data", sankey_data);
		
		
		// 지도(api 사용 시 넣을 것)
		
		
		// 월별 방문자수 + 축제건수 (월 기준)
		JSONArray vs_fest_mon = new JSONArray();
		vstrList = (List<Visitor>)visitorService.vsFest();
		for (Visitor v:vstrList) {
			JSONObject o = new JSONObject();
			o.put("month", v.getMon()+"월");
			o.put("vstr_total", v.getVstr_total());
			o.put("fest_cnt", v.getFest_cnt());
			vs_fest_mon.add(o);
		}
		json.put("vs_fest_mon", vs_fest_mon);
		
		//System.out.println(ctpv_str);
		
		
		
		return json.toJSONString();
	}
}

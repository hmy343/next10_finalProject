package com.example.finalpr.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalpr.service.KeywService;
import com.example.finalpr.vo.Keyword;


@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class KeywController {

	@Autowired
	KeywService keywService;
	
	@GetMapping("/keyword")
	public String keyword() {
		
		JSONObject json = new JSONObject();
		
		
		/* 키워드 분포 */
		JSONArray ds_srch = new JSONArray();
		List<Keyword> keywList = (List<Keyword>)keywService.dsSrch();
		for(Keyword k:keywList) {
			JSONObject o = new JSONObject();
			o.put("key_word", k.getKey_word());
			o.put("rate", k.getRate());
			ds_srch.add(o);
		}
		json.put("ds_srch", ds_srch);
		
		
		/* 부산시 전체 사업체 분포, 사용금액 */
		JSONArray cnp_expd = new JSONArray();
		keywList = (List<Keyword>)keywService.cnpExpd();
		for(Keyword k:keywList) {
			JSONObject o = new JSONObject();
			o.put("enp_major", k.getMain_type());
			o.put("enp", k.getEnp());
			o.put("expd_total", k.getExpd_total());
			cnp_expd.add(o);
		}
		
		json.put("cnp_expd", cnp_expd);
		System.out.println(json);
		
		
		return json.toJSONString();
	}
}

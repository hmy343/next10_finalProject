package com.example.finalpr.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalpr.service.HomeService;
import com.example.finalpr.vo.Home;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class HomeController {

	@Autowired
	HomeService homeService;
	
	@GetMapping("/")
	public String main() {
		
		JSONObject json = new JSONObject();
		
		
		/* 방문객수 */
		JSONObject vstr_max_min = new JSONObject();
		Home home = (Home)homeService.vstrMax();
		vstr_max_min.put("max_sgg", home.getMax_sgg());
		vstr_max_min.put("max_vstr", home.getMax_vstr());
		vstr_max_min.put("min_sgg", home.getMin_sgg());
		vstr_max_min.put("min_vstr", home.getMin_vstr());
		vstr_max_min.put("avg_vstr", home.getAvg_vstr());
		
		json.put("vstr_max_min", vstr_max_min);
		
		
		
		/* 사용금액 */
		home = (Home)homeService.expnTotal();
		json.put("expn_total", home.getExpn_total());
		
		JSONArray expn_rank = new JSONArray();
		List<Home> homeList = (List<Home>)homeService.expnRank();
		for (Home h:homeList) {
			JSONObject o = new JSONObject();
			o.put("sgg_nm", h.getSgg_nm());
			o.put("ratio", h.getRatio());
			expn_rank.add(o);
		}
		json.put("expn_rank", expn_rank);
		
		
		/* 관광지검색 3위 */
		JSONArray sr_rank = new JSONArray();
		homeList = (List<Home>)homeService.srRank();
		for (Home h:homeList) {
			JSONObject o = new JSONObject();
			o.put("rank_id", h.getRank_id());
			o.put("tour_ds_nm", h.getTour_ds_nm());
			sr_rank.add(o);
		}
		json.put("sr_rank", sr_rank);
		
		
		/* 검색키워드 3위 */
		JSONArray ds_rank = new JSONArray();
		homeList = (List<Home>)homeService.dsRank();		
		for(Home h:homeList) {
			JSONObject o = new JSONObject();
			o.put("key_word", h.getKey_word());
			o.put("rank", h.getRownum());
			ds_rank.add(o);
		}
		json.put("ds_rank", ds_rank);
		
		//System.out.println(json);
		

		return json.toJSONString();
	}
}

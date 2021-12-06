package com.example.finalpr.vo;

public class Analysis {
	
	/* sub_index : 소분류 카테고리 이름
	 * sgg_nm : 행정구
	 * index_kpi : 관광지수 값
	 * tour_rsc : 중분류 - 관광자원분포
	 * tour_infra : ㅈ중분류 - 관광인프라
	 * tour_ effect : 중분류 - 지역관광효과
	 * his_rsc : 역사문화자원
	 * facility : 관광시설
	 * festival : 관광축제
	 * residence : 숙박
	 * safety : 안전
	 * visitors : 관광객 수
	 * industry : 관광산업
	 * */
	
	private String sub_index, sgg_nm;
	private float index_kpi, tour_rsc, tour_infra, tour_effect,
	his_rsc, facility, festival, residence, safety, visitors, industry;
	public Analysis() {
		super();
	}
	
	public Analysis(String sub_index, String sgg_nm, float index_kpi, float tour_rsc, float tour_infra,
			float tour_effect, float his_rsc, float facility, float festival, float residence, float safety,
			float visitors, float industry) {
		super();
		this.setSub_index(sub_index);
		this.setSgg_nm(sgg_nm);
		this.setIndex_kpi(index_kpi);
		this.setTour_rsc(tour_rsc);
		this.setTour_infra(tour_infra);
		this.setTour_effect(tour_effect);
		this.setHis_rsc(his_rsc);
		this.setFacility(facility);
		this.setFestival(festival);
		this.setResidence(residence);
		this.setSafety(safety);
		this.setVisitors(visitors);
		this.setIndustry(industry);
	}
	
	
	public float getTour_rsc() {
		return tour_rsc;
	}

	public void setTour_rsc(float tour_rsc) {
		this.tour_rsc = tour_rsc;
	}

	public String getSub_index() {
		return sub_index;
	}
	public void setSub_index(String sub_index) {
		this.sub_index = sub_index;
	}
	public String getSgg_nm() {
		return sgg_nm;
	}
	public void setSgg_nm(String sgg_nm) {
		this.sgg_nm = sgg_nm;
	}
	public float getIndex_kpi() {
		return index_kpi;
	}
	public void setIndex_kpi(float index_kpi) {
		this.index_kpi = index_kpi;
	}
	public float getTour_infra() {
		return tour_infra;
	}
	public void setTour_infra(float tour_infra) {
		this.tour_infra = tour_infra;
	}
	public float getTour_effect() {
		return tour_effect;
	}
	public void setTour_effect(float tour_effect) {
		this.tour_effect = tour_effect;
	}
	public float getHis_rsc() {
		return his_rsc;
	}
	public void setHis_rsc(float his_rsc) {
		this.his_rsc = his_rsc;
	}
	public float getFacility() {
		return facility;
	}
	public void setFacility(float facility) {
		this.facility = facility;
	}
	public float getFestival() {
		return festival;
	}
	public void setFestival(float festival) {
		this.festival = festival;
	}
	public float getResidence() {
		return residence;
	}
	public void setResidence(float residence) {
		this.residence = residence;
	}
	public float getSafety() {
		return safety;
	}
	public void setSafety(float safety) {
		this.safety = safety;
	}
	public float getVisitors() {
		return visitors;
	}
	public void setVisitors(float visitors) {
		this.visitors = visitors;
	}
	public float getIndustry() {
		return industry;
	}
	public void setIndustry(float industry) {
		this.industry = industry;
	}
	
	@Override
	public String toString() {
		return "Analysis [sub_index=" + sub_index + ", sgg_nm=" + sgg_nm + ", index_kpi=" + index_kpi + ", tour_rsc="
				+ tour_rsc + ", tour_infra=" + tour_infra + ", tour_effect=" + tour_effect + ", his_rsc=" + his_rsc
				+ ", facility=" + facility + ", festival=" + festival + ", residence=" + residence + ", safety="
				+ safety + ", visitors=" + visitors + ", industry=" + industry + "]";
	}

	

}

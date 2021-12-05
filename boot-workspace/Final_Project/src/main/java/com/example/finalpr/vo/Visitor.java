package com.example.finalpr.vo;

public class Visitor {
	/* ctpv_nm : 도시명(유입도시)
	 * sgg_nm : 행정구
	 * tour_ds_nm : 관광지명(26개)
	 * vstr_total : 방문자수
	 * fest_cnt : 축제건수
	 * mon : 월
	 * */
	
	private String ctpv_nm, sgg_nm, tour_ds_nm;
	private int vstr_total, fest_cnt, mon;
	
	public Visitor() {
		super();
	}
	
	public Visitor(String ctpv_nm, String sgg_nm, String tour_ds_nm, int vstr_total, int fest_cnt, int mon) {
		super();
		this.setCtpv_nm(ctpv_nm);
		this.setFest_cnt(fest_cnt);
		this.setMon(mon);
		this.setSgg_nm(sgg_nm);
		this.setTour_ds_nm(tour_ds_nm);
		this.setVstr_total(vstr_total);
	}

	public String getCtpv_nm() {
		return ctpv_nm;
	}

	public void setCtpv_nm(String ctpv_nm) {
		this.ctpv_nm = ctpv_nm;
	}

	public String getSgg_nm() {
		return sgg_nm;
	}

	public void setSgg_nm(String sgg_nm) {
		this.sgg_nm = sgg_nm;
	}

	public String getTour_ds_nm() {
		return tour_ds_nm;
	}

	public void setTour_ds_nm(String tour_ds_nm) {
		this.tour_ds_nm = tour_ds_nm;
	}

	public int getVstr_total() {
		return vstr_total;
	}

	public void setVstr_total(int vstr_total) {
		this.vstr_total = vstr_total;
	}

	public int getFest_cnt() {
		return fest_cnt;
	}

	public void setFest_cnt(int fest_cnt) {
		this.fest_cnt = fest_cnt;
	}

	public int getMon() {
		return mon;
	}

	public void setMon(int mon) {
		this.mon = mon;
	}



	@Override
	public String toString() {
		return "Visitor [ctpv_nm=" + ctpv_nm + ", sgg_nm=" + sgg_nm + ", tour_ds_nm=" + tour_ds_nm + ", vstr_total="
				+ vstr_total + ", fest_cnt=" + fest_cnt + ", mon=" + mon + "]";
	}
	
	
	
}

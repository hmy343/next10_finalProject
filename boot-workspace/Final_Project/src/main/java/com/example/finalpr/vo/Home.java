package com.example.finalpr.vo;

public class Home {
	/* max_sgg(max 행정구), min_sgg(min 행정구)
	 * tour_ds_nm(관광지명), main_type(), key_word
	 * max_vstr, min_vstr, expn_total, rank_id, ser_vol
	 * */
	private String max_sgg, min_sgg, tour_ds_nm, key_word, sgg_nm;
	private int max_vstr, min_vstr, expn_total, rank_id, rownum, avg_vstr, ratio;
	public Home() {
		super();
	}
	public Home(String max_sgg, String min_sgg, String tour_ds_nm, String key_word, int max_vstr, int min_vstr,
			int expn_total, int rank_id, int rownum, int avg_vstr, int ratio, String sgg_nm) {
		super();
		this.setExpn_total(expn_total);
		this.setKey_word(key_word);
		this.setMax_sgg(max_sgg);
		this.setMax_vstr(max_vstr);
		this.setMin_sgg(min_sgg);
		this.setMin_vstr(min_vstr);
		this.setRank_id(rank_id);
		this.setRownum(rownum);
		this.setTour_ds_nm(tour_ds_nm);
		this.setAvg_vstr(avg_vstr);
		this.setRatio(ratio);
		this.setSgg_nm(sgg_nm);
	}
	
	
	public String getSgg_nm() {
		return sgg_nm;
	}
	public void setSgg_nm(String sgg_nm) {
		this.sgg_nm = sgg_nm;
	}
	public int getRatio() {
		return ratio;
	}
	public void setRatio(int ratio) {
		this.ratio = ratio;
	}
	public String getMax_sgg() {
		return max_sgg;
	}
	public void setMax_sgg(String max_sgg) {
		this.max_sgg = max_sgg;
	}
	public String getMin_sgg() {
		return min_sgg;
	}
	public void setMin_sgg(String min_sgg) {
		this.min_sgg = min_sgg;
	}
	public String getTour_ds_nm() {
		return tour_ds_nm;
	}
	public void setTour_ds_nm(String tour_ds_nm) {
		this.tour_ds_nm = tour_ds_nm;
	}
	public String getKey_word() {
		return key_word;
	}
	public void setKey_word(String key_word) {
		this.key_word = key_word;
	}
	public int getMax_vstr() {
		return max_vstr;
	}
	public void setMax_vstr(int max_vstr) {
		this.max_vstr = max_vstr;
	}
	public int getMin_vstr() {
		return min_vstr;
	}
	public void setMin_vstr(int min_vstr) {
		this.min_vstr = min_vstr;
	}
	public int getExpn_total() {
		return expn_total;
	}
	public void setExpn_total(int expn_total) {
		this.expn_total = expn_total;
	}
	public int getRank_id() {
		return rank_id;
	}
	public void setRank_id(int rank_id) {
		this.rank_id = rank_id;
	}
	public int getRownum() {
		return rownum;
	}
	public void setRownum(int rownum) {
		this.rownum = rownum;
	}
	
	
	public int getAvg_vstr() {
		return avg_vstr;
	}
	public void setAvg_vstr(int avg_vstr) {
		this.avg_vstr = avg_vstr;
	}
	@Override
	public String toString() {
		return "Home [max_sgg=" + max_sgg + ", min_sgg=" + min_sgg + ", tour_ds_nm=" + tour_ds_nm + ", key_word="
				+ key_word + ", max_vstr=" + max_vstr + ", min_vstr=" + min_vstr + ", expn_total=" + expn_total
				+ ", rank_id=" + rank_id + ", rownum=" + rownum + "avg_vstr="+ avg_vstr + "ratio" + ratio + "sgg_nm" + sgg_nm + "]";
	}
	

	
	
	
	
}

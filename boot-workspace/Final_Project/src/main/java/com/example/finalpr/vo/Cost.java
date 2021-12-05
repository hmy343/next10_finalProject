package com.example.finalpr.vo;

public class Cost {
	/* expn_biz_nm : 소비업종
	 * sgg_nm : 행정구
	 * expn_total : 소비금액(억원)
	 * vstr_total : 방문자수(만명)
	 * vstr_expn : 1인 소비금액
	 * */
	
	private String expn_biz_nm, sgg_nm;
	private long expn_total, vstr_total, vstr_expn;
	
	
	public Cost() {
		super();
	}

	public Cost(String expn_biz_nm, String sgg_nm, int expn_total, int vstr_total, int vstr_expn) {
		super();
		this.setExpn_biz_nm(expn_biz_nm);
		this.setSgg_nm(getSgg_nm());
		this.setExpn_total(expn_total);
		this.setVstr_total(vstr_total);
		this.setVstr_expn(vstr_expn);
	}

	public String getExpn_biz_nm() {
		return expn_biz_nm;
	}

	public void setExpn_biz_nm(String expn_biz_nm) {
		this.expn_biz_nm = expn_biz_nm;
	}

	public String getSgg_nm() {
		return sgg_nm;
	}

	public void setSgg_nm(String sgg_nm) {
		this.sgg_nm = sgg_nm;
	}

	public long getExpn_total() {
		return expn_total;
	}

	public void setExpn_total(long expn_total) {
		this.expn_total = expn_total;
	}

	public long getVstr_total() {
		return vstr_total;
	}

	public void setVstr_total(long vstr_total) {
		this.vstr_total = vstr_total;
	}

	public long getVstr_expn() {
		return vstr_expn;
	}

	public void setVstr_expn(long vstr_expn) {
		this.vstr_expn = vstr_expn;
	}

	@Override
	public String toString() {
		return "Cost [expn_biz_nm=" + expn_biz_nm + ", sgg_nm=" + sgg_nm + ", expn_total=" + expn_total
				+ ", vstr_total=" + vstr_total + ", vstr_expn=" + vstr_expn + "]";
	}
	
	
	
	
}

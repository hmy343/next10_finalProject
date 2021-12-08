package com.example.finalpr.vo;

public class Search {
	/* key_word : 검색키워드/대분류
	 * sr_sub_type : 검색키워드 중분류
	 * tour_ds_nm : 관광지명
	 * sub_cnt : 중분류 갯수
	 * main_cnt : 대분류 갯수
	 * vstr_total : 관광객수
	 * age : 연령대
	 * */
	private String key_word, sr_sub_type, tour_ds_nm;
	private int sub_cnt, vstr_total, age, main_cnt;
	
	
	public Search() {
		super();
	}


	public Search(String key_word, String sr_sub_type, String tour_ds_nm, int sub_cnt, int vstr_total, int age, int main_cnt) {
		super();
		this.setKey_word(key_word);
		this.setSr_sub_type(sr_sub_type);
		this.setTour_ds_nm(tour_ds_nm);
		this.setSub_cnt(sub_cnt);
		this.setVstr_total(vstr_total);
		this.setAge(age);
		this.setMain_cnt(main_cnt);
		
	}
	
	


	public int getMain_cnt() {
		return main_cnt;
	}


	public void setMain_cnt(int main_cnt) {
		this.main_cnt = main_cnt;
	}


	public String getKey_word() {
		return key_word;
	}


	public void setKey_word(String key_word) {
		this.key_word = key_word;
	}


	public String getSr_sub_type() {
		return sr_sub_type;
	}


	public void setSr_sub_type(String sr_sub_type) {
		this.sr_sub_type = sr_sub_type;
	}


	public String getTour_ds_nm() {
		return tour_ds_nm;
	}


	public void setTour_ds_nm(String tour_ds_nm) {
		this.tour_ds_nm = tour_ds_nm;
	}


	public int getSub_cnt() {
		return sub_cnt;
	}


	public void setSub_cnt(int sub_cnt) {
		this.sub_cnt = sub_cnt;
	}


	public int getVstr_total() {
		return vstr_total;
	}


	public void setVstr_total(int vstr_total) {
		this.vstr_total = vstr_total;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	@Override
	public String toString() {
		return "Search [key_word=" + key_word + ", sr_sub_type=" + sr_sub_type + ", tour_ds_nm=" + tour_ds_nm
				+ ", sub_cnt=" + sub_cnt + ", vstr_total=" + vstr_total + ", age=" + age + ", main_cnt=" + main_cnt +"]";
	}

	
}

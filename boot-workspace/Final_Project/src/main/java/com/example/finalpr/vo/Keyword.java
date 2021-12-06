package com.example.finalpr.vo;

public class Keyword {

	private String main_type, key_word;
	private float rate;
	private int enp;
	private long expd_total;
	
	public Keyword() {
		super();
	}

	public Keyword(String main_type, String key_word, float rate, int enp, long expd_total) {
		super();
		this.main_type = main_type;
		this.key_word = key_word;
		this.rate = rate;
		this.enp = enp;
		this.expd_total = expd_total;
	}

	public String getMain_type() {
		return main_type;
	}

	public void setMain_type(String main_type) {
		this.main_type = main_type;
	}

	public String getKey_word() {
		return key_word;
	}

	public void setKey_word(String key_word) {
		this.key_word = key_word;
	}

	public float getRate() {
		return rate;
	}

	public void setRate(float rate) {
		this.rate = rate;
	}

	public int getEnp() {
		return enp;
	}

	public void setEnp(int enp) {
		this.enp = enp;
	}

	public long getExpd_total() {
		return expd_total;
	}

	public void setExpd_total(long expd_total) {
		this.expd_total = expd_total;
	}

	@Override
	public String toString() {
		return "Keyword [main_type=" + main_type + ", key_word=" + key_word + ", rate=" + rate + ", enp=" + enp
				+ ", expd_total=" + expd_total + "]";
	}
	
	
	
	
}

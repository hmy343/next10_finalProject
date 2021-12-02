package com.example.finalpr.vo;

public class Test {

	private int level, articleNO;

	public Test() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public int getArticleNO() {
		return articleNO;
	}

	public void setArticleNO(int articleNO) {
		this.articleNO = articleNO;
	}

	@Override
	public String toString() {
		return "Test [level=" + level + ", articleNO=" + articleNO + "]";
	}
}

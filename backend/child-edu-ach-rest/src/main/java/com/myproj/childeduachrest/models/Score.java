package com.myproj.childeduachrest.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ChildId")
    private Child child;

    @ManyToOne
    @JoinColumn(name = "SubjectId")
    private Subject subject;

    private int scoreA1;
    private int scoreB1;
    private int scoreC1;
    private int scoreD1;
    private int scoreA2;
    private int scoreB2;
    private int scoreC2;
    private int scoreD2;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Child getChild() {
		return child;
	}
	public void setChild(Child child) {
		this.child = child;
	}
	public Subject getSubject() {
		return subject;
	}
	public void setSubject(Subject subject) {
		this.subject = subject;
	}
	public int getScoreA1() {
		return scoreA1;
	}
	public void setScoreA1(int scoreA1) {
		this.scoreA1 = scoreA1;
	}
	public int getScoreB1() {
		return scoreB1;
	}
	public void setScoreB1(int scoreB1) {
		this.scoreB1 = scoreB1;
	}
	public int getScoreC1() {
		return scoreC1;
	}
	public void setScoreC1(int scoreC1) {
		this.scoreC1 = scoreC1;
	}
	public int getScoreD1() {
		return scoreD1;
	}
	public void setScoreD1(int scoreD1) {
		this.scoreD1 = scoreD1;
	}
	public int getScoreA2() {
		return scoreA2;
	}
	public void setScoreA2(int scoreA2) {
		this.scoreA2 = scoreA2;
	}
	public int getScoreB2() {
		return scoreB2;
	}
	public void setScoreB2(int scoreB2) {
		this.scoreB2 = scoreB2;
	}
	public int getScoreC2() {
		return scoreC2;
	}
	public void setScoreC2(int scoreC2) {
		this.scoreC2 = scoreC2;
	}
	public int getScoreD2() {
		return scoreD2;
	}
	public void setScoreD2(int scoreD2) {
		this.scoreD2 = scoreD2;
	}

    
}

package com.myproj.childeduachrest.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "UserId")
    private User user;

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public boolean isTeacherType() {
		return teacherType;
	}

	public void setTeacherType(boolean teacherType) {
		this.teacherType = teacherType;
	}

	public List<Group> getGroups() {
		return groups;
	}

	public void setGroups(List<Group> groups) {
		this.groups = groups;
	}

	private boolean teacherType;

    @ManyToMany
    @JoinTable(name = "TeacherGroupAssignment",
               joinColumns = @JoinColumn(name = "TeacherId"),
               inverseJoinColumns = @JoinColumn(name = "GroupId"))
    private List<Group> groups;

}


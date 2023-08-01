package com.myproj.childeduachrest.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String userType;
    private String userEmail;
    private String userPasswordHash;
    private String userPasswordSalt;
    private boolean isRegistered;
    

    public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getUserType() {
		return userType;
	}


	public void setUserType(String userType) {
		this.userType = userType;
	}


	public String getUserEmail() {
		return userEmail;
	}


	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}


	public String getUserPasswordHash() {
		return userPasswordHash;
	}


	public void setUserPasswordHash(String userPasswordHash) {
		this.userPasswordHash = userPasswordHash;
	}


	public String getUserPasswordSalt() {
		return userPasswordSalt;
	}


	public void setUserPasswordSalt(String userPasswordSalt) {
		this.userPasswordSalt = userPasswordSalt;
	}


	public boolean isRegistered() {
		return isRegistered;
	}


	public void setRegistered(boolean isRegistered) {
		this.isRegistered = isRegistered;
	}


	public RegistrationGuid getRegistrationguid() {
		return registrationguid;
	}


	public void setRegistrationguid(RegistrationGuid registrationguid) {
		this.registrationguid = registrationguid;
	}


	@OneToOne
    @JoinColumn(name = "RegistrationGuidId")
    private RegistrationGuid registrationguid;

}

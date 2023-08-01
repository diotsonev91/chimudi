package com.myproj.childeduachrest.models;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RegistrationGuid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long GuidId;
    private String GUIDValue;
    private boolean IsUsed;
	public Long getGuidId() {
		return GuidId;
	}
	public void setGuidId(Long guidId) {
		GuidId = guidId;
	}
	public String getGUIDValue() {
		return GUIDValue;
	}
	public void setGUIDValue(String gUIDValue) {
		GUIDValue = gUIDValue;
	}
	public boolean isIsUsed() {
		return IsUsed;
	}
	public void setIsUsed(boolean isUsed) {
		IsUsed = isUsed;
	}
    
}

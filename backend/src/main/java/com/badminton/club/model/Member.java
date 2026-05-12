package com.badminton.club.model;

import java.time.LocalDate;

import jakarta.json.bind.annotation.JsonbDateFormat;

public class Member {
    private String id;
    private String firstName;
    private String lastName;
    private int age; // Capture age[cite: 6]
    private String email;
    private String sex;
    private int experienceYears;
    @JsonbDateFormat("yyyy-MM-dd")
    private LocalDate registerDate; // Register date[cite: 6]
    @JsonbDateFormat("yyyy-MM-dd")
    private LocalDate expirationDate; // Expiration date[cite: 6]
    private String notes;
    private String password;

    public Member() {}

    // Standard Getters and Setters[cite: 6]
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getFirstName() {return firstName;	}
	public void setFirstName(String firstName) {this.firstName = firstName;	}
	public String getLastName() {return lastName;}
	public void setLastName(String lastName) {this.lastName = lastName;	}

	public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getSex() { return sex; }
    public void setSex(String sex) { this.sex = sex; }
    public int getExperienceYears() { return experienceYears; }
    public void setExperienceYears(int experienceYears) { this.experienceYears = experienceYears; }
    public LocalDate getRegisterDate() { return registerDate; }
    public void setRegisterDate(LocalDate registerDate) { this.registerDate = registerDate; }
    public LocalDate getExpirationDate() { return expirationDate; }
    public void setExpirationDate(LocalDate expirationDate) { this.expirationDate = expirationDate; }
    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
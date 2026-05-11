package com.badminton.club.model;

import java.time.LocalDate;

public class Member {
    private String id;
    private String name;
    private int age; // Capture age[cite: 6]
    private String email;
    private String sex;
    private int experienceYears;
    private LocalDate registerDate; // Register date[cite: 6]
    private LocalDate expirationDate; // Expiration date[cite: 6]
    private String notes;
    private String password;

    public Member() {}

    // Standard Getters and Setters[cite: 6]
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
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
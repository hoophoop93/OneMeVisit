package com.kmichali.onemivisit.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="visits")
public class Visit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="visit_date")
    private Date visitDate;

    @Column(name="visit_hour")
    private String visitHour;

    @Column(name="registration_date")
    private Date registrationDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="doctor_id", nullable = false)
    private Doctor doctor;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getVisitDate() {
        return visitDate;
    }

    public void setVisitDate(Date visitDate) {
        this.visitDate = visitDate;
    }

    public String getVisitHour() {
        return visitHour;
    }

    public void setVisitHour(String visitHour) {
        this.visitHour = visitHour;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }

    @Override
    public String toString() {
        return "Visit{" +
                "id=" + id +
                ", visitDate=" + visitDate +
                ", visitHour='" + visitHour + '\'' +
                ", registrationDate=" + registrationDate +
                '}';
    }
}

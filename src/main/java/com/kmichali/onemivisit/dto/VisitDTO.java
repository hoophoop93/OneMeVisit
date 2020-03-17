package com.kmichali.onemivisit.dto;

import java.util.Date;

public class VisitDTO {

    private long id;

    private Date visitDate;

    private String visitHour;

    private Date registrationDate;

    private DoctorDTO doctorDTO;

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

    public DoctorDTO getDoctorDTO() {
        return doctorDTO;
    }

    public void setDoctorDTO(DoctorDTO doctorDTO) {
        this.doctorDTO = doctorDTO;
    }
}

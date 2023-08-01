package com.jalenhairstonInsight.springboottestexampletests.entity;

import java.util.Objects;

public class EmployeeRequest {
    private final String name;
    private final String email;
    private final Integer monthsEmployed;

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Integer getMonthsEmployed() {
        return monthsEmployed;
    }

    public EmployeeRequest(String name, String email, Integer monthsEmployed) {
        this.name = name;
        this.email = email;
        this.monthsEmployed = monthsEmployed;

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmployeeRequest that = (EmployeeRequest) o;
        return Objects.equals(name, that.name) && Objects.equals(email, that.email) && Objects.equals(monthsEmployed, that.monthsEmployed);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, email, monthsEmployed);
    }

    @Override
    public String toString() {
        return "NewEmployeeRequest{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", monthsEmployed=" + monthsEmployed +
                '}';
    }
}

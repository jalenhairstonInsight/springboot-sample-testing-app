package com.jalenhairstonInsight.springboottestexampletests.employee;

import jakarta.persistence.*;
import java.util.Objects;


@Entity
public class Employee {
    @Id
    @SequenceGenerator(
            name = "employee_id_sequence",
            sequenceName = "employee_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_id_sequence"
    )
    private Integer id;
    private String name;
    private String email;
    private Integer monthsEmployed;

    public Employee() {
    }

    public Employee(Integer id, String name, String email, Integer monthsEmployed) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.monthsEmployed = monthsEmployed;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Integer getMonthsEmployed() {
        return monthsEmployed;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMonthsEmployed(Integer monthsEmployed) {
        this.monthsEmployed = monthsEmployed;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(id, employee.id) && Objects.equals(name, employee.name) && Objects.equals(email, employee.email) && Objects.equals(monthsEmployed, employee.monthsEmployed);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", monthsEmployed=" + monthsEmployed +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, email, monthsEmployed);
    }
}

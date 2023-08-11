package com.jalenhairstonInsight.springboottestexampletests.utils;

import com.jalenhairstonInsight.springboottestexampletests.entity.Employee;
import com.jalenhairstonInsight.springboottestexampletests.entity.EmployeeRequest;
import com.jalenhairstonInsight.springboottestexampletests.entity.Request;

public class EmployeeRequestData {

    private class IncorrectEmployeeRequest extends Request {
        private int name;
        private int email;
        private String monthsEmployed;

        public IncorrectEmployeeRequest(int name, int email, String monthsEmployed) {
            this.name = name;
            this.email = email;
            this.monthsEmployed = monthsEmployed;
        }

        public int getName() {
            return name;
        }

        public int getEmail() {
            return email;
        }

        public String getMonthsEmployed() {
            return monthsEmployed;
        }
    }

    private final EmployeeRequest[] CREATE_EMPLOYEE_REQUESTS = {
            new EmployeeRequest("Jalen", "jalen.hairston@test.com", 6),
            new EmployeeRequest("Jacob", "jacob.morris@test.com", 12),
            new EmployeeRequest("Elijah", "elijah.ayers@test.com", 3),
            new EmployeeRequest("Khalil", "khalil.keyton@test.com", 4),
    };
    private final IncorrectEmployeeRequest[] CREATE_INCORRECT_EMPLOYEE_REQUESTS = {
            new IncorrectEmployeeRequest(2, 2, "incorrect")
    };
    private final EmployeeRequest[] UPDATE_EMPLOYEE_REQUESTS = {
            new EmployeeRequest("Kyle", "kyle.benton@test.com", 17),
            new EmployeeRequest("Aaron", "aaron.hyatt@test.com", 2),
            new EmployeeRequest("Nathan", "nathan.pope@test.com", 15),
            new EmployeeRequest("Jonah", "jonah.haber@test.com", 5),
    };

    private EmployeeRequest lastCreateRequest;
    private EmployeeRequest lastUpdateRequest;


    public EmployeeRequest getCreateEmployeeRequest(int index) {
        EmployeeRequest request = CREATE_EMPLOYEE_REQUESTS[index];
        lastCreateRequest = request;
        return request;
    }

    public Request getIncorrectEmployeeRequest(int index) {
        Request request = CREATE_INCORRECT_EMPLOYEE_REQUESTS[index];
        return request;
    }


    public Request getUpdateEmployeeRequest(int index) {
        EmployeeRequest request = UPDATE_EMPLOYEE_REQUESTS[index];
        lastUpdateRequest = request;
        return request;
    }

    public EmployeeRequest getLastCreateRequest() {
        return lastCreateRequest;
    }

    public EmployeeRequest getLastUpdateRequest() {
        return lastUpdateRequest;
    }
    public EmployeeRequestData() {
    }
}

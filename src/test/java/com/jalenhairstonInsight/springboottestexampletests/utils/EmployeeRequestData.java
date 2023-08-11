package com.jalenhairstonInsight.springboottestexampletests.utils;

import com.jalenhairstonInsight.springboottestexampletests.entity.EmployeeRequest;

public class EmployeeRequestData {
    private final EmployeeRequest[] createEmployeeRequests = {
            new EmployeeRequest("Jalen", "jalen.hairston@test.com", 6),
            new EmployeeRequest("Jacob", "jacob.morris@test.com", 12),
            new EmployeeRequest("Elijah", "elijah.ayers@test.com", 3),
            new EmployeeRequest("Khalil", "khalil.keyton@test.com", 4),
    };
    private final EmployeeRequest[] updateEmployeeRequests = {
            new EmployeeRequest("Kyle", "kyle.benton@test.com", 17),
            new EmployeeRequest("Aaron", "aaron.hyatt@test.com", 2),
            new EmployeeRequest("Nathan", "nathan.pope@test.com", 15),
            new EmployeeRequest("Jonah", "jonah.haber@test.com", 5),
    };

    private EmployeeRequest lastCreateRequest;
    private EmployeeRequest lastUpdateRequest;


    public EmployeeRequest getCreateEmployeeRequest(int index) {
        EmployeeRequest request = createEmployeeRequests[index];
        lastCreateRequest = request;
        return request;
    }

    public EmployeeRequest getUpdateEmployeeRequest(int index) {
        EmployeeRequest request = updateEmployeeRequests[index];
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

package com.jalenhairstonInsight.springboottestexampletests.utils;

import com.jalenhairstonInsight.springboottestexampletests.entity.Employee;
import com.jalenhairstonInsight.springboottestexampletests.entity.EmployeeRequest;
import org.springframework.http.ResponseEntity;

public class RestTemplateUtils {

    public static EmployeeRequest[] wrapRequest(EmployeeRequest request) {
        return new EmployeeRequest[] {request};
    }

    public static Employee getLastEntry(ResponseEntity<Employee[]> result) {
        Employee[] resultBody = result.getBody();
        Employee lastEntry = resultBody[resultBody.length - 1];
        return lastEntry;
    }

    public static Employee getSecondToLastEntry(ResponseEntity<Employee[]> result) {
        Employee[] resultBody = result.getBody();
        Employee secondToLastEntry = resultBody[resultBody.length - 2];
        return secondToLastEntry;
    }
}

package com.jalenhairstonInsight.springboottestexampletests.utils;

import com.jalenhairstonInsight.springboottestexampletests.entity.Employee;
import com.jalenhairstonInsight.springboottestexampletests.entity.EmployeeRequest;
import com.jalenhairstonInsight.springboottestexampletests.entity.Request;
import org.springframework.http.ResponseEntity;

public class RestTemplateUtils {

    public static Request[] wrapRequest(Request request) {
        return new Request[] {request};
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

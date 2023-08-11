package com.jalenhairstonInsight.springboottestexampletests.utils;

import com.jalenhairstonInsight.springboottestexampletests.entity.Employee;
import org.junit.Assert;

public class EmployeeUtils {
    public static void assertEquals(Employee expected, Employee actual) {
        Assert.assertEquals(expected.getName(), actual.getName());
        Assert.assertEquals(expected.getEmail(), actual.getEmail());
        Assert.assertEquals(expected.getMonthsEmployed(), actual.getMonthsEmployed());
    }
}

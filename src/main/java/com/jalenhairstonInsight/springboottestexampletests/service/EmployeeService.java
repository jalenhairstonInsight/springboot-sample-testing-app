package com.jalenhairstonInsight.springboottestexampletests.service;

import com.jalenhairstonInsight.springboottestexampletests.entity.Employee;
import com.jalenhairstonInsight.springboottestexampletests.entity.EmployeeRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> findAll() { return employeeRepository.findAll(Sort.by("id")); }

    public Employee findById(Integer ID) { return employeeRepository.findById(ID).get(); }

    public Employee save(Employee employee) { return employeeRepository.save(employee); }

    public Employee deleteById(Integer ID) {
        Employee employee = findById(ID);
        employeeRepository.deleteById(employee.getId());

        return employee;
    }

    public void deleteAll() {
        employeeRepository.deleteAll();
    }
}

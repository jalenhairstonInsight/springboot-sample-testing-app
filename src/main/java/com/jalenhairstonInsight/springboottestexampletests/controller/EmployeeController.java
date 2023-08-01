package com.jalenhairstonInsight.springboottestexampletests.controller;

import com.jalenhairstonInsight.springboottestexampletests.entity.Employee;
import com.jalenhairstonInsight.springboottestexampletests.entity.EmployeeRepository;
import com.jalenhairstonInsight.springboottestexampletests.entity.EmployeeRequest;
import com.jalenhairstonInsight.springboottestexampletests.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/employees")
public class EmployeeController {

    @Autowired
    public EmployeeService employeeService;

    @PostMapping
    public void createEmployees(@RequestBody EmployeeRequest[] requests) {
        for (EmployeeRequest request: requests) {
            Employee employee = new Employee();
            employee.setName(request.getName());
            employee.setEmail(request.getEmail());
            employee.setMonthsEmployed(request.getMonthsEmployed());
            employeeService.save(employee);
        }

    }

    @GetMapping
    public List<Employee> getEmployees() {
        return employeeService.findAll();
    }

    @GetMapping("/{employeeId}")
    public Employee getEmployeeById(@PathVariable("employeeId")Integer ID) { return employeeService.findById(ID); }

    @PutMapping("/{employeeId}")
    public void updateEmployee(@PathVariable("employeeId")Integer ID, @RequestBody EmployeeRequest request) {
        Employee employee = employeeService.findById(ID);;
        employee.setName(request.getName());
        employee.setEmail(request.getEmail());
        employee.setMonthsEmployed(request.getMonthsEmployed());
        employeeService.save(employee);
    }
    @DeleteMapping("/{employeeId}")
    public void deleteEmployee(@PathVariable("employeeId")Integer ID) {
        employeeService.deleteById(ID);
    }
}

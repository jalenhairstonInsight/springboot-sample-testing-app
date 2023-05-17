package com.jalenhairstonInsight.springboottestexample;


import com.jalenhairstonInsight.springboottestexample.employee.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("api/v1/employees")
public class SpringBootTestExampleApplication {

	@GetMapping("/greet")
	public String greet() { return "<p style='color:green'>Hi, nice to meet you!<p>";}
	private final EmployeeRepository employeeRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringBootTestExampleApplication.class, args);
	}

	public SpringBootTestExampleApplication(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	@PostMapping
	public void createEmployee(@RequestBody EmployeeRequest request) {
		Employee employee = new Employee();
		employee.setName(request.getName());
		employee.setEmail(request.getEmail());
		employee.setMonthsEmployed(request.getMonthsEmployed());
		employeeRepository.save(employee);
	}

	@GetMapping
	public List<Employee> getEmployees() {
		return employeeRepository.findAll();
	}

	@PutMapping("/{employeeId}")
	public void updateEmployee(@PathVariable("employeeId")Integer ID, @RequestBody EmployeeRequest request) {
		Employee employee = employeeRepository.findById(ID).get();
		employee.setName(request.getName());
		employee.setEmail(request.getEmail());
		employee.setMonthsEmployed(request.getMonthsEmployed());
		employeeRepository.save(employee);
	}
	@DeleteMapping("/{employeeId}")
	public void deleteEmployee(@PathVariable("employeeId")Integer ID) {
		employeeRepository.deleteById(ID);
	}

}

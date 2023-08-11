package com.jalenhairstonInsight.springboottestexampletests.steps;

import com.jalenhairstonInsight.springboottestexampletests.entity.Employee;
import com.jalenhairstonInsight.springboottestexampletests.entity.EmployeeRequest;
import com.jalenhairstonInsight.springboottestexampletests.utils.APIConnectionInfo;
import com.jalenhairstonInsight.springboottestexampletests.utils.EmployeeRequestData;
import com.jalenhairstonInsight.springboottestexampletests.utils.EmployeeUtils;
import com.jalenhairstonInsight.springboottestexampletests.utils.RestTemplateUtils;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

public class UpdateEmployeeSteps {

//    @Autowired
//    private TestRestTemplate restTemplate;
//    private ResponseEntity<EmployeeRequest> response;
//    private ResponseEntity<Employee[]> result;
//    private ResponseEntity<Void> updateResponse;
//    private EmployeeRequestData employeeRequestData = new EmployeeRequestData();
//    private String url = APIConnectionInfo.getConnectionString();
//
//    @Before
//    public void beforeScenario() {
//        restTemplate.delete(url);
//    }
//
//    @Given("I am an authorized user")
//    public void i_am_an_authorized_user() {
//        // Write code here that turns the phrase above into concrete actions
//    }
//
//    @When("I request to create Employee {int}")
//    public void i_request_to_create_employee(Integer n) {
//        int index = n - 1;
//        EmployeeRequest request = employeeRequestData.getCreateEmployeeRequest(index);
//        EmployeeRequest[] requestArray = RestTemplateUtils.wrapRequest(request);
//        response = restTemplate.exchange(url, HttpMethod.POST, new HttpEntity<EmployeeRequest[]>(requestArray), EmployeeRequest.class);
//    }
//
//    @When("I request to update Employee {int}")
//    public void i_request_to_update_employee(Integer n) {
//        int index = n - 1;
//        EmployeeRequest request = employeeRequestData.getUpdateEmployeeRequest(index);
//        EmployeeRequest[] requestArray = RestTemplateUtils.wrapRequest(request);
//        result = restTemplate.exchange(url, HttpMethod.GET, HttpEntity.EMPTY, Employee[].class);
//        Employee employee = RestTemplateUtils.getLastEntry(result);
//        updateResponse = restTemplate.exchange(url + "/" + employee.getId(), HttpMethod.PUT, new HttpEntity<EmployeeRequest[]>(requestArray), Void.class);
//    }
//
//    @Then("The Employee is updated")
//    public void the_employee_is_updated() {
//        Assert.assertEquals(200, updateResponse.getStatusCode().value());
//    }
//
//    @Then("The fields and values of the last Employee are the same as update Request {int}")
//    public void the_fields_and_values_of_the_last_employee_are_the_same_as_update_request(Integer n) {
//        EmployeeRequest expectedRequest = employeeRequestData.getLastRequest();
//        Employee expected = new Employee(n,
//                expectedRequest.getName(),
//                expectedRequest.getEmail(),
//                expectedRequest.getMonthsEmployed());
//        result = restTemplate.exchange(url, HttpMethod.GET, HttpEntity.EMPTY, Employee[].class);
//        Employee actual = RestTemplateUtils.getLastEntry(result);
//        EmployeeUtils.assertEquals(expected, actual);
//
//    }



}

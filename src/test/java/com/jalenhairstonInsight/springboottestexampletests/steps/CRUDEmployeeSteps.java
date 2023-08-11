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
import io.cucumber.spring.CucumberContextConfiguration;
import org.junit.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;


@CucumberContextConfiguration
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class CRUDEmployeeSteps {

    @Autowired
    private TestRestTemplate restTemplate;
    private ResponseEntity<EmployeeRequest> response;
    private ResponseEntity<Employee[]> result;
    private ResponseEntity<Void> updateResponse;
    private ResponseEntity<Void> deleteResponse;
    private EmployeeRequestData employeeRequestData = new EmployeeRequestData();
    private String url = APIConnectionInfo.getConnectionString();

    @Before
    public void beforeScenario() {
        ResponseEntity<Void> deleteResponse = restTemplate.exchange(url, HttpMethod.DELETE, HttpEntity.EMPTY, Void.class);
        System.out.println(deleteResponse.getStatusCode().value());
    }

    @Given("I am an authorized user")
    public void i_am_an_authorized_user() {
        // Write code here that turns the phrase above into concrete actions
    }

    @When("I request to create Employee {int}")
    public void i_request_to_create_employee(Integer n) {
        int index = n - 1;
        EmployeeRequest request = employeeRequestData.getCreateEmployeeRequest(index);
        EmployeeRequest[] requestArray = RestTemplateUtils.wrapRequest(request);
        response = restTemplate.exchange(url, HttpMethod.POST, new HttpEntity<EmployeeRequest[]>(requestArray), EmployeeRequest.class);
    }

    @Then("The Employee is created")
    public void the_employee_is_created() {
        Assert.assertEquals(200, response.getStatusCode().value());
    }

    @Then("The fields and values of the last Employee are the same as create Request {int}")
    public void the_fields_and_values_of_the_last_employee_are_the_same_as_create_request(Integer n) {
        EmployeeRequest expectedRequest = employeeRequestData.getLastCreateRequest();
        Employee expected = new Employee(n,
                expectedRequest.getName(),
                expectedRequest.getEmail(),
                expectedRequest.getMonthsEmployed());
//        result = restTemplate.getForEntity(url, Employee[].class);
        result = restTemplate.exchange(url, HttpMethod.GET, HttpEntity.EMPTY, Employee[].class);
        Employee actual = RestTemplateUtils.getLastEntry(result);
        EmployeeUtils.assertEquals(expected, actual);
    }


    @Then("The ID of the newest employee is one greater than the previous ID in the database")
    public void the_id_of_the_newest_employee_is_one_greater_than_the_previous_id_in_the_database() {
        Employee actual = RestTemplateUtils.getLastEntry(result);
        Employee previous = RestTemplateUtils.getSecondToLastEntry(result);
        Assert.assertEquals(actual.getId() - previous.getId(), 1);
    }

    @When("I request to update Employee {int}")
    public void i_request_to_update_employee(Integer n) {
        int index = n - 1;
        EmployeeRequest request = employeeRequestData.getUpdateEmployeeRequest(index);
        result = restTemplate.exchange(url, HttpMethod.GET, HttpEntity.EMPTY, Employee[].class);
        try {
            Employee employee = RestTemplateUtils.getLastEntry(result);
            updateResponse = restTemplate.exchange(url + "/" + employee.getId(), HttpMethod.PUT, new HttpEntity<EmployeeRequest>(request), Void.class);
        } catch(Exception e) {
            updateResponse = restTemplate.exchange(url + "/1", HttpMethod.PUT, new HttpEntity<EmployeeRequest>(request), Void.class);
        }

    }

    @Then("The Employee is updated")
    public void the_employee_is_updated() {
        Assert.assertEquals(200, updateResponse.getStatusCode().value());
    }

    @Then("The fields and values of the last Employee are the same as update Request {int}")
    public void the_fields_and_values_of_the_last_employee_are_the_same_as_update_request(Integer n) {
        EmployeeRequest expectedRequest = employeeRequestData.getLastUpdateRequest();
        Employee expected = new Employee(n,
                expectedRequest.getName(),
                expectedRequest.getEmail(),
                expectedRequest.getMonthsEmployed());
        result = restTemplate.exchange(url, HttpMethod.GET, HttpEntity.EMPTY, Employee[].class);
        Employee actual = RestTemplateUtils.getLastEntry(result);
        EmployeeUtils.assertEquals(expected, actual);

    }

    @Then("The Employee is not updated")
    public void the_employee_is_not_updated() {
        Assert.assertEquals(500, updateResponse.getStatusCode().value());
    }

    @When("I request to delete Employee {int}")
    public void i_request_to_delete_employee(Integer n) {
        int index = n - 1;
        result = restTemplate.exchange(url, HttpMethod.GET, HttpEntity.EMPTY, Employee[].class);
        try {
            Employee employee = RestTemplateUtils.getLastEntry(result);
            deleteResponse = restTemplate.exchange(url + "/" + employee.getId(), HttpMethod.DELETE, HttpEntity.EMPTY, Void.class);
        } catch(Exception e) {
            deleteResponse = restTemplate.exchange(url + "/1", HttpMethod.DELETE, HttpEntity.EMPTY, Void.class);
        }
    }

    @Then("The Employee is deleted")
    public void the_employee_is_deleted() {
        Assert.assertEquals(200, deleteResponse.getStatusCode().value());
    }

    @Then("The Employee is not deleted")
    public void the_employee_is_not_deleted() {
        Assert.assertEquals(500, deleteResponse.getStatusCode().value());
    }
}

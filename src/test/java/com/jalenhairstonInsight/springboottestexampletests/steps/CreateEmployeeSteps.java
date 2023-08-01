package com.jalenhairstonInsight.springboottestexampletests.steps;

import com.jalenhairstonInsight.springboottestexampletests.TestRunner;
import com.jalenhairstonInsight.springboottestexampletests.entity.EmployeeRepository;
import com.jalenhairstonInsight.springboottestexampletests.entity.EmployeeRequest;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.spring.CucumberContextConfiguration;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@CucumberContextConfiguration
//@SpringBootTest( = TestRunner.class)
public class CreateEmployeeSteps {


    @Given("I request to create an Employee")
    public void i_request_to_create_an_employee() {
    }

    @When("I retrieve info of the newest created Employee")
    public void i_retrieve_info_of_the_newest_created_employee() {

    }

    @Then("The fields and values of Employee are the same as the one created")
    public void the_fields_and_values_of_employee_are_the_same_as_the_one_created() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("The ID of the newest employee is one greater than the previous ID in the database")
    public void the_id_of_the_newest_employee_is_one_greater_than_the_previous_id_in_the_database() {
        // Write code here that turns the phrase above into concrete actions
//        throw new io.cucumber.java.PendingException();
    }

    @Then("The fields and values of Employee are not the same as the one created")
    public void the_fields_and_values_of_employee_are_not_the_same_as_the_one_created() {
        // Write code here that turns the phrase above into concrete actions
//        throw new io.cucumber.java.PendingException();
    }

    @Then("The fields and values of the Employee are not the same as the one created")
    public void the_fields_and_values_of_the_employee_are_not_the_same_as_the_one_created() {
        // Write code here that turns the phrase above into concrete actions
//        throw new io.cucumber.java.PendingException();
    }

    @Then("The ID of the newest employee is not one greater than the previous ID in the database")
    public void the_id_of_the_newest_employee_is_not_one_greater_than_the_previous_id_in_the_database() {
    }

}

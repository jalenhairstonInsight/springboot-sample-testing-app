package com.jalenhairstonInsight.springboottestexampletests;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
//import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;
//
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/cucumber-report.html"},
        features = "src/test/resources/features",
//        glue = "com.jalenhairstonInsight.springboottestexampletests.steps",
        stepNotifications = true,
//        dryRun = true,
        tags = "@createEmployee"
)

public class TestRunner {
}
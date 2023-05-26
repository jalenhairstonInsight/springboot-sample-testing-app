package com.jalenhairstonInsight.springboottestexample;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
//
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/cucumber-report.html"},
        features = "src/test/resources/features",
        glue = "com.jalenhairstonInsight.springboottestexample.steps",
        stepNotifications = true,
//        dryRun = true,
        tags = "@createEmployee"
)

public class TestRunner {
}
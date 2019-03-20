package Runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\resources\\Features\\amazon.feature", glue = {"Steps"}, format = {"pretty", "html:target/cucumber"}
		)

public class DefaultRunner extends AbstractTestNGCucumberTests{

}

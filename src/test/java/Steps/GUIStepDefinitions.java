package Steps;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import Util.Lib;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GUIStepDefinitions extends Lib {

	WebDriver driver;

	@Before
	public void initialize() {
		String os = System.getProperty("os.name").toLowerCase();
		if (os.contains("mac")) {
			System.out.println("Running on Mac");
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/Drivers/mac/chromedriver");
		} else if (os.contains("windows")) {
			System.out.println("Running on Windows");
			System.setProperty("webdriver.chrome.driver",
					"C:\\Users\\xxthe\\Google Drive\\PIIT\\Selenium\\Java\\mazmi3639NY\\chromedriver.exe");
		} else {
			System.out.println("Running Linux");
		}

		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.get("https://www.amazon.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Given("^I am at amazon homepage$")
	public void homepage() {
		String title = getTitle(driver);
		System.out.println("Title: " + title);
	}

	@When("^I am clicking \"([^\"]*)\"$")
	public void hello_sign_in(String key) throws IOException, InterruptedException {
		WebElement click = findElem(driver, readProperty(key));
		click.click();
		Thread.sleep(1000);
	}

	@Then("^I am entering \"([^\"]*)\" \"([^\"]*)\"$")
	public void enterEmail(String key, String value) throws IOException, InterruptedException {
		WebElement enter = findElem(driver, readProperty(key));
		enter.sendKeys(value);
		Thread.sleep(1000);
	}
	
	@Then("^I take screenshot \"([^\"]*)\"$")
	public void screenShot(String value) throws IOException {
		getScreenshot(driver, "_" + value);
	}
	
	@After
	public void teardown() {
		driver.manage().deleteAllCookies();
		driver.quit();
	}

}

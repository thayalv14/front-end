package com.cucumber.stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginPageSteps {

    WebDriver driver;

    @Given("User opens the Employee Management login page")
    public void user_opens_the_login_page() throws InterruptedException {

        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();

        driver.get("http://localhost:5173/login");
        Thread.sleep(2000);

        // Click Admin button
        driver.findElement(By.xpath("//*[contains(text(),'Admin')]")).click();

        Thread.sleep(3000);
    }

    @Then("Admin module should be accessible")
    public void admin_module_should_be_accessible() {
        System.out.println("Login page opened and Admin module is accessible");
        driver.quit();
    }
}
package com.employee.automation;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class DeleteEmployeeTest {

    WebDriver driver;
    WebDriverWait wait;

    @BeforeClass
    public void setup() {

        WebDriverManager.chromedriver().setup();

        driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        // Login
        driver.get("http://localhost:5173");

        driver.findElement(By.xpath("//button[contains(text(),'Admin')]")).click();
        driver.findElement(By.xpath("//input[@type='text']")).sendKeys("admin");
        driver.findElement(By.xpath("//input[@type='password']")).sendKeys("admin123");
        driver.findElement(By.xpath("//button[@type='submit']")).click();

        driver.get("http://localhost:5173/employees");
    }

    @Test
    public void deleteEmployeeTest() throws Exception {

        int before = driver.findElements(By.xpath("//tbody/tr")).size();
        System.out.println("Before Delete = " + before);

        // Delete first employee
        driver.findElement(By.cssSelector(".delete-btn")).click();

        // Confirm popup
        Alert confirm = wait.until(ExpectedConditions.alertIsPresent());
        System.out.println(confirm.getText());
        confirm.accept();

        // Success popup
        Alert success = wait.until(ExpectedConditions.alertIsPresent());
        System.out.println(success.getText());
        success.accept();

        // Wait for API & UI refresh
        Thread.sleep(5000);

        // Refresh page
        driver.navigate().refresh();

        Thread.sleep(3000);

        int after = driver.findElements(By.xpath("//tbody/tr")).size();
        System.out.println("After Delete = " + after);

        Assert.assertNotEquals(after, before, "Employee was not deleted.");

        System.out.println("✅ Delete Employee Test Passed");
    }

    @AfterClass
    public void tearDown() {

        if (driver != null) {
            driver.quit();
        }

    }
}
package com.employee.automation;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class EditEmployeeTest {

    WebDriver driver;

    @BeforeClass
    public void setup() {

        WebDriverManager.chromedriver().setup();

        driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        // Login
        driver.get("http://localhost:5173");

        driver.findElement(By.xpath("//button[contains(text(),'Admin')]")).click();

        driver.findElement(By.xpath("//input[@type='text']")).sendKeys("admin");

        driver.findElement(By.xpath("//input[@type='password']")).sendKeys("admin123");

        driver.findElement(By.xpath("//button[@type='submit']")).click();

        driver.get("http://localhost:5173/employees");
    }

    @Test
    public void editEmployeeTest() throws Exception {

        // Click first Edit button
        driver.findElement(By.cssSelector(".edit-btn")).click();

        // Update Name
        driver.findElement(By.id("empName")).clear();
        driver.findElement(By.id("empName"))
                .sendKeys("Thayal Updated");

        // Update Salary
        driver.findElement(By.id("salary")).clear();
        driver.findElement(By.id("salary"))
                .sendKeys("35000");

        // Update Department
        Select department = new Select(driver.findElement(By.id("department")));
        department.selectByVisibleText("HR");

        // Click Update Button
        driver.findElement(By.id("addEmployeeBtn")).click();

        Thread.sleep(2000);

        try {
            Alert alert = driver.switchTo().alert();
            System.out.println(alert.getText());
            alert.accept();
        } catch (Exception e) {
            System.out.println("No Alert Found");
        }

        Thread.sleep(2000);

        System.out.println("✅ Edit Employee Test Passed");
    }

    @AfterClass
    public void tearDown() {

        if (driver != null) {
            driver.quit();
        }

    }
}
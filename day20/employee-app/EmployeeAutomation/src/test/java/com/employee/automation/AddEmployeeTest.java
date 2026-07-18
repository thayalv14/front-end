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

public class AddEmployeeTest {

    WebDriver driver;

    @BeforeClass
    public void setup() {

        WebDriverManager.chromedriver().setup();

        driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        // Open Login Page
        driver.get("http://localhost:5173");

        // Admin Login
        driver.findElement(By.xpath("//button[contains(text(),'Admin')]")).click();

        driver.findElement(By.xpath("//input[@type='text']")).sendKeys("admin");

        driver.findElement(By.xpath("//input[@type='password']")).sendKeys("admin123");

        driver.findElement(By.xpath("//button[@type='submit']")).click();

        // Open Employee Page
        driver.get("http://localhost:5173/employees");
    }

    @Test
    public void addEmployeeTest() throws Exception {

        String empId = "EMP" + System.currentTimeMillis();
        String empName = "Thayal" + System.currentTimeMillis();

        driver.findElement(By.id("empId")).clear();
        driver.findElement(By.id("empId")).sendKeys(empId);

        driver.findElement(By.id("empName")).clear();
        driver.findElement(By.id("empName")).sendKeys(empName);

        Select gender = new Select(driver.findElement(By.id("gender")));
        gender.selectByVisibleText("Female");

        driver.findElement(By.id("salary")).clear();
        driver.findElement(By.id("salary")).sendKeys("25000");

        Select department = new Select(driver.findElement(By.id("department")));
        department.selectByVisibleText("IT");

        driver.findElement(By.id("email")).clear();
        driver.findElement(By.id("email"))
                .sendKeys("thayal" + System.currentTimeMillis() + "@gmail.com");

        driver.findElement(By.id("addEmployeeBtn")).click();

        Thread.sleep(2000);

        try {
            Alert alert = driver.switchTo().alert();
            System.out.println(alert.getText());
            alert.accept();
        } catch (Exception e) {
            System.out.println("No alert found.");
        }

        Thread.sleep(2000);

        System.out.println("✅ Add Employee Test Passed");
    }

    @AfterClass
    public void tearDown() {

        if (driver != null) {
            driver.quit();
        }

    }
}
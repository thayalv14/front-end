package com.employee.automation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class ReportsTest {

    WebDriver driver;

    @BeforeMethod
    public void setup() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Test
    public void verifyReportsPageOpen() {
        // Open Reports page directly
        driver.get("http://localhost:5173/reports");

        // Get current URL
        String currentUrl = driver.getCurrentUrl();

        // Verify URL contains reports
        Assert.assertTrue(currentUrl.contains("reports"));

        System.out.println("Reports page opened successfully");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}

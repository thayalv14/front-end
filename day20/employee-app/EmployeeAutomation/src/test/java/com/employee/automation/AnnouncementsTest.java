package com.employee.automation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class AnnouncementsTest {

    WebDriver driver;

    @BeforeMethod
    public void setup() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Test
    public void verifyAnnouncementsPageOpen() {
        // Open Announcements page directly
        driver.get("http://localhost:5173/announcements");

        // Get current URL
        String currentUrl = driver.getCurrentUrl();

        // Verify URL contains announcements
        Assert.assertTrue(currentUrl.contains("announcements"));

        System.out.println("Announcements page opened successfully");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}

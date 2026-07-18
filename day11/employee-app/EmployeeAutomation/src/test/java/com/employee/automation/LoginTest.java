package com.employee.automation;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginTest {

    @Test
    public void adminLoginTest() throws Exception {

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        driver.get("http://localhost:5173");

        driver.findElement(By.xpath("//button[contains(.,'Admin')]")).click();

        driver.findElement(By.xpath("//input[@type='text']")).sendKeys("admin");

        driver.findElement(By.xpath("//input[@type='password']")).sendKeys("admin123");

        driver.findElement(By.xpath("//button[@type='submit']")).click();

        Thread.sleep(5000);

        System.out.println(driver.getCurrentUrl());

        driver.quit();
    }
}
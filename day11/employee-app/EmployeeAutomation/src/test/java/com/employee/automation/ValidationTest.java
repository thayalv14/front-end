package com.employee.automation;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.Assert;
import org.testng.annotations.*;

import java.time.Duration;



public class ValidationTest {


    WebDriver driver;



    @BeforeClass
    public void setup(){


        driver = new ChromeDriver();

        driver.manage()
              .window()
              .maximize();


        driver.manage()
              .timeouts()
              .implicitlyWait(Duration.ofSeconds(10));


        driver.get("http://localhost:5173/employees");

    }




    @Test
    public void employeeValidationTest() throws InterruptedException {


        Thread.sleep(3000);



        // Click Add Employee

        driver.findElement(
            By.xpath("//button[contains(text(),'Add Employee')]")
        )
        .click();



        Thread.sleep(2000);



        // Leave Name empty

        driver.findElement(By.name("empId"))
              .sendKeys("EMP200");



        driver.findElement(By.name("department"))
              .sendKeys("IT");



        driver.findElement(By.name("email"))
              .sendKeys("test@gmail.com");




        // Find submit button dynamically

        driver.findElement(
            By.xpath("//button[@type='submit']")
        )
        .click();



        Thread.sleep(2000);



        String pageText =
            driver.findElement(By.tagName("body"))
            .getText();



        Assert.assertTrue(
            pageText.contains("Name"),
            "Validation message not displayed"
        );


        System.out.println(
            "Validation Test Passed Successfully"
        );


    }





    @AfterClass
    public void tearDown(){

        driver.quit();

    }

}
package com.employee.automation;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.Assert;
import org.testng.annotations.*;

import java.time.Duration;



public class DashboardTest {


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


        driver.get("http://localhost:5173/home");

    }




    @Test
    public void dashboardTest() throws InterruptedException {


        Thread.sleep(3000);



        String url = driver.getCurrentUrl();


        Assert.assertTrue(
                url.contains("/home")
        );




        String pageText =
                driver.findElement(
                        By.tagName("body")
                )
                .getText();



        System.out.println(pageText);




        // Dashboard heading

        Assert.assertTrue(
                pageText.contains("Employee Management System Dashboard"),
                "Dashboard heading missing"
        );





        // Total Employees card

        Assert.assertTrue(
                pageText.contains("Total Employees"),
                "Total Employees card missing"
        );





        // Total Departments card

        Assert.assertTrue(
                pageText.contains("Total Departments"),
                "Total Departments card missing"
        );





        // Active Employees card

        Assert.assertTrue(
                pageText.contains("Active Employees"),
                "Active Employees card missing"
        );





        // Company card

        Assert.assertTrue(
                pageText.contains("Company"),
                "Company card missing"
        );




        System.out.println(
                "Dashboard Test Passed Successfully"
        );


    }





    @AfterClass
    public void tearDown(){


        if(driver!=null){

            driver.quit();

        }

    }


}
package com.employee.automation;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.Assert;
import org.testng.annotations.*;

import java.time.Duration;



public class EmployeeListTest {


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
    public void employeeListTest() throws InterruptedException {


        Thread.sleep(3000);



        // Verify URL

        String url =
                driver.getCurrentUrl();



        Assert.assertTrue(
                url.contains("/employees"),
                "Employee list page not opened"
        );






        // Verify Table


        WebElement table =
                driver.findElement(
                    By.tagName("table")
                );



        Assert.assertTrue(
                table.isDisplayed(),
                "Employee table not displayed"
        );







        // Verify Table Headers


        String tableText =
                table.getText();



        Assert.assertTrue(
                tableText.contains("Employee ID"),
                "Employee ID column missing"
        );



        Assert.assertTrue(
                tableText.contains("Name"),
                "Name column missing"
        );



        Assert.assertTrue(
                tableText.contains("Department"),
                "Department column missing"
        );



        Assert.assertTrue(
                tableText.contains("Email"),
                "Email column missing"
        );







        // Verify Employee Data


        Assert.assertTrue(
                tableText.length() > 50,
                "Employee data not loaded"
        );





        System.out.println(
                "Employee List Test Passed Successfully"
        );


    }







    @AfterClass
    public void tearDown(){


        if(driver != null){

            driver.quit();

        }


    }


}

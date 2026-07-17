package com.employee.automation;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.Assert;
import org.testng.annotations.*;

import java.time.Duration;



public class MyProfileTest {


    WebDriver driver;



    @BeforeClass
    public void setup() {


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
    public void myProfileTest() throws InterruptedException {


        Thread.sleep(3000);



        // Click first employee View Profile button

        WebElement viewProfileButton =
                driver.findElement(
                    By.xpath("(//button[contains(text(),'View Profile')])[1]")
                );


        Assert.assertTrue(
                viewProfileButton.isDisplayed(),
                "View Profile button not displayed"
        );


        viewProfileButton.click();



        Thread.sleep(3000);




        // Verify My Profile URL opened

        String url = driver.getCurrentUrl();


        Assert.assertTrue(
                url.contains("/myprofile"),
                "My Profile page not opened"
        );






        // Verify Employee Name

        WebElement employeeName =
                driver.findElement(
                    By.xpath("//h2[contains(text(),'Thayal Nayaki')]")
                );


        Assert.assertTrue(
                employeeName.isDisplayed(),
                "Employee name not displayed"
        );







        // Verify Employee Details

        String pageContent =
                driver.findElement(
                    By.tagName("body")
                )
                .getText();



        Assert.assertTrue(
                pageContent.contains("EMP101"),
                "Employee ID not found"
        );



        Assert.assertTrue(
                pageContent.contains("Female"),
                "Gender not found"
        );



        Assert.assertTrue(
                pageContent.contains("IT"),
                "Department not found"
        );



        Assert.assertTrue(
                pageContent.contains("45000"),
                "Salary not found"
        );



        Assert.assertTrue(
                pageContent.contains("thayal@gmail.com"),
                "Email not found"
        );



        Assert.assertTrue(
                pageContent.contains("9876543210"),
                "Phone not found"
        );



        System.out.println("My Profile Test Passed Successfully");

    }






    @AfterClass
    public void tearDown() {


        if(driver != null){

            driver.quit();

        }

    }


}
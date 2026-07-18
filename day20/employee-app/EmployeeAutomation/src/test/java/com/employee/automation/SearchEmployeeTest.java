package com.employee.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.Assert;
import org.testng.annotations.*;

import java.time.Duration;


public class SearchEmployeeTest {


    WebDriver driver;


    @BeforeClass
    public void setup(){


        driver = new ChromeDriver();


        driver.manage().window().maximize();


        driver.manage().timeouts()
              .implicitlyWait(Duration.ofSeconds(10));


        driver.get("http://localhost:5173/employees");


    }



    @Test
    public void searchEmployeeTest(){


        WebElement searchBox =
                driver.findElement(
                    By.className("search-input")
                );


        searchBox.sendKeys("a");


        String value =
                searchBox.getAttribute("value");


        Assert.assertEquals(value,"a");


        System.out.println("Search Test Passed");


    }



    @AfterClass
    public void close(){

        driver.quit();

    }

}
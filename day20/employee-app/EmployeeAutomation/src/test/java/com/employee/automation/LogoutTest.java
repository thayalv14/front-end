
package com.employee.automation;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.Assert;
import org.testng.annotations.*;

import java.time.Duration;



public class LogoutTest {


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


        // Open Home page

        driver.get("http://localhost:5173/home");

    }





    @Test
    public void logoutTest() throws InterruptedException {


        Thread.sleep(3000);



        // Verify Home page opened

        String currentUrl =
                driver.getCurrentUrl();



        Assert.assertTrue(
                currentUrl.contains("/home"),
                "Home page not opened"
        );






        // Click Logout button


        WebElement logoutButton =
                driver.findElement(
                    By.xpath("//button[contains(text(),'Logout')]")
                );



        Assert.assertTrue(
                logoutButton.isDisplayed(),
                "Logout button not displayed"
        );



        logoutButton.click();



        Thread.sleep(3000);







        // Verify redirected to Login page


        String afterLogoutUrl =
                driver.getCurrentUrl();



        Assert.assertTrue(
                afterLogoutUrl.endsWith("/"),
                "Logout failed - Login page not opened"
        );






        // Verify Login text


        String pageText =
                driver.findElement(
                    By.tagName("body")
                )
                .getText();



        Assert.assertTrue(
                pageText.contains("Login"),
                "Login page not displayed"
        );




        System.out.println(
                "Logout Test Passed Successfully"
        );


    }





    @AfterClass
    public void tearDown(){


        if(driver!=null){

            driver.quit();

        }


    }


}
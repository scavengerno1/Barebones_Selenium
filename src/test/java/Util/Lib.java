package Util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class Lib {

	public static String getTitle(WebDriver driver) {
		String title = driver.getTitle();
		return title;
	}

	public static WebElement findElem(WebDriver driver, String xpath) {
		WebElement elem = driver.findElement(By.xpath(xpath));
		return elem;
	}

	public static String readProperty(String key) throws IOException {
		File file = new File(
				"C:\\Users\\xxthe\\Google Drive\\PIIT\\Selenium\\Java\\mazmi3639NY\\src\\test\\resources\\ObjectRepository\\locator.properties");
		FileInputStream fis = new FileInputStream(file);
		Properties prop = new Properties();
		prop.load(fis);
		String locator = prop.getProperty(key);
		return locator;
	}

	public static String readExcel(WebDriver driver, int row, int col) throws IOException {
		File file = new File("");
		FileInputStream fis = new FileInputStream(file);
		XSSFWorkbook wk = new XSSFWorkbook(fis);
		XSSFSheet sh = wk.getSheetAt(0);
		XSSFRow rw = sh.getRow(row - 1);
		XSSFCell cell = rw.getCell(col - 1);
		String value = cell.getStringCellValue();
		return value;
	}

	public static void getScreenshot(WebDriver driver, String name) throws IOException {
		File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(src,
				new File("C:\\Users\\xxthe\\Google Drive\\PIIT\\Selenium\\Java\\mazmi3639NY\\error" + name + ".png"));
	}

	public static void switchWindow(WebDriver driver) {
		String win1 = driver.getWindowHandle();
		Set<String> wins = driver.getWindowHandles();
		for (String win2 : wins) {
			if (!win2.equals(win1)) {
				driver.switchTo().window(win2);
			}
		}
	}

	public static void switchFrame(WebDriver driver, int frame) {
		driver.switchTo().frame(frame);
	}

	public static int castToInt(String str) {
		int num = Integer.parseInt(str);
		return num;
	}
	
	public static String castToString(int num) {
		String str = Integer.toString(num);
		return str;
	}
	
	public static void selectByText(WebDriver driver, String xpath, String keys) {
		WebElement elem = findElem(driver, xpath);
		Select sc = new Select(elem);
		sc.selectByVisibleText(keys);
	}
	
	public static void moveMouse(WebDriver driver, String xpath) {
		Actions ac = new Actions(driver);
		WebElement elem = findElem(driver, xpath);
		ac.moveToElement(elem).build().perform();
	}
	
	public static void mouseClick(WebDriver driver, String xpath) {
		Actions ac = new Actions(driver);
		WebElement elem = findElem(driver, xpath);
		ac.moveToElement(elem).click().build().perform();
	}
	
	public static void mouseDoubleClick(WebDriver driver, String xpath) {
		Actions ac = new Actions(driver);
		WebElement elem = findElem(driver, xpath);
		ac.moveToElement(elem).doubleClick().build().perform();
	}

	public static void mouseRightClick(WebDriver driver, String xpath) {
		Actions ac = new Actions(driver);
		WebElement elem = findElem(driver, xpath);
		ac.moveToElement(elem).contextClick().build().perform();
	}
}

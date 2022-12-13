import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("shows result after sending addition request", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".form-header");

    await page.click(".num1");
    await page.type(".num1", "40");

    await page.click(".num2");
    await page.type(".num2", "20");

    await page.click(".operator");
    await page.type(".operator", "+");

    await page.click(".submit-button");

    await page.waitForSelector(".form-success-message");

    const text = await page.$eval(
      ".form-success-message",
      (e) => e.textContent
    );
    expect(text).toContain("60.");
  });
  it("shows result after sending division request", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".form-header");

    await page.click(".num1");
    await page.type(".num1", "40");

    await page.click(".num2");
    await page.type(".num2", "20");

    await page.click(".operator");
    await page.type(".operator", "/");

    await page.click(".submit-button");

    await page.waitForSelector(".form-success-message");

    const text = await page.$eval(
      ".form-success-message",
      (e) => e.textContent
    );
    expect(text).toContain("2");
  });

  afterAll(() => browser.close());
});
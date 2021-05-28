const puppeteer = require("puppeteer");

const createFakeEmail = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--use-fake-ui-for-media-stream"],
    });

    const page = await browser.newPage();

    await page.goto("https://es.emailfake.com/");

    const element = await page.$("#email_ch_text");
    const email = await page.evaluate(
        (element) => element.textContent,
        element
    );

    await browser.close();

    return email;
};

createFakeEmail().then(console.log);

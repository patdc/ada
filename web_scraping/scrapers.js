const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="imgBlkFront"]');
    const src = await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="buyNewSection"]/div/div/span[1]/span');
    const txt2 = await el3.getProperty('textContent');
    const price = await txt2.jsonValue();

    console.log({ imgURL, title, price })

    browser.close();

}

scrapeProduct('https://www.amazon.fr/FEMMES-RACE-CLASSE-ANGELA-DAVIS/dp/B01B98N7YC/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=angela+davis&qid=1591194288&sr=8-1');
scrapeProduct('https://www.amazon.fr/Origines-totalitarisme-suivi-Eichmann-J%C3%A9rusalem/dp/2070758044/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=hannah+arendt&qid=1591195843&sr=8-1');

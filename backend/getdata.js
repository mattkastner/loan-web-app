const puppeteer = require("puppeteer");

module.exports = (req, res, next) => {
    const html = `https://docs.google.com/spreadsheets/d/e/2PACX-1vT2xjQIHvmoFTYA-vcir1VIyG3JrS61LEu4qAIbVycsBxtO4i_GYiGvigEhY7FG5AmlZR67L2qP96Z7/pubhtml`;
    (async() => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(html);

        const result = await page.evaluate(() => {
            const rows = document.querySelectorAll("table tr");
            return Array.from(rows, (row) => {
                const columns = row.querySelectorAll("td");
                return Array.from(columns, (column) => {
                    if (column.innerText != "") {
                        return column.innerText;
                    } else {
                        const img = column.querySelectorAll("img");
                        return Array.from(img, (im) => im.src);
                    }
                });
            });
        });

        var keys = result[1];

        // An array of values
        result.splice(0, 2);
        var values = result;

        // Object created
        var mainobj = [];

        values.forEach((val) => {
            var obj = {};
            for (var i = 0; i < keys.length; i++) {
                obj[keys[i].replace(" ", "")] = val[i];
            }
            mainobj.push(obj);
        });

        res.send(mainobj);
        await browser.close();
    })();
};

// Lo@nApp123A
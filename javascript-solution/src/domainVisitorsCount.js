const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const searchDomains = require("./searchDomains");
const config = require("../config");

const file = path.join("..", "data.csv");
const dataArray = [];

function domainVisitorsCount() {
  fs.createReadStream(file)
    .pipe(csv(config.schema))
    .on("data", (data) => dataArray.push(data))
    .on("end", () => {
      const results = searchDomains(dataArray, config.depth);
      console.table(results);
    });
}

module.exports = domainVisitorsCount;

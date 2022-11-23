const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const searchDomains = require("./searchDomains");
const config = require("../config");

const inputFile = path.join("..", "data.csv");
const outputFile = path.join("..", "output.csv");
const dataArray = [];

function domainVisitorsCount() {
  fs.createReadStream(inputFile)
    .pipe(csv(config.schema))
    .on("data", (data) => dataArray.push(data))
    .on("end", () => {
      const results = searchDomains(dataArray, config.depth);
      const fileWriter = fs.createWriteStream(outputFile);
      results.forEach((result) => {
        const { visitors, domain } = result;

        const line = `${visitors},${domain}\n`;
        fileWriter.write(line);
      });
    });
}

module.exports = domainVisitorsCount;

package src

import (
    "os"
    "log"
    "path/filepath"
    "encoding/csv"
)

func getInputData() [][]string {
    inputFile := filepath.Join("..", "data.csv")

    file, err := os.Open(inputFile)
    if err != nil {
        log.Fatal(err)
    }
    defer file.Close()

    csvReader := csv.NewReader(file)
    data, err := csvReader.ReadAll()
    if err != nil {
        log.Fatal(err)
    }

    return data
}

func saveOutputData(data [][]string) {
    outputFile := filepath.Join("..", "output.csv")

    file, err := os.Create(outputFile)
    if err != nil {
        log.Fatal(err)
    }
    defer file.Close()

    csvWriter := csv.NewWriter(file)
    defer csvWriter.Flush()

    csvWriter.WriteAll(data)
}

func DomainVisitorsCount() {
    var data [][]string = getInputData()
    var results [][]string = searchDomains(data)
    saveOutputData(results)
}

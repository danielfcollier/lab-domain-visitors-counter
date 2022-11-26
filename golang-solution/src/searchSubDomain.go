package src

import (
    "regexp"
    "strings"
    "strconv"
)

func searchSubDomain(subDomain string, data [][]string) []string {
    filteredSlice := [][]string{}

    for _, element := range data {
        var domain string = element[1]

        if len(domain) < len(subDomain) {
            continue
        }

        if domain == subDomain {
            filteredSlice = append(filteredSlice, element)
        }

        s := []string{"\\.", subDomain, "$"}
        pattern, _ := regexp.Compile(strings.Join(s, ""))

        if pattern.MatchString(domain) {
            filteredSlice = append(filteredSlice, element)
        }
    }

    counter := 0
    for _, element := range filteredSlice {
        visitors, _ := strconv.Atoi(element[0])
        counter += visitors
    }
    result := []string{strconv.Itoa(counter), subDomain}

    return result
}

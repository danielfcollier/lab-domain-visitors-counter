package src

import "strings"

func searchDomains(data [][]string, _depth ...int) [][]string {
    depth := 4
    if len(_depth) != 0 {
        depth = _depth[0]
    }

    results := [][]string{}
    searchedDomainsMap := map[string]string{}

    for _, element := range data {
        var domain string = element[1]
        domains := strings.Split(domain, ".")
        var domainsLength int = len(domains)

        topLevelDomain := domains[domainsLength - 1]
        subDomain := topLevelDomain

        var loopLimit int
        if depth > domainsLength {
            loopLimit = domainsLength
        } else {
            loopLimit = depth
        }

        for i := 1; i <= loopLimit; i++ {
            var hasSubDomainBeingComputed bool
            _, hasSubDomainBeingComputed = searchedDomainsMap[subDomain]

            if !hasSubDomainBeingComputed {
                searchedDomainsMap[subDomain] = subDomain
                var result []string = searchSubDomain(subDomain, data)
                results = append(results, result)
            }

            if (domainsLength -1 -i) >= 0 {
                s := []string{domains[domainsLength -1 -i], subDomain}
                subDomain = strings.Join(s, ".")
            }
        }
    }

    return results
}

const searchSubDomain = require("./searchSubDomain");

function searchDomains(dataArray, depth = 3) {
  const results = [];
  const searchedDomainsSet = new Set();

  dataArray.forEach((data) => {
    const { domain } = data;
    const domains = domain.split(".");
    const topLevelDomain = domains[domains.length - 1];
    let subDomain = topLevelDomain;

    const loopLimit = depth > domains.length ? domains.length : depth;
    for (let i = 1; i <= loopLimit; i++) {
      const hasSubDomainNotBeingComputed = !searchedDomainsSet.has(subDomain);
      if (hasSubDomainNotBeingComputed) {
        searchedDomainsSet.add(subDomain);
        const result = searchSubDomain(subDomain, dataArray, depth);
        const [visitors, domain] = result;
        results.push({ visitors, domain });
      }
      subDomain = `${domains[domains.length - i - 1]}.${subDomain}`;
    }
  });

  return results;
}

module.exports = searchDomains;

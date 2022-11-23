function searchSubDomain(subDomain, dataArray) {
  const resultsWithSubDomain = dataArray.filter((data) => {
    const { domain } = data;

    if (domain.length < subDomain.length) {
      return false;
    }

    if (domain === subDomain) {
      return true;
    }

    const pattern = `\\.${subDomain}$`;
    const regex = new RegExp(pattern);

    return regex.test(domain);
  });
  const visitorsCounter = (previous, current) => {
    const { visitors } = current;
    return parseInt(previous, 10) + parseInt(visitors, 10);
  };

  return [resultsWithSubDomain.reduce(visitorsCounter, 0), subDomain];
}

module.exports = searchSubDomain;

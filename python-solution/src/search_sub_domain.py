import re

def search_sub_domain(sub_domain, data_array):
  filtered_array = []

  for array in data_array:
    [_, domain] = array

    if len(domain) < len(sub_domain):
      continue

    if domain == sub_domain:
      filtered_array.append(array)

    pattern = rf"\.{sub_domain}$"

    if re.search(pattern, domain):
      filtered_array.append(array)

  counter = 0
  for array in filtered_array:
    [visitors, _] = array
    counter += int(visitors, 10)

  return [counter, sub_domain]

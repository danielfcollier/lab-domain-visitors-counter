from .search_sub_domain import search_sub_domain

def search_domains(data_array, depth=4):
  results = []
  searched_domains_dict = dict()
  
  for array in data_array:
    [_, domain] = array
    domains = domain.split(".")
    domains_length = len(domains)
    
    top_level_domain = domains[-1]
    sub_domain = top_level_domain
    
    loop_limit = domains_length if depth > domains_length else depth
    for i in range(1, loop_limit + 1):
      has_sub_domain_being_computed = searched_domains_dict.get(sub_domain, False)

      if not has_sub_domain_being_computed:
        searched_domains_dict[sub_domain] = sub_domain
        result = search_sub_domain(sub_domain, data_array)
        results.append(result)

      sub_domain = f"{domains[domains_length -1 -i]}.{sub_domain}"
    
  return results

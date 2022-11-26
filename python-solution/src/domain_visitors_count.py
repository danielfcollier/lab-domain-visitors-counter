import os
import csv

from .search_domains import search_domains

input_file = os.path.join("..", "data.csv")
output_file = os.path.join("..", "output.csv")

def get_input_data():
  data_array = []
  with open(input_file) as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=",")

    for row in csv_reader:
      data_array.append(row)

  return data_array

def save_output_data(data_array):
  with open(output_file, mode="w") as results_file:
    results_writer = csv.writer(results_file, delimiter=",", quotechar='"', quoting=csv.QUOTE_MINIMAL)
    results_writer.writerows(data_array)

def domain_visitors_count():
  data_array = get_input_data()
  results = search_domains(data_array)
  save_output_data(results)

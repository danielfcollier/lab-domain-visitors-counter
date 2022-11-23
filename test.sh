#!/bin/bash

SUCESS_CODE=0;
ERROR_CODE=1;

outputCSV="output.csv";
expectedCSV="expected.csv";
result=$(wc -l <(diff <(sort ${expectedCSV}) <(sort ${outputCSV})) | awk '{ print $1 }');

if (( ${result} != 0 )); then
  exit ${ERROR_CODE};
fi

exit ${SUCCESS_CODE};

function createPhoneNumber($numbersArray) {
  array_splice($numbersArray, 0, 0, "(");
  array_splice($numbersArray, 4, 0, ") ");
  array_splice($numbersArray, 8, 0, "-");

  print_r($numbersArray);
  return implode($numbersArray);
}
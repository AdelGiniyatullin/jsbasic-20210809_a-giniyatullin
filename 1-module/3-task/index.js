function ucFirst(str) {
  if(!str){
    return str;
  }
  let res;
  res = str[0].toUpperCase() + str.slice(1);
  return res;
}

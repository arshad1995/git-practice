function getdata(num) {
  //   console.log(num.results[0].name);
  //   console.log(num.results[0].eye_color);
  //   console.log(num.results[0].films);
  var i;
  for (i = 0; i < num.results.length; i++) {
    console.log(num.results[0].name);
    console.log(num.results[0].eye_color);
    console.log(num.results[0].films);
  }
}
getdata(num);

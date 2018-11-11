let img = document.querySelector('img');
img.onload = () => {
  let dimension = `img is ${img.clientWidth} x ${img.clientHeight}`;
  console.log(dimension);
}

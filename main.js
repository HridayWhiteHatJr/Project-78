var photos = [
  "me.jpeg",
  "neil.png",
  "mom.png",
  "papa.webp",
  "dadi.png",
  "baba.png"
];
var names = [
  "Hriday Agarwal(me)",
  "Neil Agarwal(Brother)",
  "Bhumika Agarwal(Mother)",
  "Mayank Agarwal(Father)",
  "Chanda Agarwal(Grandmother)",
  "Mohan Agarwal(Grandfather)",
];

var i = 0;

function next() {
  document.getElementById("da_p").innerHTML = names[i];
  document.getElementById("mainImg").src = photos[i];
  i++;
}
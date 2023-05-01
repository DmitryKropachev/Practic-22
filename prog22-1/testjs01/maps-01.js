// Refactoring Yandex panorama v0.1

ymaps.ready(init);
var x0 = 55.790927;
var y0 = 49.114453;
alert("Start init()...");
function init() {
  if (!ymaps.panorama.isSupported()) {
    console.log("API maps error 1.");
  }
  ymaps.panorama.locate([x0, y0]).done(
    function () {},
    function () {}
  );
}
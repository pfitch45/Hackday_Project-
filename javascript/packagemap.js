window.onload = function (){

  // heatmap configuration
  var config = {
    element: document.getElementById("floorplan"),
    radius: 11,
    opacity: 100,
    top: 'auto',
    left: 'auto',
    gradient: { 0.1: "rgb(0,0,255)", 0.15: "rgb(0,255,255)", 0.25: "rgb(0,255,0)", 0.35: "yellow", 0.55: "rgb(255,0,0)" }
  };

  // creates and initializes the heatmap
  var heatmap = h337.create(config);

  // let's get some data
  // heat zone is affected between max, image size, radius, and counts
  var data = {
    max: 28,
    data: [
      { x: 245, y: 35, count: 20, name: 'Chris' },
      { x: 235, y: 17, count: 8, name: 'Jesse' },
      { x: 219, y: 27, count: 6, name: 'Ann' },
      { x: 20, y: 20, count: 1, name: 'Ann' },
      // ...
    ]
  };

  var compressedData = compressDataRange(data)
  heatmap.store.setDataSet(compressedData);

  removeInlineStyling(config.element.getElementsByTagName('canvas')[0]);
};

function removeInlineStyling (element) {
  element.style.cssText = '';
}




// 1 - 14 - 28
// 14 - 21 - 28
function compressDataRange (data) {
  var max = data.max;
console.log('before', data.data);

  for (var i = 0; i < data.data.length; i++) {
    var packageCase = data.data[i];
    var count = packageCase.count;
    var increment = (max - count) / 2;
    data.data[i].count = count + increment;
  }

console.log('after', data.data);
  return data;
}

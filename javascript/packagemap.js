window.onload = function (){

  // heatmap configuration
  var config = {
    element: document.getElementById("floorplan"),
    radius: 15,
    opacity: 50,
    top: 'auto',
    left: 'auto'
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
      // ...
    ]
  };

  heatmap.store.setDataSet(data);

  removeInlineStyling(config.element.getElementsByTagName('canvas')[0]);
};

function removeInlineStyling (element) {
  element.style.cssText = '';
}

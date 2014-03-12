window.onload = function (){

  // heatmap configuration
  var config = {
    element: document.getElementById("floorplan"),
    radius: 20,
    opacity: 50,
    top: 'auto',
    left: 'auto'
  };

  // creates and initializes the heatmap
  var heatmap = h337.create(config);

  // let's get some data
  // heat zone is affected between max, image size, radius, and counts
  var data = {
    max: 80,
    data: [
      { x: 287, y: 20, count: 72, name: 'Chris' },
      { x: 25, y: 25, count: 14 },
      { x: 50, y: 30, count: 20 }
      // ...
    ]
  };

  heatmap.store.setDataSet(data);

  removeInlineStyling(config.element.getElementsByTagName('canvas')[0]);
};

function removeInlineStyling (element) {
  element.style.cssText = '';
}

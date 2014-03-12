(function () {
  window.addEventListener('load', function () {
    var gridContainer = document.getElementById('floorplan'),
      canvas = document.createElement('canvas');

    canvas.className = 'grid';
    expandToContainer(canvas, gridContainer);
    gridContainer.appendChild(canvas);

    var el = document.getElementsByClassName('grid')[0];
    el.parentElement.style.cursor = 'crosshair';
    // drawGrid(el, 10);
    createTooltip(el);
  });

  function expandToContainer (child, parent) {
    child.width = parent.clientWidth;
    child.height = parent.clientHeight;
  }

  function drawGrid (el, inc) {
    var context = el.getContext('2d'),
      width = el.clientWidth,
      height = el.clientHeight;

    context.fillStyle = 'rgba(50, 140, 200, 0.25)';
    for (var x = 0; x < width - 1; x += inc)
      context.fillRect(x, 0, 1, height);
    for (var y = 0; y < height - 1; y += inc)
      context.fillRect(0, y, width, 1);
  }

  // Draw tooltip with current mouse x, mouse y relative to canvas
  function createTooltip (el) {
    var div = document.createElement('div');
    div.innerHTML = 'x: <span class="tooltip-x"></span>, ' +
      'y: <span class="tooltip-y"></span>';
    var tooltip = document.body.appendChild(div),
      xCoordinate = tooltip.getElementsByClassName('tooltip-x')[0],
      yCoordinate = tooltip.getElementsByClassName('tooltip-y')[0],
      style = tooltip.style;
    style.padding = '3px 8px';
    style.borderRadius = '5px';
    style.boxShadow = '0 0 3px #333';
    style.position = 'absolute';
    style.backgroundColor = 'white';
    style.display = 'none';

    document.addEventListener('click', function (evt) {
      if ((evt.srcElement || evt.target).tagName !== el.tagName) {
        return (style.display = 'none');
      }
      var x = evt.clientX - el.offsetLeft,
        y = evt.clientY - el.offsetTop;
      xCoordinate.innerHTML = x;
      yCoordinate.innerHTML = y;
      style.left = evt.clientX + 'px';
      style.top = evt.clientY + 'px';
      style.display = 'block';
    });
  }

}());

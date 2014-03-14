
alert('The total number of packages for this two month period was 636.  The mean was 6.42, the median was 5, the range was 25, and the standard deviation was 6.70!');
window.onload = function (){

  // heatmap configuration
  var config = {
    element: document.getElementById("floorplan"),
    radius: 15,
    opacity: 100,
    top: 'auto',
    left: 'auto',
    
    gradient: { 0.45: "rgb(0,0,255)", 0.45: "rgb(0,102,204)", 0.6: "rgb(0,255,255)", 0.6: "rgb(0,255,0)", 0.65: "yellow", 0.8: "rgb(255,0,0)",


     }
  };

  // creates and initializes the heatmap
  var heatmap = h337.create(config);

  // let's get some data
  // heat zone is affected between max, image size, radius, and counts
  var data = {
    max: 28,
    data: [
     /* { x: 245, y: 35, count: 20, name: 'Chris' },
      { x: 235, y: 17, count: 8, name: 'Jesse' },
      { x: 219, y: 27, count: 6, name: 'Ann' },
      { x: 486, y: 427, count: 1, name: 'Marvin' },
      { x: 108, y: 222, count: 27, name: 'Christina' },
      { x: 108, y: 170, count: 14, name: 'Haley'},
      { x: 108, y: 300, count: 2, name: 'test'},
      { x: 239, y: 188, count: 3, name: 'test2'},
      { x: 311, y: 285, count: 6, name: 'test3'},*/

      { x:108, y:222, count: 27, name: 'Akimoff'},
      { x:322, y:435, count: 2, name: 'Anderson'},
      { x:127, y:157, count: 7, name: 'Anesse'},
      { x:761, y:517, count: 5, name: 'Anthony'},
      { x:34, y:26, count: 2, name: 'Asok'},
      { x:387, y:447, count: 12, name: 'Bach'},
      { x:313, y:528, count: 16, name: 'Baker'},
      { x:339, y:481, count: 13, name: 'Be'},
      { x:339, y:311, count: 6, name: 'Ben Zvi'},
      { x:387, y:501, count: 2, name: 'Blanford'},
      { x:206, y:106, count: 1, name: 'Bonebrake'},
      { x:711, y:490, count: 1, name: 'Braastad'},
      { x:135, y:414, count: 1, name: 'Bunster'},
      { x:245, y:35, count: 20, name: 'Chen'},
      { x:460, y:508, count: 1, name: 'Cheryeth'},
      { x:203, y:178, count: 2, name: 'Choi'},
      { x:109, y:98, count: 7, name: 'Chong'},
      { x:222, y:189, count: 5, name: 'Chow'},
      { x:306, y:87, count: 5, name: 'Do'},
      { x:9, y:273, count: 2, name: 'Duncan'},
      { x:769, y:492, count: 1, name: 'Eaton'},
      { x:254, y:17, count: 1, name: 'Estrada'},
      { x:312, y:339, count: 1, name: 'Fassler'},
      { x:58, y:371, count: 1, name: 'Ferdous'},
      { x:98, y:196, count: 1, name: 'Fish'},
      { x:279, y:114, count: 14, name: 'Gale'},
      { x:162, y:99, count: 7, name: 'Gapuz'},
      { x:140, y:335, count: 1, name: 'Gordon'},
      { x:694, y:427, count: 7, name: 'Harris-B'},
      { x:312, y:472, count: 19, name: 'Harris-K'},
      { x:108, y:171, count: 14, name: 'Heneveld'},
      { x:79, y:45, count: 4, name: 'Hepting'},
      { x:52, y:469, count: 1, name: 'Hoag'},
      { x:779, y:507, count: 5, name: 'Hodges'},
      { x:232, y:100, count: 14, name: 'Hon'},
      { x:330, y:295, count: 5, name: 'Hsu'},
      { x:160, y:223, count: 2, name: 'Hunt'},
      { x:694, y:446, count: 23, name: 'Hutch'},
      { x:169, y:189, count: 1, name: 'Jiang'},
      { x:403, y:384, count: 9, name: 'Kaushish'},
      { x:311, y:419, count: 9, name: 'Kawamoto'},
      { x:131, y:372, count: 1, name: 'Kennedy'},
      { x:145, y:89, count: 8, name: 'Kim'},
      { x:103, y:17, count: 1, name: 'Klabo'},
      { x:110, y:407, count: 19, name: 'Knopp'},
      { x:535, y:449, count: 19, name: 'La-S'},
      { x:486, y:446, count: 2, name: 'La-T'},
      { x:325, y:87, count: 28, name: 'Laney'},
      { x:24, y:424, count: 5, name: 'Lang'},
      { x:68, y:388, count: 1, name: 'Le Rohellec'},
      { x:487, y:428, count: 1, name: 'Leroy'},
      { x:561, y:509, count: 15, name: 'Lin'},
      { x:695, y:481, count: 6, name: 'Long'},
      { x:404, y:438, count: 1, name: 'Loscutoff'},
      { x:695, y:500, count: 1, name: 'Love'},
      { x:470, y:384, count: 3, name: 'Low'},
      { x:41, y:361, count: 6, name: 'Maldonando'},
      { x:234, y:17, count: 8, name: 'Martin'},
      { x:397, y:410, count: 1, name: 'Mazur'},
      { x:330, y:349, count: 14, name: 'McCarthy'},
      { x:44, y:63, count: 1, name: 'McLaren'},
      { x:752, y:482, count: 1, name: 'Metcalf'},
      { x:205, y:106, count: 2, name: 'Mitchell'},
      { x:113, y:383, count: 1, name: 'Moller'},
      { x:24, y:44, count: 7, name: 'Muller'},
      { x:339, y:501, count: 2, name: 'Mullins'},
      { x:108, y:526, count: 8, name: 'Mutyaba'},
      { x:331, y:464, count: 14, name: 'Nayak'},
      { x:209, y:44, count: 8, name: 'Oh'},
      { x:321, y:490, count: 2, name: 'OMalley'},
      { x:387, y:482, count: 20, name: 'Paff'},
      { x:31, y:169, count: 6, name: 'Pisoni'},
      { x:486, y:482, count: 2, name: 'Poonwalla'},
      { x:313, y:286, count: 5, name: 'Ricasata'},
      { x:219, y:27, count: 6, name: 'Robson'},
      { x:328, y:45, count: 2, name: 'Rogers'},
      { x:181, y:16, count: 4, name: 'Rose'},
      { x:126, y:482, count: 1, name: 'Sai Giri'},
      { x:174, y:42, count: 14, name: 'Setzer'},
      { x:27, y:495, count: 10, name: 'Shah'},
      { x:779, y:527, count: 2, name: 'Shapiro'},
      { x:44, y:486, count: 1, name: 'Shaw'},
      { x:26, y:550, count: 2, name: 'Shellenberger'},
      { x:58, y:317, count: 13, name: 'Sunday'},
      { x:240, y:189, count: 2, name: 'Tapadia'},
      { x: 292, y: 33, count: 6, name: 'Taylor'},
      { x:460, y:455, count: 2, name: 'Thakur'},
      { x:335, y:17, count: 5, name: 'Thein'},
      { x:116, y:499, count: 4, name: 'Timur'},
      { x:753, y:500, count: 26, name: 'Tran'},
      { x:550, y:492, count: 12, name: 'Van Schyndel'},
      { x:127, y:88, count: 15, name: 'Van Nest'},
      { x:703, y:517, count: 2, name: 'Williams'},
      { x:41, y:380, count: 1, name: 'Wolfe'},
      { x:387, y:427, count: 1, name: 'Xiao'},
      { x:51, y:17, count: 6, name: 'Zhang-Y'},
      { x:34, y:78, count: 1, name: 'Zhang-W'}

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

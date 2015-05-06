var UI = require('ui');
var Vector2 = require('vector2');
var Intervals = require('intervals');

var hourIntervals = Intervals.hours();
var singleMinute = Intervals.singleMins();
var fifthMinute = Intervals.fifthMins();

var currentTime = {
  hours: 0,
  mins: 0,
  prevHours: 0,
  prevMins: 0
};

var main = new UI.Window();
var background = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  backgroundColor: 'white'
});
var watchBackground = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'images/watch_background.png',
  compositing: 'and'
});

function updateClock() {
  var date = new Date();
  currentTime.prevHours = currentTime.hours;
  currentTime.prevMins = currentTime.mins;
  currentTime.hours = parseInt(date.getHours());
  currentTime.mins = parseInt(date.getMinutes());
}

function updateFace() {
  if(currentTime.hours !== 0) {
    var hours = currentTime.hours;
    if(hours > 12) {
      hours -= 12;
    }
    
    for(var i = 1; i <= hours; i++) {
      main.add(hourIntervals[i]);
    }
  }
  
  if(currentTime.mins !== 0) {
    var single = currentTime.mins % 5;
    var fifths = parseInt((currentTime.mins / 5), 10);
    
    for(var k = 1; k <= single; k++) {
      main.add(singleMinute[k]);
    }
    
    for(var j = 1; j <= fifths; j++) {
      main.add(fifthMinute[j]);
    }
  }
}

function clearWatchFace(hours, mins) {  
  var single = mins % 5;
  var fifths = parseInt((mins / 5), 10);
  
  for(var i = 1; i <= single; i++) {
    main.remove(singleMinute[i]);
  }

  for(var j = 1; j <= fifths; j++) {
    main.remove(fifthMinute[j]);
  }
  
  for(var k = 1; k <= hours; k++) {
    main.remove(hourIntervals[k]);
  }
}

main.add(background);
main.add(watchBackground);
updateClock();
updateFace();
main.show();

setInterval(function() {
  updateClock();
  clearWatchFace(currentTime.prevHours, currentTime.prevMins);
  updateFace();
}, 60000);
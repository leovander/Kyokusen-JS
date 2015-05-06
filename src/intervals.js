var UI = require('ui');
var Vector2 = require('vector2');

var positioning = {
  bottom_row_y: 115,
  bottom_height: 32,
  side_column_x: 10,
  side_width: 32,
};

var single = {
  1: new UI.Image({
    position: new Vector2(92, 45),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  2: new UI.Image({
    position: new Vector2(101, 55),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  3: new UI.Image({
    position: new Vector2(92, 63),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  4: new UI.Image({
    position: new Vector2(83, 55),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  })
};
  
var mins = {
  1: new UI.Image({
    position: new Vector2(108, 26),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  2: new UI.Image({
    position: new Vector2(119, 37),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  3: new UI.Image({
    position: new Vector2(123, 55),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  4: new UI.Image({
    position: new Vector2(119, 72),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  5: new UI.Image({
    position: new Vector2(108, 83),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  6: new UI.Image({
    position: new Vector2(92, 87),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  7: new UI.Image({
    position: new Vector2(75, 83),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  8: new UI.Image({
    position: new Vector2(64, 72),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  9: new UI.Image({
    position: new Vector2(60, 55),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  10: new UI.Image({
    position: new Vector2(64, 37),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  11: new UI.Image({
    position: new Vector2(75, 26),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  }),
  12: new UI.Image({
    position: new Vector2(92, 21),
    size: new Vector2(10, 10),
    image: 'images/watch_minute.png',
    compositing: 'and'
  })
};

var hour = {
  1: new UI.Image({
    position: new Vector2(119, positioning.bottom_row_y),
    size: new Vector2(15, positioning.bottom_height),
    image: 'images/1.png',
    compositing: 'and'
  }),
  2: new UI.Image({
    position: new Vector2(102, positioning.bottom_row_y),
    size: new Vector2(19, positioning.bottom_height),
    image: 'images/2.png',
    compositing: 'and'
  }),
  3: new UI.Image({
    position: new Vector2(85, positioning.bottom_row_y),
    size: new Vector2(25, positioning.bottom_height),
    image: 'images/3.png',
    compositing: 'and'
  }),
  4: new UI.Image({
    position: new Vector2(62, positioning.bottom_row_y),
    size: new Vector2(32, positioning.bottom_height),
    image: 'images/4.png',
    compositing: 'and'
  }),
  5: new UI.Image({
    position: new Vector2(42, positioning.bottom_row_y),
    size: new Vector2(37, positioning.bottom_height),
    image: 'images/5.png',
    compositing: 'and'
  }),
  6: new UI.Image({
    position: new Vector2(13, positioning.bottom_row_y),
    size: new Vector2(50, positioning.bottom_height),
    image: 'images/6.png',
    compositing: 'and'
  }),
  7: new UI.Image({
    position: new Vector2(positioning.side_column_x, 95),
    size: new Vector2(positioning.side_width, 51),
    image: 'images/7.png',
    compositing: 'and'
  }),
  8: new UI.Image({
    position: new Vector2(positioning.side_column_x, 75),
    size: new Vector2(positioning.side_width, 37),
    image: 'images/8.png',
    compositing: 'and'
  }),
  9: new UI.Image({
    position: new Vector2(positioning.side_column_x, 60),
    size: new Vector2(positioning.side_width, 31),
    image: 'images/9.png',
    compositing: 'and'
  }),
  10: new UI.Image({
    position: new Vector2(positioning.side_column_x, 47),
    size: new Vector2(positioning.side_width, 25),
    image: 'images/10.png',
    compositing: 'and'
  }),
  11: new UI.Image({
    position: new Vector2(positioning.side_column_x, 34),
    size: new Vector2(positioning.side_width, 20),
    image: 'images/11.png',
    compositing: 'and'
  }),
  12: new UI.Image({
    position: new Vector2(positioning.side_column_x, 20),
    size: new Vector2(positioning.side_width, 15),
    image: 'images/12.png',
    compositing: 'and'
  })
};

module.exports = {
  singleMins: function() {
    return single;
  },
  fifthMins: function() {
    return mins;
  },
  hours: function() {
    return hour;
  }
};
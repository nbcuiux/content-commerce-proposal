---
layout: post
title:  "Prototype"
short_title: "Prototype"
summary: "A clickable prototype is exciting! Ideation sessions with retailers, television networks, and developers (i.e., Best Retail) will be carried out to help us define features that motivate sales performance. Afterwards, we will create a simulation that reflects these honed features in the prototype."
date:   2013-04-03 00:00:00
color:  navy
weeks: 4
people: 3
example: http://american-made-a.nbcuxlab.com/#home
phase: 5
hours: 160
---



{% highlight js %}
// random matrix
var matrix = [[0,1,0,0,1],[1,1,0,0,1],[1,0,0,1,0],[0,0,1,1,1],[0,0,1,0,0]];

var init = function() {

  // for loops to iterate through each cell
  for(var row = 0; row < matrix.length; ++row) {
    for(var column = 0; column < matrix[rows].length; ++column) {

      // if cell is a 1
      if(matrix[row][column] === 1) {

        // create a random color
        var color = matrix[row][column] = randomColor();

        // check adjacent cells
        checkNeighbours(row, column, color);
      }
    }
  }
};

var checkNeighbours = function(rows, cols, color) {

  // check cell above
  if(rows-1 >= 0 && matrix[rows-1][cols] === 1) {
    matrix[rows-1][cols] = color;

    // call checkNeighbours function from within itself
    checkNeighbours(rows-1, cols, color); // recursion!
  }

  // check cell below
  if(rows+1 < matrix.length && matrix[rows+1][cols] === 1) {
    matrix[rows+1][cols] = color;

    // call checkNeighbours function from within itself
    checkNeighbours(rows+1, cols, color); // recursion!
  }

  // check cell to the left
  if(cols-1 >= 0 && matrix[rows][cols-1] === 1) {
    matrix[rows][cols-1] = color;

    // call checkNeighbours function from within itself
    checkNeighbours(rows, cols-1, color); // recursion!
  }

  // check cell to the right
  if(cols+1 < matrix[rows].length && matrix[rows][cols+1] === 1) {
    matrix[rows][cols+1] = color;

    // call checkNeighbours function from within itself
    checkNeighbours(rows, cols+1, color); // recursion!
  }

};
{% endhighlight %}


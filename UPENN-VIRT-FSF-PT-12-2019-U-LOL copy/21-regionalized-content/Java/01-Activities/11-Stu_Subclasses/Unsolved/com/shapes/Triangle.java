package com.shapes;

import java.lang.Math;

class Triangle extends Shape {

  Triangle (int sideLenth){

    super(3, sideLength);
  }

 double getHeight () {
    // Replace SIDE_LENGTH with your side length variable.
    Math.sin(Math.toRadians(60)) * sideLength;
  }



}
package com.shapes;

import java.lang.Math;

class Square extends Shape {

Square (int sideLength) {
super(4, sideLength);

}

@Override double area (){

return this.sideLength * this.sideLength;

}

}
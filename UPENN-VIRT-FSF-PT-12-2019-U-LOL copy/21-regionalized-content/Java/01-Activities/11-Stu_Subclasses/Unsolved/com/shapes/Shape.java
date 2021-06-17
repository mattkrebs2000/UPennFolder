abstract class Shape {

private final int sides;
private final int sideLength;


// THis is the constructor
Shape (int sides, int sideLength){
this.sides = sides;
this.sideLength = sideLength;

}

abstract double area(); 

int perimeter (){

return this.sideLength * this.sides; 

}

int sides () {

return this.sides; 
}
}
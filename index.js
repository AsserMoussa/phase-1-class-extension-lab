class Polygon {
    constructor(arrInt) {
      this.arrInt = arrInt;
    }
    get countSides() {
        return this.arrInt.length;
          }
    get perimeter() {
        let sum = 0;
        for (let i=0; i<this.arrInt.length; i++){
           sum = sum + this.arrInt[i];
        }
return sum;
        }
}

class Triangle extends Polygon{
get isValid(){
    if (!Array.isArray(this.arrInt)) return;
    if (this.arrInt.length!==3) return;
    let side1=this.arrInt[0];
    let side2=this.arrInt[1];
    let side3=this.arrInt[2];
    return ((side2+side3>side1) && (side1+side3>side2) && (side1+side2>side3))
    
}
}

class Square extends Polygon{
    get isValid(){
        if (!Array.isArray(this.arrInt)) return;
    if (this.arrInt.length!==4) return;
    let side1=this.arrInt[0];
    let side2=this.arrInt[1];
    let side3=this.arrInt[2];
    let side4=this.arrInt[3];
    return ((side2==side1) && (side1==side3) && (side1==side4))
    
    }
    get area(){
        return this.arrInt[0] * this.arrInt[0];
    }
}
// make, model, and private number of wheels

class Car
{
    private wheels = 4;
    
    constructor(public make: string, public model: string){}
    
    public Show = () => `${this.make} ${this.model} ${this.wheels}  wheel`;

}

let putCar = new Car("Volvo", "S60");
console.log(putCar.Show());

let putCar1 = new Car("Volvo", "S80");
console.log(putCar1.Show());
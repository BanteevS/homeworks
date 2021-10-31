function parseCount(value) {    
    let parsedValue = Number.parseInt(value);
    if (isNaN(parsedValue)) throw new Error("Невалидное значение");
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);  
    } catch(e) {
        return e;
    }
}

class Triangle {

    constructor(a, b, c) {
        if( a + b < c || a + c < b || b + c < a) throw new Error("Треугольник с такими сторонами не существует");
        this.a = a;
        this.b = b;
        this.c = c;            
    }

    getPerimeter() {        
        return this.a + this.b + this.c;
    }

    getArea() {        
        let p = this.getPerimeter() / 2;
        let square = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
        return Number(square.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) {
        return {
            getPerimeter() {                
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}
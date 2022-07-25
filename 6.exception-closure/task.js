function parseCount(number) {
    let parsed = parseInt(number);
    if (isNaN(number)) {
        const error = new Error("Невалидное значение");
        throw error;
    };
    return parsed;
};

function validateCount(number) {
    try {
       return parseCount(number);
    } catch (error) {
        return error;
    };
};

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Ошибка! Треугольник не существует");
        };
    };

    getPerimeter() {
        return this.a + this.b + this.c;
    };

    getArea() {
      let p = 1/2 *this.getPerimeter();
      let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +area.toFixed(3);
    };

};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }
        };
    };
};


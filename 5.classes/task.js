class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };

    fix() {
        this.state *= 1.5;
    };

    set state(number) {
        this._state = number;
           if (number < 0) {
            return this._state = 0;
        } else if (number > 100) {
            return this._state = 100;
        } else {
            return this._state = number;
        }
    };

    get state() {
        return this._state
    };
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    };
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'book';
        this.author = author;
    };
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel';
    };
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    };
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective';
    };
};
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    };

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        };
    };

    findBookBy(type, value) {
        let result = this.books.find(item => value === item[type]);
        if (result) {
            return result;
        } else {
            return null;
        };
    };

    giveBookByName(bookName) {
        let i = this.books.findIndex(item => item.name === bookName);
        if (i !== -1) {
            let deletedObj = this.books.splice(i, 1);
            return deletedObj[0];
        } else {
            return null;
        };
    };
};
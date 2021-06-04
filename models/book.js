function Book(id, name) {
    this.id = id;
    this.name = name;
}

Book.prototype.getId = () => {
    return this.id;
}
Book.prototype.setId = (id) => {
     this.id = id;
}
Book.prototype.getName = () => {
    return this.name;
}
Book.prototype.setName = (name) => {
    this.name = name;
}

module.exports = Book;
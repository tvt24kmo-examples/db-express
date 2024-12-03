const db = require('../database');

const book = {
    getAll: function(callback){
        return db.query('SELECT * FROM book',callback);
    },
    getById: function(id, callback){
        return db.query('SELECT * FROM book WHERE id_book=?',[id],callback);
    },
    add: function(new_book, callback){
        return db.query('INSERT INTO book(name, author, isbn) VALUES(?,?,?)',[new_book.name, new_book.author, new_book.isbn],callback);
    },
    update: function(id, update_book, callback){
        return db.query('UPDATE BOOK SET name=?, author=?, isbn=? WHERE id_book=?',[update_book.name, update_book.author, update_book.isbn, id],callback);
    },
    delete: function(id, callback){
        return db.query('DELETE FROM book WHERE id_book=?',[id], callback);
    }
}

module.exports=book;
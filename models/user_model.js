const db=require('../database');
const bcrypt=require('bcryptjs');

const user={
    getAll:function(callback){
        return db.query('SELECT * FROM user',callback);
    },
    getById:function(id, callback){
        return db.query('SELECT * FROM user WHERE id_user=?',[id],callback);
    },
    add:function(new_user,callback){
        bcrypt.hash(new_user.password, 10, function(err,hashed_password){
            return db.query('INSERT INTO user(password,username) VALUES(?,?)',[hashed_password, new_user.username], callback);
        });
    },
    update:function(id,new_data,callback){
        bcrypt.hash(new_data.password, 10, function(err, hashed_password){
            return db.query('UPDATE user SET password=?, username=? WHERE id_user=?',[hashed_password, new_data.username, id], callback);
        });
    },
    delete:function(id, callback){
        return db.query('DELETE FROM user WHERE id_user=?',[id],callback);
    }

}


module.exports=user;
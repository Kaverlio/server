const db = require('../db');

class UserController {
    async createUser(req, res) {
        try {
            const {name, email, status = "user"} = req.body;
            const newPerson = await db.query('INSERT INTO users (name, email, status) values ($1, $2, $3) RETURNING *', [name, email, status]);
            res.json(newPerson.rows);
    
        } catch(err){
            console.log(err);
        }        
    }
    async getUsers(req, res) {
        try{
            const users = await db.query('SELECT * FROM users');
            res.json(users.rows);
        } catch(err){
            console.log(err);
        }
    }
    async getOneUser(req, res) {
        try{
            const id = req.params.id;
            const users = await db.query('SELECT * FROM users where id = $1', [id]);
            res.json(users.rows);
        } catch(err){
            console.log(err);
        }
    }
    async updateUser(req, res) {
        try{
            const {id, name, email, status} = req.body;
            const users = await db.query('UPDATE users set name = $1, email = $2, status =$3 where id = $3 RETURNING *', [name, email, status, id]);
            res.json(users.rows[0]);
        } catch(err){
            console.log(err);
        }
    }
    async deleteUser(req, res) {
        try{
            const id = req.params.id;
            const users = await db.query('DELETE FROM users where id = $1', [id]);
            res.json(users.rows[0]);
        } catch(err){
            console.log(err);
        }
    }
}

module.exports = new UserController()
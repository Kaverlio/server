const db = require('../db');

class ReviewController {
    async createReview(req, res) {
        try {
            const {user_id = 1, name, type, desc, rating, genre} = req.body;
            const newPerson = await db.query('INSERT INTO reviews (user_id, name, type, description, rating, genre) values ($1, $2, $3, $4, $5, $6) RETURNING *', [user_id, name, type, desc, rating, genre]);
            res.json(newPerson.rows[0]);
    
        } catch(err){
            console.log(err);
        }        
    }
    async getReviewsByUser(req, res) {
        try{
            const id = req.query.id
            const reviews = await db.query('SELECT * FROM reviews where user_id = $1', [id]);
            res.json(reviews.rows);
        } catch(err){
            console.log(err);
        }
    }

    async deleteReview(req, res) {
        try{
            const id = req.params.id;
            const reviews = await db.query('DELETE FROM reviews where id = $1', [id]);
            res.json(reviews.rows[0]);
        } catch(err){
            console.log(err);
        }
    }
}

module.exports = new ReviewController()
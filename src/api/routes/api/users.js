import express from 'express';
import getUsers from '../../cvpartner/getUsers';

const router = express.Router();

router.get('/', (req, res) => {
    getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(({ error: { status, error } }) => {
            res.status(status).json({ error });
        });
});

module.exports = router;

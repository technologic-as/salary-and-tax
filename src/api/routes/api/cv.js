import express from 'express';
import getCV from '../../cvpartner/getCV';

const router = express.Router();

router.get('/:userId/:cvId', (req, res) => {
    getCV(req.params)
        .then(cv => {
            res.status(200).json(cv);
        })
        .catch(({ error: { status, error } }) => {
            res.status(status).json({ error });
        });
});

module.exports = router;

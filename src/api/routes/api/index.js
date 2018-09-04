import express from 'express';
import cvRouter from './cv';
import usersRouter from './users';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/cv', cvRouter);

module.exports = router;

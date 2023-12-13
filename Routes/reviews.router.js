import express from 'express'
import { ReviewsController } from '../Controllers/reviews.controller.js'

const controller = new ReviewsController();


const router = express.Router();

// Get list of all records
router.get('/reviews', async (req, res) => {
	const result = await controller.listall()
	res.json(result);
});

// Get a single record by id (details)
router.get('/reviews/:id([0-9]*)', async (req, res) => {
	const result = await controller.getone(req.params.id)
	res.json(result);
});

// Create a new record
router.post('/reviews', async (req, res) => {
	try {
		const result = await controller.create(req.body);
    	res.send({
			message: 'review created successfully',
			newId: result.id
			});
	} catch (error) {
		res.send(error.message)
	}
	
});

// Update a record by id
router.put('/reviews', async (req, res) => {
	try {
		const result = await controller.update(req.body);
    	res.send({
			message: 'review updated successfully',
			});
	} catch (error) {
		res.send(error.message)
	}
});


// Delete a record by id
router.delete('/reviews/:id([0-9]*)', async (req, res) => {
	try {
		await controller.delete(req.params.id);
		res.send({
			message: 'review deleted sucessfully'
		});
	} catch (error) {
		res.send(error.message)
	}
});

export { router as ReviewsRouter}
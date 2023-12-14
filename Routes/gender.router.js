import express from 'express'
import {GendersController} from '../Controllers/genders.controller.js'

const controller = new GendersController();


const router = express.Router();

// Get list of all records
router.get('/genders', async (req, res) => {
	const result = await controller.listall()
	res.json(result);
});

// Get a single record by id (details)
router.get('/genders/:id([0-9]*)', async (req, res) => {
	const result = await controller.getone(req.params.id)
	res.json(result);
});

// Create a new record
router.post('/genders', async (req, res) => {
	try {
		const result = await controller.create(req.body);
    	res.send({
			message: 'Category created successfully',
			newId: result.id
			});
	} catch (error) {
		res.send(error.message)
	}
	
});

// Update a record by id
router.put('/genders', async (req, res) => {
	try {
		const result = await controller.update(req.body);
    	res.send({
			message: 'Genders updated successfully',
			});
	} catch (error) {
		res.send(error.message)
	}
});


// Delete a record by id
router.delete('/genders/:id([0-9]*)', async (req, res) => {
	try {
		await controller.delete(req.params.id);
		res.send({
			message: 'Genders deleted sucessfully'
		});
	} catch (error) {
		res.send(error.message)
	}
});

export { router as GendersRouter}
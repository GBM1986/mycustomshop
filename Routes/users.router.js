import express from 'express'
import { UsersController } from '../Controllers/users.controller.js'

const controller = new UsersController();


const router = express.Router();

// Get list of all records
router.get('/users', async (req, res) => {
	const result = await controller.listall()
	res.json(result);
});

// Get a single record by id (details)
router.get('/users/:id([0-9]*)', async (req, res) => {
	const result = await controller.getone(req.params.id)
	res.json(result);
});

// Create a new record
router.post('/users', async (req, res) => {
	try {
		const result = await controller.create(req.body);
    	res.send({
			message: 'User created successfully',
			newId: result.id
			});
	} catch (error) {
		res.send(error.message)
	}
	
});

// Update a record by id
router.put('/users', async (req, res) => {
	try {
		const result = await controller.update(req.body);
    	res.send({
			message: 'user updated successfully',
			});
	} catch (error) {
		res.send(error.message)
	}
});


// Delete a record by id
router.delete('/users/:id([0-9]*)', async (req, res) => {
	try {
		await controller.delete(req.params.id);
		res.send({
			message: 'user deleted sucessfully'
		});
	} catch (error) {
		res.send(error.message)
	}
});

export { router as UsersRouter}
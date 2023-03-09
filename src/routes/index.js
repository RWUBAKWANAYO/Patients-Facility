const routes = require('express').Router();
const GenerateListController = require('../controllers/GenerateListController');

const generateListController = new GenerateListController();

// This route is responsible for generating the sorted list of patients
routes.get('/patients-list', async (req, res) => {
	const { latitude, longitude } = req.query;
	if (!latitude || !longitude) {
		return response.status(404).json({ error: 'Cannot process invalid data' });
	}

	try {
		const listOfPatients = generateListController.index({ latitude, longitude });
		return res.status(200).json(listOfPatients);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'An error has occurred, please try again later.' });
	}
});

module.exports = routes;

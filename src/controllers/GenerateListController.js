const {
	ComputePatientDistanceToFacility,
	NormalizeData,
	ComputeScore,
	GenerateListOfPatients,
} = require('../services/index');
const patients = require('../patients.json');

// Creating the instances of each service
const computePatientDistanceToFacility = new ComputePatientDistanceToFacility();
const normalizeData = new NormalizeData();
const computeScore = new ComputeScore();
const generateListOfPatients = new GenerateListOfPatients();

class GenerateListController {
	/**
	 * Returns the 10 most promising patients to attend the appointment given the facility location
	 * Execute the services
	 * @param {String} latitude latitude of the facility location
	 * @param {String} longitude longitude of the facility location
	 * @returns {Object[]} listOfPatients List of the top 10 promising patients to attend the appointment
	 */

	index({ latitude, longitude }) {
		const facilityLocation = { latitude: Number(latitude), longitude: Number(longitude) };

		// execute computePatientDistanceToFacility
		const patientsWithDistance = computePatientDistanceToFacility.execute(
			facilityLocation,
			patients
		);

		// Executing the NormalizeDataService
		const normalizedData = normalizeData.execute(patientsWithDistance);

		// Executing the ComputeScoreService
		const patientsWithScore = computeScore.execute(normalizedData);

		// Executing the GenerateListOfPatientsService
		const listOfPatients = generateListOfPatients.execute(patientsWithScore);

		return listOfPatients;
	}
}

module.exports = GenerateListController;

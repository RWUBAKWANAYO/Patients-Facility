const patients = require('../patients.json');
const {
	ComputePatientDistanceToFacility,
} = require('../services/ComputePatientDistanceToFacility');

// Creating the instances of each service
const computePatientDistanceToFacility = new ComputePatientDistanceToFacility();

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
		const patientsWithDistance = computePatientDistanceToFacility(facilityLocation, patients);
	}
}

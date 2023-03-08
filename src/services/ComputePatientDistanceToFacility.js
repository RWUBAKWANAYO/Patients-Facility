const geolib = require('geolib');

class ComputePatientDistanceToFacility {
	/**
	 * Service responsible for calculating the distance of the patient's location to the facility
	 * @param {Object} patient's location(lat, long)
	 * @param {Object []} patients list
	 * @return {Object []} patient's list with with distance calculated
	 */

	execute({ latitude, longitude }, patients) {
		const patientsWithDistance = patients.map((patient) => {
			const distanceToFacility = geolib.getDistance(
				{
					latitude,
					longitude,
				},
				patient.location
			);
			return { ...patient, distanceToFacility };
		});
		return patientsWithDistance;
	}
}

module.exports = ComputePatientDistanceToFacility;

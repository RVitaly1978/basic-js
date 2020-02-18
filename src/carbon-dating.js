const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (arguments.length === 0)  return false;

  if (typeof sampleActivity !== 'string') return false;

  const validateSampleActivity = Number.parseFloat(sampleActivity);

  if (Number.isNaN(validateSampleActivity)) return false;

  if ((validateSampleActivity <= 0) || (validateSampleActivity > MODERN_ACTIVITY)) return false;

  const passedTime = (Math.log(MODERN_ACTIVITY / validateSampleActivity) * HALF_LIFE_PERIOD) / 0.693;
  const roundedPassedTime = Math.ceil(passedTime);

  return roundedPassedTime;
};

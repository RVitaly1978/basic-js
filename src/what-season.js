module.exports = function getSeason(date) {
  const WINTER = 'winter';
  const SPRING = 'spring';
  const SUMMER = 'summer';
  const AUTUMN = 'autumn';

  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) throw new Error();
  
  if (!date.getTime()) throw new Error();

  const month = date.getMonth();
  let season = WINTER;

  if ((month > 1) && (month < 5)) {
    season = SPRING;
  } else if ((month > 4) && (month < 8)) {
    season = SUMMER;
  } else if ((month > 7) && (month < 11)) {
    season = AUTUMN;
  }

  return season;
};

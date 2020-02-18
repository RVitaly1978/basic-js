module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;

  const filteredArray = members.filter(item => {
    if (typeof item === 'string') return item;
  });

  if (filteredArray.length === 0) return false;

  const modifiedArray = filteredArray.map(item => {
    return item.trim().toUpperCase();
  });

  const dreamTeam = modifiedArray.sort().map(item => item[0]).join('');

  return dreamTeam;
};
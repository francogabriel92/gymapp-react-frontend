const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const calculateAge = bd => {
  const current = new Date();
  const diff = current-bd;
  const age = Math.floor(diff/31557600000);
  return age;
};

const dateIsPast = date => {
  const current = new Date();
  if (date.setHours(0,0,0,0) <= current.setHours(0,0,0,0)){
    return true;
  }
  return false;
}

const utils = {
  capitalizeFirstLetter,
  calculateAge,
  dateIsPast
}

export default utils;
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
};

const getStats = list => {
  const currentDate = new Date();
  const unsubClients = list.filter( c => dateIsPast(new Date(c.subEndDate)) ).length;
  const subClients = list.filter( c => !dateIsPast(new Date(c.subEndDate)) ).length;
  const closeToExpire = list.filter( c => {
    const result = (Math.floor(new Date(c.subEndDate).getTime() - currentDate.getTime()) / 2629800000 );
    return (result < 1 && result > 0);
  });

  const result = {
    unsubClients,
    subClients,
    closeToExpire
  }
  return result;
}

const utils = {
  capitalizeFirstLetter,
  calculateAge,
  dateIsPast,
  getStats
}

export default utils;
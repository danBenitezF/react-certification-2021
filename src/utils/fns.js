function random(limit) {
  return Math.floor(Math.random() * limit);
}

const datePipe = (date = new Date()) => {
  if (date) date = new Date(date);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}
export { random, datePipe };

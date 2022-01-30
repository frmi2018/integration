const swap = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let swapped = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];
    swapped[value] = key;
  }
  return swapped;
};

const user = {
  Steven: 'firstname',
  Persia: 'lastname',
};

console.log(swap(user));

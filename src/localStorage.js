export const loadState = () => {
  try {
    const valueJSON = localStorage.getItem("state");
    return JSON.parse(valueJSON) || undefined;
  } catch (error) {
    return undefined;
  }
};
export const saveState = value => {
  const valueJSON = JSON.stringify(value);
  localStorage.setItem("state", valueJSON);
};

const reducerCopyPrevState = (prevStateThings, updatedThing) => {
  return { ...prevStateThings, ...updatedThing };
};

export default reducerCopyPrevState;

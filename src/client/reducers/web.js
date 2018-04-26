export default (state = getInitialState(), action) => {
  switch (action.type) {
    default: return state;
  }
}

const getInitialState = () => {
  return {
    default: 'loaded'
  }
}
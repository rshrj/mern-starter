const initialState = {};

export default function (state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}

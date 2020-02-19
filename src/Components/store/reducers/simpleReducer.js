const initialState = {
  userdata: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_DOC':
      return {
        ...state,
        userData: action.data
      }
    default:
      return state
  }
}

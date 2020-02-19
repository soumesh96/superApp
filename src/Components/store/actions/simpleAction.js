
export const simpleAction = (payload) => {
  return (dispatch) => {
    dispatch({
      type: 'UPLOAD_DOC',
      data: payload.data
    })
  }
}

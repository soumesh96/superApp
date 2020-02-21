const initialState = {
  userdata: [],
  initialData: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_DOC':
      const initialData = [...state.initialData];
      const payloadData = [...action.data];
      payloadData.map(ele => { initialData.push(ele) });
      return {
        ...state,
        userData: action.data,
        initialData
      }
    case 'FETCH_DATA':
      return {
        ...state,
        initialData: action.data
      }
    case 'UPDATE_DOC':
      const requiredData = [...state.initialData];
      const index = requiredData.findIndex(ele => ele.id === action.data.id);
      const changedObj = requiredData[index];
      changedObj.title = action.data.title;
      changedObj.header = action.data.header;
      changedObj.desc = action.data.desc;
      changedObj.imgUrl = action.data.imgUrl;
      requiredData[index] = changedObj;
      return {
        ...state,
        initialData: requiredData
      }
    default:
      return state
  }
}

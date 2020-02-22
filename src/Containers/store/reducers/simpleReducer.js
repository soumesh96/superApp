const initialState = {
  userdata: [],
  initialData: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_DOC':
      const initialData = [...state.initialData];
      const payloadData = [...action.data];
      payloadData.map((ele, index) => initialData.push(ele));
      const myData = initialData.filter((ele, index) => initialData.indexOf(ele) === index);
      return {
        ...state,
        userData: action.data,
        initialData: myData
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
    case 'DELETE_DOC':
      const initialDatas = [...state.initialData];
      const userData = [...state.userdata];
      console.log('reducers newInitialData before', initialDatas)
      console.log('reducers newUserData before', userData)
      const newInitialData = initialDatas.filter(ele => ele.id !== action.id);
      const newUserData = userData.filter(ele => ele.id !== action.id);
      console.log('reducers newInitialData after', newInitialData)
      console.log('reducers newUserData after', newUserData)
      return {
        ...state,
        initialData: newInitialData,
        userdata: newUserData
      }
    default:
      return state
  }
}

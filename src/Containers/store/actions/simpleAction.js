
export const simpleAction = (payload) => {
  return (dispatch) => {
    dispatch({
      type: 'UPLOAD_DOC',
      data: payload.data
    })
  }
}

export const fetchInitialData = () => {
  return (dispatch) => {
    const data = [
      {
        id: '1',
        title: 'Dog',
        header: 'Animal ',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        imgUrl: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782'
      },
      {
        id: '2',
        title: 'Office',
        header: 'Work Life ',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        imgUrl: 'https://www.incimages.com/uploaded_files/image/970x450/getty_175138996_97986.jpg'
      },
      {
        id: '3',
        title: 'Office',
        header: 'Work Life ',
        desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        imgUrl: 'https://image.coolblue.be/840x473/content/8ffaf7fede218c80fbb670998d60c7d5'
      }
    ]
    console.log('from actions')
    dispatch({
      type: 'FETCH_DATA',
      data: data
    })
  }
}

export const updateUserData = (payload) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_DOC',
      data: payload.data
    })
  }
}

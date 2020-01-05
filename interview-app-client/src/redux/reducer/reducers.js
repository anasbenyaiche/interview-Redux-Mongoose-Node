import constants from '../constant/actionType'

var initialState = {
  users: [],
  gallery:[]
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state)
  
    switch(action.type) {
  
      case constants.FETCH_USER:
        return {...state, users: action.payload}
  
      default:
        return state
      }
  }
export function addCurrencyArray(state = [], action) {
    switch (action.type) {
      case 'CURRENCY_ADD':
        return action.payload
      default:
        return state
    }
  }
export function deleteString(state = true, action) {
    switch (action.type) {
      case 'DELETE_STR':
        return false
      case 'ADD_STR':
        return true
      default:
        return state
    }
  }
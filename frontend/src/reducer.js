import { Map, List } from "immutable";

const initialState = Map({
  contacts: List()
});


function getContacts(state, contacts) {
  return state.set("contacts", contacts);
}

function onSort(state, sortKey) {
  return state.updateIn(["contacts"], c => {
    let temp = c.toJS().contacts.sort(function(a, b) {
      if(typeof a[sortKey] === 'number') {
        return a[sortKey] - b[sortKey];

      }
      if(typeof a[sortKey] === 'string') {
        return a[sortKey].localeCompare(b[sortKey])
      }
    });
    return Map({contacts: temp});
  });
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_CONTACTS":
      return getContacts(state, action.contacts);
    case "SORT_CONTACT":
      return onSort(state, action.sortKey);
  }
  return state;
}

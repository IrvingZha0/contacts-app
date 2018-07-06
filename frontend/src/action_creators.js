export function getContacts(contacts) {
  return {
      type: 'GET_CONTACTS',
      contacts,
  };
}

export function onSort(sortKey, contacts) {
  return {
      type: 'SORT_CONTACT',
      sortKey,
  };
}
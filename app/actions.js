export function findAll(data) {
  return { type: 'CONTACT@FIND_ALL', data: data }
};

export function create(contact) {
  contact.id = new Date();
  return { type: 'CONTACT@CREATE', data: contact };
};

export function remove(id) {
  return { type: 'CONTACT@REMOVE', data: id};
};

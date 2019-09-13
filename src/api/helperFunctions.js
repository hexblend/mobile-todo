//
// Helper functions
//
import firebase from 'firebase';
const database = firebase.database();

export const addToDatabase = async (link, item) => {
  await database
    .ref(link)
    .set(item)
    .then(() => console.log('Item added to the database!'))
    .catch(err => console.log(err));
};

export const updateDatabase = async (link, element) => {
  await database
    .ref()
    .child(link)
    .update(element)
    .then(() => console.log('Item updated in the database!'))
    .catch(err => console.log(err));
};

export const deleteFromDatabase = async (link) => {
  await database
    .ref()
    .child(link)
    .remove()
    .then(() => console.log('Item deleted from the database!'))
    .catch(err => console.log(err));
};

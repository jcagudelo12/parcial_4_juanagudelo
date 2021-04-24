import { firebaseApp } from "./firebase";
import firebase from "firebase";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

export const loginWhithEmailAndPassword = async (email, password) => {
  const result = { statusResponse: true, error: null };
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    result.statusResponse = false;
    result.error = "Datos incorrectos.";
  }
  return result;
};

export const getTasks = async (user) => {
  const result = {
    statusResponse: true,
    error: null,
    tasks: [],
  };
  try {
    const response = await db
      .collection("tasks")
      .where("user", "==", user)
      .get();

    response.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      result.tasks.push(task);
    });
  } catch (error) {
    result.statusResponse = false;
    result.error = error;
  }

  return result;
};

export const addDocumentWithoutId = async (collection, data) => {
  const result = { statusResponse: true, error: null };
  try {
    await db.collection(collection).add(data);
  } catch (error) {
    result.statusResponse = false;
    result.error = error;
  }

  return result;
};

export const updateDocument = async (collection, id, data) => {
  const result = { statusResponse: true, error: null };
  try {
    await db.collection(collection).doc(id).update(data);
  } catch (error) {
    result.statusResponse = false;
    result.error = error;
  }
  return result;
};

export const deleteDocument = async (collection, id) => {
  const result = { statusResponse: true, error: null };
  try {
    await db.collection(collection).doc(id).delete();
  } catch (error) {
    result.statusResponse = false;
    result.error = error;
  }
  return result;
};

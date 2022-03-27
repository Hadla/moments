import firebaseApp from './firebase';

// Regarding userinfo
export const userActions = {
  SET_USER_INFO_ACTION: 'SET_USER_INFO_ACTION',
  SET_LOGIN_INFO_ACTION: 'SET_LOGIN_INFO_ACTION',
};
// Regarding settingsActions
export const settingsActions = {
  TOGGLE_SIDEBAR_ACTION: 'TOGGLE_SIDEBAR_ACTION',
};

// Actions regarding collection
export const collectionActions = {
  SET_COLLECTIONS_ACTION: 'SET_COLLECTIONS_ACTION',
  CREATE_NEW_COLLECTION_SUCCESS: 'CREATE_NEW_COLLECTION_SUCCESS',
};

export const createNewCollectionAction = (collection) => {
  return (dispatch) => {
    console.log('UPLOADING');
    const userId = firebaseApp.auth().currentUser.uid;
    let urls = [];
    let imageUrls = [];
    for (let i = 0; i < collection.imageFiles.length; i++) {
      const uuid = uuidv4();
      const url = `collections/${userId}/${collection.colName}/${uuid}`;
      firebaseApp.storage().ref(url).put(collection.imageFiles[i]);
      urls.push(url);
      imageUrls.push(collection.imageData[i]);
      // console.log("TYPE?: ", collection.imageFiles[i].type.split("/").pop(), collection.imageFiles[i]);
    }
    firebaseApp
      .database()
      .ref(`collections/${userId}`)
      .push({ colName: collection.colName, colDesc: collection.colDesc, imageUrl: urls, imageData: imageUrls })
      .then(() => {
        //Dispatch to show error msg
        dispatch({ type: collectionActions.CREATE_NEW_COLLECTION_SUCCESS });
      });
  };
};

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const setCollectionsAction = () => {
  return (dispatch) => {
    const userId = firebaseApp.auth().currentUser.uid;
    const fb = firebaseApp.database().ref(`collections/${userId}`);
    fb.on('value', (snap) => {
      const allCollections = [];
      snap.forEach((childSnap) => {
        // console.log("SnapCHILD: ", childSnap.val(), childSnap.key);
        allCollections.push({
          id: childSnap.key,
          ...childSnap.val()
        });
      });
      dispatch({
        type: collectionActions.SET_COLLECTIONS_ACTION,
        payload: allCollections || [],
      });
    });
  };
};

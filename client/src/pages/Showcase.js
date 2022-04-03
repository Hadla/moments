import React, { useState } from 'react';
import '../style/app.scss';
import '../style/showcase.scss';
import { connect } from 'react-redux';
import { updateCollectionAction } from '../actions';
import { Loading } from '../components/helpers';
import Sidebar from '../components/Sidebar';


const Showcase = (props) => {
    const [text, setText] = useState("");
    const [edit, setEdit] = useState(false);

    const collectionInfo = props.collectionInfo;

    return (
        <div className='page-container collection-app'>
            <Sidebar />
            <div className='page-content'>
                {collectionInfo === "loading" && <Loading />}
                <h1 className="collection_name">{collectionInfo.colName}</h1>
                {collectionInfo.images &&
                    <div className='images_container'>
                        {collectionInfo.images.map((image, index) => <div className="image_wrapper" key={image.id}>
                            <img src={image.imageSrc} />
                            <div className="">
                                {edit === image.id ? <form className="edit_description">
                                    <button className="pr-1" onClick={() => { edit !== image.id ? setEdit(image.id) : setEdit("") }}><i className="pr-1 fa-solid fa-xmark"></i></button>
                                    <input placeholder={image.text !== "" ? image.text : "Add a description"}
                                        onChange={(e) => setText(e.target.value)} />
                                    <button disabled={text === ""}
                                        onClick={() => {
                                            props.updateCollection(collectionInfo, text, index);
                                            setText("");
                                            setEdit(false);
                                        }}><i class="pl-1 fa-solid fa-square-check"></i></button>
                                </form>
                                    : <div><button onClick={() => { edit !== image.id ? setEdit(image.id) : setEdit("") }}><i className="pr-1 fa-solid fa-pen-to-square"></i></button>{image.text === "" ? "Add a description" : image.text}</div>}
                            </div>
                        </div>)}
                    </div>}
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const id = props.location.search.slice(4);
    return { collectionInfo: state.collectionInfo.find((collection) => collection.id === id) || "loading" };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateCollection: (collection, selectedImage, index) => dispatch(updateCollectionAction(collection, selectedImage, index)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps, null)(Showcase);

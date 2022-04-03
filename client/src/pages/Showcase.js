import React, { useEffect, useRef, useState } from 'react';
import '../style/app.scss';
import '../style/showcase.scss';
import { connect } from 'react-redux';
import { updateCollectionAction } from '../actions';
import { Loading } from '../components/helpers';


const Showcase = (props) => {

    const [text, setText] = useState("");
    const [edit, setEdit] = useState(false);

    const handleEdit = () => setEdit(!edit);
    const descriptionInput = useRef(null);
    const collectionInfo = props.collectionInfo;

    // useEffect(() => {
    //     if (edit) {
    //         descriptionInput.current.focus();
    //     }
    // })

    return (
        <div>
            {collectionInfo === "loading" && <Loading />}
            <h3>{collectionInfo.colName}</h3>
            {collectionInfo.images &&
                <div className='images_container'>
                    {collectionInfo.images.map((image, index) => <div key={image.id}>
                        <div className="image_wrapper">
                            <img src={image.imageSrc} />
                            <div className="">
                                {edit ? <form className="edit_description">
                                    {/* <button className="pr-1" onClick={() => { descriptionInput.focus(); setEdit(!edit); }}><i class="pr-1 fa-solid fa-xmark"></i></button> */}
                                    <button className="pr-1" onClick={handleEdit}><i class="pr-1 fa-solid fa-xmark"></i></button>
                                    <input placeholder={image.text !== "" ? image.text : "Add a description"}
                                        ref={descriptionInput}
                                        onChange={(e) => setText(e.target.value)} />
                                    <button disabled={text === ""}
                                        onClick={() => {
                                            props.updateCollection(collectionInfo, text, index);
                                            setText("");
                                            setEdit(false);
                                        }}><i class="pl-1 fa-solid fa-square-check"></i></button>
                                </form>
                                    : <div><button onClick={handleEdit}><i class="pr-1 fa-solid fa-pen-to-square"></i></button>{image.text === "" ? "Add a description" : image.text}</div>}
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            }

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

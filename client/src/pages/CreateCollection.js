import React from 'react';
import Sidebar from '../components/Sidebar';
import '../style/createCollection.css';
import { collectionActions, createNewCollectionAction } from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UploadIcon from '@material-ui/icons/Publish';

class createCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colName: '',
      colDesc: '',
      imageData: null,
      imageFile: null,
    };
  }

  submitForm() {
    const collection = {
      colName: this.state.colName,
      colDesc: this.state.colDesc,
      imageData: this.state.imageData,
      imageFile: this.state.imageFile,
    };
    console.log('submit', collection);
    this.props.createCollection(collection);
  }

  onFilePick() {
    const filePath = window.document.querySelector('#image-file').files;
    console.log('FILEPATH: ', filePath);
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log('a', e.target.result);
      this.setState({ imageData: e.target.result });
    };
    reader.readAsDataURL(filePath[0]);
    this.setState({ imageFile: filePath[0] });
  }

  selectedImages() {
    return (
      <div className='selected-image-container'>
        <img className='selected-image' src={this.state.imageData} />
      </div>
    );
  }

  render() {
    return (
      <div className='main-page-home CC'>
        <Sidebar />
        <div className='main-content-home CC'>
          <div className='form-container'>
            <p className='title-CC'>Create a collection</p>
            <input
              className='input-field-CC name'
              placeholder='Name of Collection...'
              onChange={(e) => this.setState({ colName: e.target.value })}
            />
            <input
              className='input-field-CC description'
              placeholder='Description...'
              onChange={(e) => this.setState({ colDesc: e.target.value })}
            />
            <input
              className='input-file'
              type='file'
              accept='image/png image/jpeg'
              id='image-file'
              name='filename'
              onChange={function () {
                this.onFilePick();
              }.bind(this)}
            />
            <div className='upload-file-btn-CC'>
              <label className='upload-file-lable-CC' for='image-file'>
                Choose a file
                <UploadIcon className='upload-icon' fontSize='small' />
              </label>
            </div>
            {this.selectedImages()}

            <button
              className='save-btn-CC'
              onClick={function () {
                this.submitForm();
              }.bind(this)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCollection: (collection) => dispatch(createNewCollectionAction(collection)),
  };
};

export default connect(null, mapDispatchToProps)(createCollection);

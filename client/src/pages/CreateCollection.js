import React from 'react';
import Sidebar from '../components/Sidebar';
import '../style/app.scss';
import '../style/createCollection.scss';
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
      imageData: [],
      imageFiles: [],
      successfullySubmitted: false,
    };
  }

  submitForm() {
    const { colName, colDesc, imageData, imageFiles } = this.state;
    const collection = {
      colName: colName,
      colDesc: colDesc,
      imageData: imageData,
      imageFiles: imageFiles,
    };
    console.log('submit', collection);
    this.props.createCollection(collection);
    if (colName.length > 0 || colDesc.length > 0 || imageData !== null) {
      this.setState({
        successfullySubmitted: true,
      })
    }
  }

  onFilePick() {
    const filePath = window.document.querySelector('#image-file').files;
    for (let i = 0; i < filePath.length; i++) {
      const newImage = filePath[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState({
          imageData: [...this.state.imageData, e.target.result],
          imageFiles: [...this.state.imageFiles, newImage],
        });
      };
      reader.readAsDataURL(filePath[i]);
    }
  }
  selectedImages = () => {
    const imageData = this.state.imageData;
    const previewLimit = 8;
    return (
      <div className=''>
      <div className='selected-image-container'>
        {imageData.slice(0, previewLimit).map((url, key) => (
          <img key={key} className='selected-image' src={url} />
        ))}
      </div>
        {imageData.length > previewLimit && <div className='preview-limit-reached'><p>and {imageData.length - previewLimit} more...</p></div>}
      </div>
    );
  }

  render() {
    const { colName, colDesc, imageData, imageFiles } = this.state;
    return (
      <div className='page-container create-collection-app'>
        <Sidebar />
        <div className='page-content'>
          {this.state.successfullySubmitted ?
            <div className='form-container'>
              <p className='title mb-0'>Collection successfully created!</p>
              <p>Another Moment has been  added to you collection</p>
              <div className="submitted-collection">
                <h5 className="title">{this.state.colName} <span>({this.state.imageFiles.length} photo{this.state.imageFiles.length > 1 && '´s'})</span></h5>
                <p>{this.state.colDesc}</p>
              {this.selectedImages()}
              </div>
              <div>
                <button className='form-btn save-btn' onClick={() => window.location.reload()}>Create another</button>
                <Link to='/add-moment'><button className='ml-3 form-btn save-btn'>Go back</button></Link>
              </div>
            </div> :

            <div className='form-container'>
              <p className='title'>Create a collection</p>
              <input
                className='input-field name'
                placeholder='Name of Collection...'
                onChange={(e) => this.setState({ colName: e.target.value })}
              />
              <input
                className='input-field description'
                placeholder='Description...'
                onChange={(e) => this.setState({ colDesc: e.target.value })}
              />
              <input
                className='input-file'
                type='file'
                accept='image/png image/jpeg'
                id='image-file'
                name='filename'
                multiple
                onChange={function () {
                  this.onFilePick();
                }.bind(this)}
              />
              <div> <button className='form-btn upload-file-btn'>
                <label htmlFor='image-file'>Choose a file <UploadIcon className='upload-icon' fontSize='small' /></label>
              </button>
              </div>
              {this.selectedImages()}
              <div>
                <button
                  className='form-btn save-btn'
                  disabled={!colName.length > 0 || !colDesc.length > 0 || !imageFiles.length > 0}
                  onClick={function () {
                    this.submitForm();
                  }.bind(this)}
                >
                  Save
            </button>
              </div>

            </div>
          }
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


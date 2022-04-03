import { Link } from 'react-router-dom';
import React from 'react';
import { Fragment } from 'react';
import '../style/randomMomentsGallery.scss';
import { Loading } from './helpers';

class RandomMomentsGallery extends React.Component {
  column1 = [];
  column2 = [];
  column3 = [];
  allColumns = [];
  divideByColumn() {
    const collection = this.props.collections;
    for (let index = 0; index < collection.length; index++) {
      if ((index + 1) === collection.length) {
        this.column3.push(collection[index]);
        console.log("RUNNING MAX 1", index);
        this.allColumns.push(this.column1, this.column2, this.column3)
      } else if (index % 3 === 0) {
        this.column1.push(collection[index]);
      } else if ((index - 1) % 3 === 0) {
        this.column2.push(collection[index]);
      } else {
        this.column3.push(collection[index])
      }
    }
  }
  randomImgDisplayer(collection, key) {
    const randomIndex = Math.floor(Math.random() * collection.images.length);
    return (
      <div key={key} className='RMG-card'>
        <p className='RMG-col-name'>From {collection.colName}</p>
        <div className='RMG-img-container'>
          <img className='RMG-img' alt={collection.colName} src={collection.images[randomIndex].imageSrc} />
        </div>
      </div>
    );
  }

  render() {
    this.divideByColumn();
    console.log("COLUMNS: ", this.allColumns);
    return (
      <div className='random-moments-gallery position-relative'>
        {this.props.collections.length > 0 ? <div className='row'>
          {this.allColumns.map((column) => <div className='col p-0'>{
            column.map((collection) => {
              const randomIndex = Math.floor(Math.random() * collection.images.length);
              return (<div key={collection.id} className='RMG-card'>
                <p className='RMG-col-name'>From <Link to={`/showcase?id=${collection.id}`}>{collection.colName}</Link></p>
                <div className='RMG-img-container'>
                  <span className='RMG-col-description'>{collection.colDesc}</span>
                  <img className='RMG-img' alt={collection.colName} src={collection.images[randomIndex].imageSrc} />
                </div>
              </div>);
            })}
          </div>)}
        </div>
          : <Loading /> }
           
      </div>
    );
  }
}
// return <div className='RMG-card-containter'>{this.props.collections.map(this.randomImgDisplayer)}</div>;
{/* <div key={key} className='RMG-card'>
<div className='RMG-img-container'>
  <img className='RMG-img' alt={collection.colName} src={collection.images[randomIndex].imageSrc} />
</div>
<p className='RMG-col-name'>From {collection.colName}</p>
</div> */}
export default RandomMomentsGallery;

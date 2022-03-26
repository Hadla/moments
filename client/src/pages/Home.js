import React from 'react';
import Sidebar from '../components/Sidebar';
import Start from '../components/Start';
import LogoutButton from '../components/LogoutButton';
import { LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import firebaseApp from '../firebase';
import '../style/home.css';
import RandomMomentsGallery from '../components/RandomMomentsGallery';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
    };
    this.testCol = [
      {
        momentsImg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ-nZ-0Z7C_UGq1UK3yDMuvCdvjSkfUGtGPg&usqp=CAU',
        colName: 'Family',
      },
      {
        momentsImg: 'https://cdn3.eyeem.com/thumb/5245a9c18f8356cc6f14ee8d2361cdade03a9929-1582881296050/w/1300',
        colName: 'Friends',
      },
      {
        momentsImg: 'https://i.pinimg.com/originals/60/dd/bd/60ddbd5d5ee63d765116f41110885611.jpg',
        colName: 'New York',
      },
      {
        momentsImg: 'https://www.thewanderinglens.com/wp-content/uploads/2018/01/header.jpg',
        colName: 'Paris',
      },
      {
        momentsImg:
          'https://images.squarespace-cdn.com/content/v1/5e4a625c50c5eb630b9ca41c/1584010145039-PCQASJO9VP8YYZE5ABA9/ke17ZwdGBToddI8pDm48kIQg3raHUQ0nUnT-YQ2iwWt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmTl_ALRZE0UkEheIF40jl8o7Lf57f4boaChwgQgKiLE_IR9WP6Dycs2VQZ0vSmXZR/barnfotograf-children-photography-juliana-wiklund-357.jpg',
        colName: 'Family',
      },
      {
        momentsImg:
          'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/fstoppers_underwater_photography_etiquette_joanna_lentini_r1a3753.jpg',
        colName: 'Costa Rica',
      },
      {
        momentsImg: 'https://i.pinimg.com/originals/41/e1/6b/41e16b152707dea9c4dfac5e3c3290e8.jpg',
        colName: 'Summer 2019',
      },
      {
        momentsImg:
          'https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2016/Graduation-photo-tips/Media/Graduation-photos-2-girlfriends.jpg',
        colName: 'Family',
      },
      {
        momentsImg: 'https://daily.jstor.org/wp-content/uploads/2015/06/Kindergarten.jpg',
        colName: 'Sofie',
      },
      {
        momentsImg:
          'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        colName: 'Summer 2019',
      },
    ];
  }

  render() {
    console.log(this.props);
    return (
      <div className='main-page-home'>
        <Sidebar />
        <div className='main-content-home'>
          <div className='welcome-header'>
            <p className='welcome-msg'>Welcome {this.props.userInfo.name}!</p>
            <Link to='/add-moment'>
              <button className='welcome-msg-btn'>Let's get started</button>
            </Link>
          </div>
          <div>
            <RandomMomentsGallery images={this.testCol} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo };
};

export default connect(mapStateToProps, null)(Home);

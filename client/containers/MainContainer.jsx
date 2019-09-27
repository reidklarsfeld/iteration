/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders MapDisplay and ListContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import MapDisplay from '../components/MapDisplay.jsx';
import ListContainer from './ListContainer.jsx';

//container that combines MapDisplay and ListContainer and passes down all necessary props
class MainContainer extends Component {
  render() {
    return (
      <div
        id='main-container'
        onClick={e => {
          // console.log('in main container', this.props.displayTrailModal);
          if (this.props.displayTrailModal) {
            this.props.noTrail();
          }
        }}
      >
        <img src='../../assets/trail-mix-logo.jpg' className='logo' />
        <br />
        <div className='map-and-list'>
          <div className='map-display-width'>
            <MapDisplay
              trailData={this.props.trailData}
              getTrail={this.props.getTrail}
              displayTrail={this.props.displayTrail}
              pressPlay={this.props.pressPlay}
            />
          </div>
          <div className='list-display'>
            <label htmlFor='sort'>Sort By:</label>
            <select
              id='sort'
              value={this.props.sortValue}
              onChange={this.props.sortTrails}
            >
              <option value=''>None</option>
              <option value='shortest-length'>Shortest Length</option>
              <option value='longest-length'>Longest Length</option>
              <option value='highest-rating'>Highest Rating</option>
              <option value='lowest-rating'>Lowest Rating</option>
            </select>
            <ListContainer
              currentUsername={this.props.currentUsername}
              trailData={this.props.trailData}
              getTrail={this.props.getTrail}
              showKey={this.props.showKey}
              diffKey={this.props.diffKey}
              addFavorite={this.props.addFavorite}
            />
          </div>
          {/* conditional renders difficulty key overlay */}
          {this.props.diffKey && (
            <div>
              <img id='diff-key' src='../../assets/diff-key.jpg' />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MainContainer;

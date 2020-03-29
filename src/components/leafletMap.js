import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class LeafletMap extends React.Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    // markerText: PropTypes.string
  }

  // static defaultProps = {
  //   position: [55.92077,-4.33371],
  //   zoom: 13,
  //   markerText: ""
  // }

 

  static defaultProps = {
    position1: [38.893908, -77.040280], 
    content1: "Daughter's of the American Revolution Memorial Hall",
    position2: [38.885611, -77.003768],
    content2: "St. Peter's Church on Capitol Hill",
    position3: [38.896994, -77.033426],
    content3: "W Hotel",

    
  }

  render() {

      return (
        <Map center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
          />
         
          {this.props.markerText !== "" &&
          <Marker position={this.props.position1}>
            <Popup>{this.props.content1}</Popup>
          </Marker>
          }
          {this.props.markerText !== "" &&
          <Marker position={this.props.position2}>
            <Popup>{this.props.content2}</Popup>
          </Marker>
          }
          {this.props.markerText !== "" &&
          <Marker position={this.props.position3}>
            <Popup>{this.props.content3}</Popup>
          </Marker>
          }
        </Map>
      );
  }
}

export default LeafletMap
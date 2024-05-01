import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const TransitUpdates = () => {
  const [data, setData] = useState([]);
  const [inputStationId, setInputStationId] = useState('');
  const [selectedStation, setSelectedStation] = useState(null);

  // Common Stations data
  const commonStations = [
    { 'Station ID': '164', 'Stop Name': '34 St-Penn Station', 'Borough': 'M', 'Daytime Routes': 'A C E', 'Structure': 'Subway', 'GTFS Latitude': '40.752287', 'GTFS Longitude': '-73.993391', 'North Direction Label': 'Uptown - Queens', 'South Direction Label': 'Downtown & Brooklyn', 'ADA': '1' },
    { 'Station ID': '453', 'Stop Name': '82 St-Jackson Hts', 'Borough': 'Q', 'Daytime Routes': '7', 'Structure': 'Elevated', 'GTFS Latitude': '40.747659', 'GTFS Longitude': '-73.883697', 'North Direction Label': 'Flushing', 'South Direction Label': 'Manhattan', 'ADA': '0' },
    { 'Station ID': '25', 'Stop Name': 'Jay St-MetroTech', 'Borough': 'Bk', 'Daytime Routes': 'R', 'Structure': 'Subway', 'GTFS Latitude': '40.69218', 'GTFS Longitude': '-73.985942', 'North Direction Label': 'Manhattan', 'South Direction Label': 'Bay Ridge - 95 St', 'ADA': '1' },
    { 'Station ID': '317', 'Stop Name': 'Times Sq-42 St', 'Borough': 'M', 'Daytime Routes': '1 2 3', 'Structure': 'Subway', 'GTFS Latitude': '40.75529', 'GTFS Longitude': '-73.987495', 'North Direction Label': 'Uptown & The Bronx', 'South Direction Label': 'Downtown & Brooklyn', 'ADA': '1' }
  ];

  useEffect(() => {
    Papa.parse('/Stations.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      }
    });
  }, []);


  useEffect(() => {
    if (inputStationId) {
      const foundStation = data.find(station => station['Station ID'].toLowerCase() === inputStationId.toLowerCase());
      setSelectedStation(foundStation);
    } else {
      setSelectedStation(null);
    }
  }, [inputStationId, data]);

  const stationStyle = {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px'
  };

  const titleStyle = {
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold'
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '50px' }}>
        <h1>Common Stations</h1>
        {commonStations.map((station, index) => (
          <div key={index} style={stationStyle}>
            <p style={titleStyle}>Station ID: {station['Station ID']}</p>
            <p>Stop Name: {station['Stop Name']}</p>
            <p>Borough: {station['Borough']}</p>
            <p>Daytime Routes: {station['Daytime Routes']}</p>
            <p>Structure: {station['Structure']}</p>
            <p>GTFS Latitude: {station['GTFS Latitude']}</p>
            <p>GTFS Longitude: {station['GTFS Longitude']}</p>
            <p>North Direction Label: {station['North Direction Label']}</p>
            <p>South Direction Label: {station['South Direction Label']}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>Live Transit Updates</h1>
        <h3>Given a station ID, updates in the surrounding location will be given.</h3>
        <input
          type="text"
          value={inputStationId}
          onChange={e => setInputStationId(e.target.value)}
          placeholder="Enter Station ID"
        />
        {inputStationId && (!selectedStation ? (
          <p>There is no station with that ID</p>
        ) : (
          <div style={stationStyle}>
            <p style={titleStyle}>Station ID: {selectedStation['Station ID']}</p>
            <p>Stop Name: {selectedStation['Stop Name']}</p>
            <p>Borough: {selectedStation['Borough']}</p>
            <p>Daytime Routes: {selectedStation['Daytime Routes']}</p>
            <p>Structure: {selectedStation['Structure']}</p>
            <p>GTFS Latitude: {selectedStation['GTFS Latitude']}</p>
            <p>GTFS Longitude: {selectedStation['GTFS Longitude']}</p>
            <p>North Direction Label: {selectedStation['North Direction Label']}</p>
            <p>South Direction Label: {selectedStation['South Direction Label']}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransitUpdates;

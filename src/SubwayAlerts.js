import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const SubwayAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [inputRouteId, setInputRouteId] = useState('');
  const [selectedAlerts, setSelectedAlerts] = useState([]);

  useEffect(() => {
    Papa.parse('/alerts.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setAlerts(results.data);
      }
    });
  }, []);

  useEffect(() => {
    if (inputRouteId) {
      const foundAlerts = alerts.filter(alert => alert.route_id && inputRouteId && alert.route_id.toLowerCase() === inputRouteId.toLowerCase());
      const uniqueAlerts = Array.from(new Set(foundAlerts.map(a => a.description_text)))
        .map(description_text => {
          return foundAlerts.find(a => a.description_text === description_text)
        });
      setSelectedAlerts(uniqueAlerts);
    } else {
      setSelectedAlerts([]);
    }
  }, [inputRouteId, alerts]);

  const alertStyle = {
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
    <div>
        <p> </p>
        <h1> Subway Alerts</h1>
      <input
        type="text"
        value={inputRouteId}
        onChange={e => setInputRouteId(e.target.value)}
        placeholder="Enter Route ID"
      />
      {selectedAlerts.map((alert, index) => (
        <div key={index} style={alertStyle}>
          <p style={titleStyle}> Planned Work</p>
          <p>Agency ID: {alert.agency_id}</p>
          <p>Route ID: {alert.route_id}</p>
          <p>Location: {alert.header_text}</p>
          <p>{alert.description_text.replace('lmm:planned_work:16086', 'Planned Work')}</p>
        </div>
      ))}
    </div>
  );
};

export default SubwayAlerts;

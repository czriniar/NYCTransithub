import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Clock from './components/clock'; // Assuming Clock component is in the same directory

const Routes = () => {
  const [data, setData] = useState([]);
  const [inputRouteId, setInputRouteId] = useState('');
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    Papa.parse('/routes.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      }
    });
  }, []);

  useEffect(() => {
    if (inputRouteId) {
      const foundRoute = data.find(route => route.route_id.toLowerCase() === inputRouteId.toLowerCase());
      setSelectedRoute(foundRoute);
    } else {
      setSelectedRoute(null);
    }
  }, [inputRouteId, data]);

  return (
    <div className="App" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', padding: '20px' }}>
      <Clock />
      <h1 style={{ color: '#333', textAlign: 'left' }}>Route Search</h1>
      <input
        type="text"
        value={inputRouteId}
        onChange={e => setInputRouteId(e.target.value)}
        placeholder="Enter Route ID"
        style={{ width: '900px', padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />
      {inputRouteId && (!selectedRoute ? (
        <p style={{ color: 'red' }}>There is no route with that ID</p>
      ) : (
        <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
          <p style={{ color: '#333', fontSize: '20px', fontWeight: 'bold' }}>Route ID: {selectedRoute.route_id}</p>
          <p>Agency ID: {selectedRoute.agency_id}</p>
          <p>Route Short Name: {selectedRoute.route_short_name}</p>
          <p>Route Long Name: {selectedRoute.route_long_name}</p>
          <p>Route Description: {selectedRoute.route_desc}</p>
          <p>Route Type: {selectedRoute.route_type}</p>
          <p>Route URL: {selectedRoute.route_url}</p>
        </div>
      ))}
    </div>
  );
};

export default Routes;

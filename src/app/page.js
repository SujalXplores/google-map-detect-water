'use client';
import useGoogleMap from './useGoogleMap';

export default function Home() {
  useGoogleMap('map');

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
}

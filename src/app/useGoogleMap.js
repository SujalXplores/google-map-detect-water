import { useEffect, useRef } from 'react';
import { getMarker } from './constants';
import isItWater from 'is-it-water';

const useGoogleMap = (mapId) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const handleMarkerDragEnd = async (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();

    const isWater = await isItWater(
      lat,
      lng,
      'AIzaSyDWzus96n6vzsziFdZ_LjMZ_2chBOUKAUM'
    );
    console.info(`isWater: ${isWater}`);

    markerRef.current.setIcon({
      url: getMarker(isWater),
      anchor: new google.maps.Point(23, 40),
    });
  };

  const addMarker = async (lat, lng, isWater) => {
    if (markerRef.current) {
      markerRef.current.setMap(null);
    }

    const newMarker = new google.maps.Marker({
      position: {
        lat,
        lng,
      },
      map: mapRef.current,
      icon: {
        url: getMarker(isWater),
        anchor: new google.maps.Point(23, 40),
      },
      draggable: true,
    });

    newMarker.addListener('dragend', handleMarkerDragEnd);

    markerRef.current = newMarker;
  };

  const handleOnMapClick = async (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();

    const isWater = await isItWater(
      lat,
      lng,
      'AIzaSyDWzus96n6vzsziFdZ_LjMZ_2chBOUKAUM'
    );
    console.info(`isWater: ${isWater}`);

    addMarker(lat, lng, isWater);
  };

  useEffect(() => {
    const initMap = () => {
      const myLatLng = { lat: -25.363, lng: 131.044 };

      const map = new google.maps.Map(document.getElementById(mapId), {
        zoom: 4,
        center: myLatLng,
        // disableDefaultUI: true,
        draggableCursor: 'default',
      });

      map.addListener('click', handleOnMapClick);

      mapRef.current = map;
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDWzus96n6vzsziFdZ_LjMZ_2chBOUKAUM&callback=initMap`;
      script.async = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [mapId]);

  return {
    map: mapRef.current,
    marker: markerRef.current,
  };
};

export default useGoogleMap;

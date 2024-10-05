import { useEffect, useRef, useState } from 'react';
import { getMarker } from './constants';
import isItWater from 'is-it-water';

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const useGoogleMap = (mapId) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [infoData, setInfoData] = useState(null);

  const handleMarkerDragEnd = async (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();

    const isWater = await isItWater(lat, lng, ACCESS_TOKEN);
    console.info(`isWater: ${isWater}`);

    markerRef.current.setIcon({
      url: getMarker(isWater),
      anchor: new google.maps.Point(23, 40),
    });

    setInfoData({ lat, lng, isWater });
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

    const isWater = await isItWater(lat, lng, ACCESS_TOKEN);
    console.info(`isWater: ${isWater}`);

    addMarker(lat, lng, isWater);
    setInfoData({ lat, lng, isWater });
  };

  useEffect(() => {
    const initMap = () => {
      const myLatLng = { lat: -25.363, lng: 131.044 };

      const map = new google.maps.Map(document.getElementById(mapId), {
        zoom: 4,
        center: myLatLng,
        draggableCursor: 'default',
      });

      map.addListener('click', handleOnMapClick);

      mapRef.current = map;
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${ACCESS_TOKEN}&callback=initMap`;
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
    infoData,
  };
};

export default useGoogleMap;

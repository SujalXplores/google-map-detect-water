'use client';

import useGoogleMap from './useGoogleMap';
import InfoBox from '@/components/infobox';

export default function Home() {
  const { infoData } = useGoogleMap('map');

  return (
    <main>
      <h1 className="sr-only">Water Detection Map</h1>
      <div id="map" />
      {infoData ? (
        <InfoBox
          isWater={infoData.isWater}
          lat={infoData.lat}
          lng={infoData.lng}
        />
      ) : null}
    </main>
  );
}

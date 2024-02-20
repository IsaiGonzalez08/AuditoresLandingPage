import { useRef, useEffect } from 'react';

const SimpleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 16.752948760986328, lng: -93.1248855590820 },
      zoom: 16,
    });

    new window.google.maps.Marker({
      position: { lat: 16.752948760986328, lng: -93.1248855590820 },
      map: map,
      title: 'Gonzalez Ruiz Auditores',
      draggable: false,
    });
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: '282px', width: '600px' }}
    />
  );
};

export default SimpleMap;

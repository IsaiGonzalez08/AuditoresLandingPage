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
      className='w-[600px] h-[282px] 
      custom:w-80 custom:h-44 
      sm:w-[290px] sm:h-64 
      md:w-[400px] md:h-56
      lg:w-[470px] lg:h-80'
    />
  );
};

export default SimpleMap;

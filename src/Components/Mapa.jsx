import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react';

const Marcador = ({ texto }) => (
  <div style={{ color: 'red', fontWeight: 'bold' }}>{texto}</div>
);

Marcador.propTypes = {
  texto: PropTypes.string,
}

const SimpleMap = () => {

  const defaultProps = {
    center: {
      lat: 16.752948760986328,
      lng: -93.1248855590820
    },
    zoom: 16
  };

  const mapOptions = {
    styles: [
      {
        featureType: 'poi',
        stylers: [{ visibility: 'on' }] // Mostrar puntos de interés (places of interest)
      }
      // Puedes agregar más estilos personalizados aquí según tu preferencia
    ]
  };

  return (
    <div style={{ height: '282px', width: '600px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA2gCfD_Qkyqveor4THbIqIIE9BuyNh5vo" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        options={mapOptions}
      >
        
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;



//AIzaSyA2gCfD_Qkyqveor4THbIqIIE9BuyNh5vo
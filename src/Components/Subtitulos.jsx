import PropTypes from 'prop-types';

export const Subtitulos = ({subtitulo, nombre, ancho}) => {
    return(
        <div className='flex flex-col items-start gap-3 custom:gap-1'>
            <h2 className='text-3xl font-semibold text-[#397A80] custom:text-base'>{subtitulo}</h2>
            <h2 className='text-base font-light text-[#A1ADAF] custom:text-xs'>{nombre}</h2>
            <div className={`bg-[#397A80] ${ancho} h-[2px]`}/>
        </div>
    )
}

Subtitulos.propTypes = {
    subtitulo: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    ancho: PropTypes.string.isRequired,
}
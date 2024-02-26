import PropTypes from 'prop-types';

export const Subtitulos = ({subtitulo, nombre, ancho}) => {
    return(
        <div className='flex flex-col gap-3 custom:gap-1 custom:items-center lg:items-start'>
            <h2 className='font-semibold text-[#397A80] custom:text-xl sm:text-2xl'>{subtitulo}</h2>
            <h2 className='font-light text-[#A1ADAF] custom:text-xs sm:text-base'>{nombre}</h2>
            <div className={`bg-[#397A80] ${ancho} h-[2px]`}/>
        </div>
    )
}

Subtitulos.propTypes = {
    subtitulo: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    ancho: PropTypes.string.isRequired,
}
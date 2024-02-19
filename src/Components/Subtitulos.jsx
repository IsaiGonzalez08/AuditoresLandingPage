import PropTypes from 'prop-types';

export const Subtitulos = ({subtitulo, nombre, ancho}) => {
    return(
        <div className='flex flex-col gap-3 ml-32'>
            <h2 className='text-3xl font-semibold text-[#397A80]'>{subtitulo}</h2>
            <h2 className='text-base font-light text-[#A1ADAF]'>{nombre}</h2>
            <div className={`bg-[#397A80] ${ancho} h-[2px]`}/>
        </div>
    )
}

Subtitulos.propTypes = {
    subtitulo: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    ancho: PropTypes.string.isRequired,
}
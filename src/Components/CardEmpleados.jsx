import PropTypes from 'prop-types'

export const CardEmpleados = ({img, Puesto, Profesion, Nombre}) => {
    return(
        <div className="flex flex-col items-center gap-1 w-[306px] h-[443px] bg-[#FCFEFE] hover:scale-105 hover:duration-300">
            <img src={img} alt="img-empleado" />
            <h2 className='font-semibold text-lg tracking-widest text-center'>{Puesto}</h2>
            <h2 className='font-normal text-base tracking-widest text-center'>{Profesion}</h2>
            <h2 className='font-normal text-base tracking-widest text-center'>{Nombre}</h2>
        </div>
    )
} 

CardEmpleados.propTypes = {
    img: PropTypes.string.isRequired,
    Puesto: PropTypes.string.isRequired,
    Profesion: PropTypes.string.isRequired,
    Nombre: PropTypes.string.isRequired
}
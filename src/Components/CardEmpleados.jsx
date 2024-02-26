import PropTypes from 'prop-types'

export const CardEmpleados = ({img, Puesto, Profesion, Nombre}) => {
    return(
        <div className="flex flex-col items-center gap-1 bg-[#FCFEFE] hover:scale-105 hover:duration-300
                        custom:w-full custom:h-full
                        sm:w-[270px] sm:h-[380px]
                        md:w-[306px] md:h-[443px]
                        lg:w-[240px] lg:h-[340px]
                        2xl:w-[262px] 2xl:h-[340px]">
            <img src={img} alt="img-empleado" className='custom:w-28 sm:w-52 md:w-[200px] lg:w-[180px] xl:w-[250px]' />
            <h2 className='font-semibold custom:text-sm sm:text-lg sm:tracking-widest sm:text-center lg:text-base 2xl:text-lg'>{Puesto}</h2>
            <h2 className='font-normal custom:text-xs sm:text-base sm:tracking-widest sm:text-center lg:text-sm 2xl:text-base'>{Profesion}</h2>
            <h2 className='font-normal custom:text-xs sm:text-base sm:tracking-widest sm:text-center lg:text-sm 2xl:text-base'>{Nombre}</h2>
        </div>
    )
} 

CardEmpleados.propTypes = {
    img: PropTypes.string.isRequired,
    Puesto: PropTypes.string.isRequired,
    Profesion: PropTypes.string.isRequired,
    Nombre: PropTypes.string.isRequired
}
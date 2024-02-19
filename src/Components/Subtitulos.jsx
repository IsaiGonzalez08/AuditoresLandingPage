import PropTypes from 'prop-types';

export const Subtitulos = ({subtitulo}) => {
    return(
        <div className='flex flex-col gap-3 ml-32 mt-20'>
            <h2 className='text-3xl font-semibold text-[#397A80]'>{subtitulo}</h2>
            <h2 className='text-base font-light text-[#A1ADAF]'>González Ruiz Auditores</h2>
            <div className='bg-[#397A80] w-[600px] h-[2px]'/>
        </div>
    )
}

Subtitulos.propTypes = {
    subtitulo: PropTypes.string.isRequired,
}
import PropTypes from 'prop-types';

export const Nav = ({titulo, img}) => {
    return(
        <div className="bg-[#F3F3F3] flex justify-center items-center">
            <div className='basis-1/2 flex justify-center'>
                <h2 className='font-semibold text-[42px] text-[#397A80] ml-24'>{titulo}</h2>
            </div>
            <div className='basis-1/2 flex justify-end'>
                <img src={img} alt="Imagen-Seccion" />
            </div>
        </div>
    )
}

Nav.propTypes = {
    titulo: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}
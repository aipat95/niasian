import './Logo.css';
import PropType from 'prop-types';
import logoImage from './image/juniper_park.png';


export default function Logo({ size = 'small'}) {
  return (
      <div className={`logo-container ${size}`}>
      <img src={logoImage} alt="logo" className='logo' />
    </div>
  )
}
Logo.propTypes = {
  size: PropType.oneOf(['small', 'medium', 'large']),
};

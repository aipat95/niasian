import './Logo.css';
import PropType from 'prop-types';
import logo from './image/juniper park.png';


export default function Logo({ size = 'small'}) {
  return (
      <div className={`logo-container ${size}`}>
      <img src={logo} alt="logo" className='logo' />
    </div>
  )
}
Logo.propTypes = {
  size: PropType.oneOf(['small', 'medium', 'large']),
};


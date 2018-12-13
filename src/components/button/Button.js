import './button.scss';

const Button = ({ handleClick, btnClassName }) => (
  <button type="button" onClick={() => handleClick()} className={btnClassName ? 'active' : ''}>
    Click!
  </button>
);

export default Button;

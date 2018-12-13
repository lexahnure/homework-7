import './show.scss';

const Show = ({ handleClick, text, btnClassName }) => (
    <>
      <button type="button" onClick={() => handleClick()}>{text}</button>
      <span className={btnClassName} />
    </>
);

export default Show;

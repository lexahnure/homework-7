import './loader.scss';

const Loader = () => (
  <div className="loader">
    <svg>
      <circle id="shape" cx="60" cy="60" r="40" strokeDasharray="1000" strokeDashoffset="1000" />
    </svg>
  </div>
);

export default Loader;

import './form.scss';

class Form extends Component {
  static getDerivedStateFromProps({ data }, currState) {
    if (!data) return null;

    const props = Object.entries(data);
    const isStateEmpty =
      props.every(([key]) => !currState[key].value );

    if (isStateEmpty) {
      const state = {};

      props
        .forEach(([key, value]) => state[key] = { value, error: '' });
      return state;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.fields = [
      { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/, placeholder: 'Enter your email' },
      { label: 'name', reg: /^[^ ]{3,20}$/, placeholder: 'Enter your first name' },
      { label: 'surname', reg: /^[^ ]{3,20}$/, placeholder: 'Enter your last name' },
      { label: 'password', reg: /^[^ ]{6,20}$/, secure: true, placeholder: 'Type your password' },
      { label: 'repeatPassword', reg: /^[^ ]{6,20}$/, secure: true, placeholder: 'Retype your password' }
    ];
    this.state = {};

    this.fields.forEach(({ label }) => this.state[label] = ({
      value: '',
      error: '',
    }));
  }

  handleChange = ({ target }) => {
    const field = this.state[target.name];

    if (/checkbox|radio/i.test(target.type)) {
      this.setState({ [target.name]: { ...field, value: target.checked } });
    } else {
      this.setState({ [target.name]: { ...field, value: target.value } });
    }
  }

  onSubmit = (event) => {
    const data = {};
    const { registerUser } = this.props;

    event.preventDefault();
    Object.entries(this.state)
      .forEach(([key, { value }]) => {
        key === 'name'
        ? key = 'firstName'
        : key === 'surname'
        ? key = 'lastName'
        : key;
        return data[key] = value;
      });

    if (registerUser) {
      registerUser(data);
    }
  }

  isButtonDisabled() {
    return Object.entries(this.state)
      .some(([key, { error, value }]) => error || !value);
  }

  validate = ({ target }) => {
    const field = this.fields.find(item => item.label === target.name);
    const stateField = this.state[target.name];
    let error = '';

    if (target.value.length === 0 || !field.reg.test(target.value)) {
      error = 'Is not valid';
    } else {
      error = '';
    }
    if (target.name === 'repeatPassword' && this.state.password.value !== target.value) {
      error = 'Repeated password are not match';
    }
    this.setState({ [target.name]: { ...stateField, error } });
  }

  render() {
    const { state } = this;
    const { disabled = {} } = this.props;
    return (
      <div>
        <form action="#" onSubmit={this.onSubmit}>
          {
            this.fields.map(field => (
              <>
                <input
                  type={field.secure ? 'password' : 'text'}
                  placeholder={field.placeholder}
                  name={field.label}
                  value={state[field.label].value}
                  onChange={this.handleChange}
                  onBlur={this.validate}
                  disabled={disabled[field.label]}
                  key={field.label}
                />
                {
                  state[field.label].error &&
                  <mark>{state[field.label].error}</mark>
                }
              </>
            ))
          }
          <input
            type="submit"
            value="Send"
            disabled={this.isButtonDisabled()}
            className="accent"
          />
        </form>
      </div>
    );
  }
}

export default Form;

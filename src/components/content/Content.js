import Form from '../form';

import './content.scss';

class Content extends Component {
  onSave = (data) => {
    console.log(data);
  }

  render() {
    const { users } = this.state;

    return (
      <div className="content">
        <h2> Content </h2>
        <Form
          data={{
            email: 'maket@mail.com',
            name: 'Igor',
            surname: 'Oleg',
          }}
          onSave={this.onSave}
          disabled={{ email: true }}
        />
      </div>
    );
  }
}

export default Content;

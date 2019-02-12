import './controlItems.scss';
import Editable from 'components/editable';
import Modal from '../modal';

// eslint-disable-next-line react/prefer-stateless-function
class ControlItems extends Component {
  state = {
    itemId: '',
    editId: '',
    rightItemsOriginal: [],
    rightItemsFiltered: [],
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.rightItems !== prevState.rightItemsOriginal) {
      return { rightItemsOriginal: nextProps.rightItems, rightItemsFiltered: nextProps.rightItems };
    }
    return null;
  }

  onDelete = (itemId) => {
    this.setState({ itemId });
  }

  onEdit = (editId) => {
    this.setState({ editId });
  }

  onInputOut = (title, id) => {
    const { onChangeLeftItem } = this.props;
    onChangeLeftItem(title, id);
    this.setState({ editId: '' });
  }

  onClose = () => {
    this.setState({ itemId: '' });
  }

  onOk = () => {
    const { removeItem } = this.props;
    const { itemId } = this.state;
    console.log('Removing item - ', itemId);
    removeItem(itemId);
  }

  changeHandler = (event) => {
    const { rightItemsOriginal } = this.state;
    const rightItemsFiltered = rightItemsOriginal.filter((el) => {
      if (event.target.value.length > 1) {
        return el.title.toLowerCase().includes(event.target.value.toLowerCase());
      }
      return { rightItemsFiltered: rightItemsOriginal };
    });

    this.setState({ rightItemsFiltered });
  }

  render() {
    const {
      itemId,
      editId,
      rightItemsFiltered,
    } = this.state;

    const {
      leftItems,
      rightItems,
      addItem,
      history,
      leftColumnName,
      rightColumnName
    } = this.props;

    let item;
    if (itemId && leftItems) {
      [item] = leftItems.filter(el => el.id === itemId);
    }

    return (
      <>
        <div className="control-items">
          <div className="published">
            <h4>{leftColumnName}</h4>
            <ul className="left-items">
              {
                leftItems.map(({ title, id }) => {
                  return (
                    <li key={id}>
                      <Editable
                        text={title}
                        callback={title => this.onInputOut(title, id)}
                        active={id === editId}
                        clickEvent={() => history.push(`/categories/${id}`)}
                      />
                      <div className="controls">
                        {
                          id !== editId && (
                            <>
                              <span onClick={() => this.onDelete(id)} className="delete">
                                <img src="/images/cross.svg" alt="" width="16" height="16" />
                              </span>
                              <span onClick={() => this.onEdit(id)} className="edit">
                                <img src="/images/edit.svg" alt="" width="16" height="16" />
                              </span>
                            </>
                          )
                        }
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <div className="unpublished">
            <h4>{rightColumnName}</h4>
            <input type="text" placeholder="type to search item" onChange={this.changeHandler} />
            <ul className="right-items">
              {
                rightItemsFiltered.map(({ title, id }) => {
                  return <li key={id} onDoubleClick={() => addItem(id)}>{title}</li>;
                })
              }
            </ul>
          </div>
        </div>
        <Modal
          isOpen={Boolean(itemId)}
          close={this.onClose}
          text={`Do you want to unpublish category ${item && item.title}?`}
          success={this.onOk}
        />
      </>
    );
  }
}

export default ControlItems;

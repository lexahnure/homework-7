import './controlItems.scss';
import Editable from 'components/editable';
import Modal from '../modal';

class ControlItems extends Component {
  state = {
    itemId: '',
    editId: '',
    rightItemsFiltered: null,
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
    removeItem(itemId);
  }

  changeHandler = (event) => {
    const { rightItems } = this.props;
    const rightItemsFiltered = rightItems.filter((el) => {
      if (event.target.value.length > 1) {
        return el.title.toLowerCase().includes(event.target.value.toLowerCase());
      }
      return { rightItemsFiltered: rightItems };
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
      addItem,
      history,
      rightItems,
      leftColumnName,
      rightColumnName
    } = this.props;

    const item = leftItems && leftItems.filter(el => el.id === itemId);

    return (
      <>
        <div className="control-items">
          <div className="published">
            <h4>{leftColumnName}</h4>
            <ul className="left-items">
              {
                leftItems ? (
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
                ) : (
                  <div>
                    <p>There are no products yet.</p>
                  </div>
                )
              }
            </ul>
          </div>
          <div className="unpublished">
            <h4>{rightColumnName}</h4>
            <input type="text" placeholder="type to search item" onChange={this.changeHandler} />
            <ul className="right-items">
              {
                rightItemsFiltered ? (
                  rightItemsFiltered.map(({ title, id }) => (
                    <li key={id} onDoubleClick={() => addItem(id)}>{title}</li>
                  ))
                ) : (
                  rightItems.map(({ title, id }) => (
                    <li key={id} onDoubleClick={() => addItem(id)}>{title}</li>
                  ))
                )
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

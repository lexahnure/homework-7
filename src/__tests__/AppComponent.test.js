import { shallow } from 'enzyme';
import { getInfoAsync, cleanInfo } from 'store/categories';
import { logout } from 'store/user';
import { AppComp } from '../appComponent';

describe('<AppComponent>', () => {
  it('should match to snapshot', () => {
    const wrapper = shallow(<AppComp dispatch={_ => _} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Header and Main', () => {
    const wrapper = shallow(<AppComp dispatch={_ => _} />);
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find('Main').length).toBe(1);
  });

  it('should send action getInfoAsync() if user changed', () => {
    const fakeDispatch = jest.fn();
    const wrapper = shallow(<AppComp dispatch={fakeDispatch} />);
    const user = {};

    wrapper.setProps({ user });
    expect(fakeDispatch).toHaveBeenCalledWith(getInfoAsync());
  });

  it('should send action history() if user changed', () => {
    const fakeDispatch = jest.fn();
    const history = { push: jest.fn() };
    const user = {};
    const wrapper = shallow(<AppComp history={history} user={user} dispatch={fakeDispatch} />);

    wrapper.setProps({ user: null });
    expect(history.push).toHaveBeenCalledWith('/');
  });

  it('should set error in error.container if get props error', () => {
    const fakeDispatch = jest.fn();
    const err = 'error';
    const Container = () => ({ error: jest.fn() });
    const wrapper = shallow(<AppComp error={null} dispatch={fakeDispatch} />);
    let toastCont = wrapper.find('ToastContainer')[0];
    toastCont = Container;

    wrapper.setProps({ err });
    expect(Container.error).toHaveBeenCalledWith('error');
  });

  it('should call dispatch two times with functions as arguments', () => {
    const fakeDispatch = jest.fn();
    const user = {};
    const wrapper = shallow(<AppComp dispatch={fakeDispatch} user={user} />);

    wrapper.simulate('onLogout');
    expect(fakeDispatch).toHaveBeenCalledWith(logout());
    expect(fakeDispatch).toHaveBeenCalledWith(cleanInfo());
  });
});

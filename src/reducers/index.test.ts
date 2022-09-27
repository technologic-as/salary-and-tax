import reducers from './index';

describe('reducers', () => {
  it('should have default values that match snapshot', () => {
    // @ts-ignore
    expect(reducers()).toMatchSnapshot();
  });
});

import reducers from '../index';


describe('reducers', function () {
    it('should have default values that match snapshot', function () {
        expect(reducers()).toMatchSnapshot();
    });
});

import React from 'react';
import { render } from 'react-testing-library';

import BottomNavigation from '../index';


describe('<BottomNavigation />', () => {
    it('should render and match the snapshot', () => {
        const { container: { firstChild }, } = render(<BottomNavigation />);
        expect(firstChild).toMatchSnapshot();
    });
});
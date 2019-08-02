import React from 'react';
import { render } from 'react-testing-library';

import LeftNavigation from '../index';

describe('<LeftNavigation />', () => {
    it('should render and match the snapshot', () => {
        const { container: { firstChild }, } = render(<LeftNavigation />);
        expect(firstChild).toMatchSnapshot();
    });
});
import React from 'react';
import { render } from 'react-testing-library';

import Pagination from '../index';


describe('<Pagination />', () => {
    it('should render and match the snapshot', () => {
        const { container: { firstChild }, } = render(<Pagination />);
        expect(firstChild).toMatchSnapshot();
    });
    it('should expect `onPageChange` event that it is working', () => {
        const submitSpy = jest.fn();
        render(
          <Pagination  
          onPageChange={submitSpy}
          />,
        );
        expect(submitSpy).toHaveBeenCalled();
    });
    it('should expect `handleSelectChange` event that it is working', () => {
        const submitSpy = jest.fn();
        render(
          <Pagination  
          handleSelectChange={submitSpy}
          />,
        );
        expect(handleSelectChange).toHaveBeenCalled();
    });
});
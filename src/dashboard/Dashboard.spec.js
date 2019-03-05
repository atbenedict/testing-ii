import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render Strikes: 2 when there are two strikes', () => {
    const { getByText } = render(<Dashboard strikes={2}/>);

    expect(getByText('Strikes: 2')).toBeInTheDocument();
  });

  it('should render Balls: 3 when there are three Balls', () => {
    const { getByText } = render(<Dashboard balls={3}/>);

    expect(getByText('Balls: 3')).toBeInTheDocument();
  });
  
});

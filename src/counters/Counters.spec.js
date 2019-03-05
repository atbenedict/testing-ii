import React from 'react';
import { render, fireEvent } from 'react-testing-library'; // aded this
import 'jest-dom/extend-expect'; // added this

import Counters from './Counters';

describe('<Counters />', () => {
  

  it('renders button names', () => {
    const { getByText } = render(<Counters />);
    expect(getByText('Ball')).toBeInTheDocument();
    expect(getByText('Strike')).toBeInTheDocument();
    expect(getByText('Foul')).toBeInTheDocument();
    expect(getByText('Hit')).toBeInTheDocument();
  });

});
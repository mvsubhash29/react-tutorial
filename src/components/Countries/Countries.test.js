import { Countries } from './Countries';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe('Countries component test case', () => {
  it('should check if the Countries component rendered successfully and fetch data', async () => {
    axios.get.mockResolvedValue({ data: [{ Country: 'Inida', Slug: 'india' }] });
    const { getByText } = render(<Countries />);
    expect(getByText('Countries List')).toBeDefined();
    const items = await screen.findAllByRole('listitem'); 
    expect(items).toHaveLength(1); 
  });

  it('should check for the failure', async () => {
    jest.clearAllMocks();
    axios.get.mockRejectedValue(new Error('something went wrong'));
    render(<Countries />); 

    const message = await screen.findByText(/Something Went wrong/);
    expect(message).toBeDefined();
  });
});
import React from 'react';
import { cleanup, act, waitForElement } from '@testing-library/react';
import renderWithRouter from './mocks/RenderService';
import Home2 from '../pages/Home2';
import Home from '../pages/Home';

describe('Test home screen component', () => {
  afterEach(() => cleanup());

  test('testing component rendering', async () => {
    const { getByTestId } = renderWithRouter(<Home2 />);
    const [ logo ] = await waitForElement(() => [getByTestId('logo-amber')]);

    act(() => {
      expect(logo).toBeInTheDocument();
    });
  });

  test('testing text screen', async () => {
    const { getAllByText } = renderWithRouter(<Home />);

    const  [ text1, text2 ] = await waitForElement(() => [
      getAllByText('Um novo jeito de curtir a vida!'),
      getAllByText('Faça parte dessa família.'),
    ]);

    act(() => {
      expect(text1).not.toBeNull();
      expect(text2).not.toBeNull();
    })
  });
});

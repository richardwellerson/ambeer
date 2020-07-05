import React from 'react';
import { cleanup, act, waitForElement, fireEvent } from '@testing-library/react';
import renderWithRouter from './mocks/RenderService';
import Ambeer from '../context';
import Home2 from '../pages/Home2';
import Login from '../pages/Login';

const saveInput = jest.fn();

describe('Test home screen component', () => {
  afterEach(() => cleanup());

  test('testing component rendering', async () => {
    const { getByTestId } = renderWithRouter(<Home2 />);
    const [
      logo,
      entrar,
      register,
    ] = await waitForElement(() => [
      getByTestId('logo-amber'),
      getByTestId('entrar-btn'),
      getByTestId('registrar-btn'),
    ]);

    act(() => {
      expect(logo).toBeInTheDocument();
      expect(entrar).toBeInTheDocument();
      expect(register).toBeInTheDocument();
    });
  });

  test('testing redirect route', async () => {
    const { getByTestId, history } = renderWithRouter(
      <Ambeer.Provider value={saveInput}>
        <Home2 />
        <Login />
      </Ambeer.Provider>
    );
    const [ entrar, register ] = await waitForElement(() => [
      getByTestId('entrar-btn'),
      getByTestId('registrar-btn'),
    ]);

    act(() => {
      fireEvent.click(entrar);
      expect(history.location.pathname).toEqual('/login');
      fireEvent.click(register);
      expect(history.location.pathname).toEqual('/register');
    })
  });
});

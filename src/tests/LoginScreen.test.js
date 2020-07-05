import React from 'react';
import { cleanup, fireEvent, act, waitForElement } from '@testing-library/react';
import renderWithRouter from './mocks/RenderService';
import 'jest-mock';
import Login from '../pages/Login';
import Ambeer from '../context';
import Profile from '../pages/Profile';
import LocalStorage from './mocks/LocalStorageMock';

const  saveInput = jest.fn();
const  userData = jest.fn();
const mocks = { saveInput, userData };

window.localStorage = new LocalStorage();

describe('Testing login screen', () => {
  afterEach(() => cleanup());
  beforeEach(() => localStorage.clear());

  test('renders a reading with the text Login', () => {
    localStorage.setItem('user', JSON.stringify({ email: 'test@gmail.com', name: 'test' }));

    const { getByText } = renderWithRouter(
      <Ambeer.Provider value={ saveInput }>
        <Login />
      </Ambeer.Provider>
    );

    act(() => {
      const login = getByText(/Login/i);
      expect(login).toBeInTheDocument();
    });
  });

  test('should check dataTestId', () => {
    localStorage.setItem('user', JSON.stringify({ email: 'test@gmail.com', name: 'test' }));

    const { getByTestId } = renderWithRouter(
      <Ambeer.Provider value={ saveInput }>
        <Login />
      </Ambeer.Provider>
    );

    act(() => {
      const inputEmail = getByTestId('email-input');
      const inputPassword = getByTestId('password-input');
      const inputButton = getByTestId('login-submit-btn');

      expect(inputEmail).not.toBeNull();
      expect(inputPassword).not.toBeNull();
      expect(inputButton).not.toBeNull();
    });
  });

  test('should check event', async () => {
    localStorage.setItem('user', JSON.stringify({ email: 'test@gmail.com', name: 'test' }));

    const { getByTestId, history } = renderWithRouter(
      <Ambeer.Provider value={ mocks }>
        <Login />
        <Profile />
      </Ambeer.Provider>
    );

    const [
      email,
      password,
      inputEmail,
      inputPassword,
      inputButton,
    ] = await waitForElement(() => [
      'test@gmail.com',
      '123456',
      getByTestId('email-input'),
      getByTestId('password-input'),
      getByTestId('login-submit-btn'),
    ]);

    act(() => {
      fireEvent.input(inputEmail, {
        target: { value: email },
      });
      fireEvent.input(inputPassword, {
        taget: { value: password },
      });
      fireEvent.click(inputButton);
      expect(history.location.pathname).toEqual('/profile');
    });
  });
});

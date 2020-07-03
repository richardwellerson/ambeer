import React from 'react';
import { cleanup, fireEvent, act } from '@testing-library/react';
import renderWithRouter from './mocks/RenderService';
import "jest-mock";
import Login from '../pages/Login';
import Ambeer from '../context';

const saveInput = jest.fn();

describe('Testing login screen', () => {
  afterEach(cleanup);

  test('renders a reading with the text Login', () => {
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

  test('should check event', () => {
    const { getByTestId, getByRole } = renderWithRouter(
      <Ambeer.Provider value={ saveInput }>
      <Login />
    </Ambeer.Provider>
    );

    act(() => {
      const email = 'test@gmail.com';
      const password = '123456';
      const inputEmail = getByTestId('email-input');
      const inputPassword = getByTestId('password-input');

      fireEvent.input(inputEmail, {
        target: { value: email },
      });
      fireEvent.input(inputPassword, {
        taget: { value: password },
      });
      expect(getByRole('button', { disabled: false }));
    });
  });

  test('testing false results', () => {
    const { getByTestId, getByRole } = renderWithRouter(
      <Ambeer.Provider value={ saveInput }>
      <Login />
    </Ambeer.Provider>
    );

    act(() => {
      const email = 'testgmail.com';
      const password = '12345';
      const inputEmail = getByTestId('email-input');
      const inputPassword = getByTestId('password-input');

      fireEvent.input(inputEmail, {
        target: { value: email },
      });
      fireEvent.input(inputPassword, {
        taget: { value: password },
      });
      expect(getByRole('button', { disabled: true }));
    });
  });
});

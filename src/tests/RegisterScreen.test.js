import React from 'react';
import { cleanup, fireEvent, act, waitForElement } from '@testing-library/react';
import 'jest-mock';

import Ambeer from '../context';
import renderWithRouter from './mocks/RenderService';
import Register from '../pages/Register';

const saveRegisterUser = jest.fn();
const setRegister = jest.fn();
const mock = { saveRegisterUser, setRegister };
global.alert = jest.fn();

describe('Testing Register file', () => {
  afterEach(() => cleanup());

  test('component rendering test', async () => {
    const { getByTestId } = renderWithRouter(
      <Ambeer.Provider value={ mock }>
        <Register />
      </Ambeer.Provider>
    );

    const [
      name,
      nickName,
      email,
      password,
      passwordConfirm,
    ] = await waitForElement(() => [
      getByTestId('input-name'),
      getByTestId('input-nickName'),
      getByTestId('input-email'),
      getByTestId('input-password'),
      getByTestId('input-passwordConfirm'),
    ]);

    act(() => {
      expect(name).toBeInTheDocument();
      expect(nickName).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(passwordConfirm).toBeInTheDocument();
    });
  });

  test('testing user registration', async () => {
    const { getByTestId } = renderWithRouter(
      <Ambeer.Provider value={ mock }>
        <Register />
      </Ambeer.Provider>
    );

    const [
      name,
      nickName,
      email,
      password,
      passwordConfirm,
      reservation,
    ] = await waitForElement(() => [
      getByTestId('input-name'),
      getByTestId('input-nickName'),
      getByTestId('input-email'),
      getByTestId('input-password'),
      getByTestId('input-passwordConfirm'),
      getByTestId('finhish-reservation'),
    ]);

    act(() => {
      fireEvent.input(name , {
        target: { value: 'Test'}
      });
      fireEvent.input(nickName , {
        target: { value: 'Testando'}
      });
      fireEvent.input(email , {
        target: { value: 'test@gmail.com'}
      });
      fireEvent.input(password , {
        target: { value: '123456'}
      });
      fireEvent.input(passwordConfirm, {
        target: { value: '123456'}
      });

      fireEvent.click(reservation);

      expect(alert).not.toBeNull();
    });
  });
});

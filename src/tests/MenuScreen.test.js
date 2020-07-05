import React from 'react';
import { cleanup, fireEvent, act, waitForElement, getByText } from '@testing-library/react';
import 'jest-mock';
import renderWithRouter from './mocks/RenderService';

import Ambeer from '../context';
import Menu from '../pages/Menu';
// import MenuTitle from '../components/Menu/MenuTitle';
// import InputSearch from '../components/Menu/InputSearch';
// import FilterProducts from '../components/Menu/FilterProducts';
// import ShowProducts from '../components/Menu/ShowProducts';

const arrayMock = [
  {
    product: 'Adriática',
    price: 15.5,
    image: 'https://www.ambev.com.br/conteudo/uploads/2019/03/logo_adriatica.jpg',
  },
  {
    product: 'Antarctica',
    price: 15.5,
    image: 'https://www.ambev.com.br/conteudo/uploads/2019/03/logo_antarctica.jpg',
  },
  {
    product: 'Beck´s',
    price: 15.5,
    image: 'https://www.ambev.com.br/conteudo/uploads/2019/03/logo_becks.jpg',
  },
];



const allProducts = jest.fn();
const setUserSearch = jest.fn();
const searchedProducts = jest.fn(arrayMock)
const preOrder = jest.fn(arrayMock);
const addToCart = jest.fn(true);
const mock = { allProducts, setUserSearch, preOrder, searchedProducts, addToCart };

describe('Testing Register file', () => {
  afterEach(() => cleanup());

  test('component rendering test', () => {
    const { getByText } = renderWithRouter(
      <Ambeer.Provider value={ mock }>
        <Menu />
      </Ambeer.Provider>
    );

    act(() => {
      expect(getByText('Cardápio')).toBeInTheDocument();
    });
  });

  // test('component rendering test', async () => {
  //   const { getByTestId } = renderWithRouter(
  //     <Ambeer.Provider value={ mock }>
  //       <Menu />
  //     </Ambeer.Provider>
  //   );

  //   const [
  
  //   ] = await waitForElement(() => [
  //     getByTestId(''),
  //     getByTestId(''),
  //     getByTestId(''),
  //     getByTestId(''),
  //     getByTestId(''),
  //   ]);

  //   act(() => {

  //   });
  // });

  // test('testing user registration', async () => {
  //   const { getByTestId, history } = renderWithRouter(
  //     <Ambeer.Provider value={ mock }>
  //       <Register />
  //     </Ambeer.Provider>
  //   );

  //   const [
  //     name,
  //     nickName,
  //     email,
  //     password,
  //     passwordConfirm,
  //     reservation,
  //   ] = await waitForElement(() => [
  //     getByTestId('input-name'),
  //     getByTestId('input-nickName'),
  //     getByTestId('input-email'),
  //     getByTestId('input-password'),
  //     getByTestId('input-passwordConfirm'),
  //     getByTestId('finhish-reservation'),
  //   ]);

  //   act(() => {
  //     fireEvent.input(name , {
  //       target: { value: 'Test'}
  //     });
  //     fireEvent.input(nickName , {
  //       target: { value: 'Testando'}
  //     });
  //     fireEvent.input(email , {
  //       target: { value: 'test@gmail.com'}
  //     });
  //     fireEvent.input(password , {
  //       target: { value: '123456'}
  //     });
  //     fireEvent.input(passwordConfirm, {
  //       target: { value: '123456'}
  //     });

  //     fireEvent.click(reservation);

  //     expect(alert).not.toBeNull();
  //     // fireEvent.click(alert);
  //     // expect(history.location.pathname).toEqual('/register');
  //   });
  // });
});

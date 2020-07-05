import React from 'react';
import { Typography, Box } from '@material-ui/core';

const bares = [
  {
    name: 'Devoto`s Bar',
    adress: 'Rua Ministro Orozimbo Nonato, 102 - loja 02',
    imageURL: 'https://ralifesharer.com.br/wp-content/uploads/2015/04/Logo.jpg',
    phone: '(31) 99821-7056',
  },
  {
    name: 'Subastor',
    adress: 'Rua Delfina, 163 - Vila Madalena, São Paulo - SP',
    imageURL: 'https://www.baressp.com.br/bares/fotos2/sala-min_211120191118.jpg',
    phone: '(11) 3815-1364',
  },
  {
    name: 'Sul da Ilha Surf Bar',
    adress: 'Av. Antônio Borges dos Santos, 792 - Armacao do Pântano do Sul, Florianópolis - SC',
    imageURL:
      'https://lh3.googleusercontent.com/aecTEqr5sEPybQZySFZApMgkcXEJK_HcC6mE-M-Ym_eaFY3PdelwpyXaamT-Q2f_TgAFNBNN=w1080-h608-p-no-v0',
    phone: '(48) 3207-0438',
  },
];

const ComponentBares = () => {
  return (
    <Box>
      {bares.map((bar) => (
        <Box>
          <Typography variant="h2">{bar.name}</Typography>
          <Typography>{bar.phone}</Typography>
          <img src={bar.imageURL} alt="foto de bar" />
        </Box>
      ))}
    </Box>
  );
};

export default ComponentBares;

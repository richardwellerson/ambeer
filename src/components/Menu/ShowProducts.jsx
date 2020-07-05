import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import Ambeer from "../../context";

const toSetOrder = (setPreOrder, preOrder, userOrder, addToCart, openModal) => {
  if (addToCart) {
    // setOpenModal(true);
    return setPreOrder([...preOrder, userOrder]);
  }

  const index = preOrder.indexOf(userOrder);
  const newOrder = preOrder.slice(0, index).concat(preOrder.slice(index + 1));
  return setPreOrder(newOrder);
};

const ShowProducts = () => {
  const {
    searchedProducts,
    setSearchedProducts,
    setPreOrder,
    preOrder,
    allProducts,
    setUserSearch,
  } = useContext(Ambeer);
  const [addToCart, setAddToCart] = useState(true);
  const isAdd = addToCart ? searchedProducts : preOrder;
  const isReservation = !window.location.href.includes("reservation");
  const history = useHistory();
  useEffect(() => {
    setUserSearch("");
    setSearchedProducts(allProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);
  const totalPrice =
    preOrder.length > 0
      ? preOrder.reduce((total, act) => {
          return act.price + total;
        }, 0)
      : 0;
  const isShowPrice = history.location.pathname.includes("reservation");
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Produto{addToCart ? " adicionado ao " : " removido do "}carrinho!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok!
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        className={
          isReservation
            ? "botoes-reserva-desabilitados"
            : "botoes-reserva-habilitados"
        }
      >
        {!addToCart ? (
          <Typography>{`Valor total: R$ ${totalPrice}`}</Typography>
        ) : null}
        <Box>
          <Button onClick={() => setAddToCart(!addToCart)}>
            {addToCart ? "Remover Antecipação" : "Antecipar Pedido"}
          </Button>
        </Box>
        <Box>
          <Link to="/reservation/cart">
            <Button>Finalizar Reserva</Button>
          </Link>
        </Box>
      </Box>
      <Box className="produtos">
        <Box className="produtos-lista">
          {isAdd.map((single, id) => (
            <Box key={`${single.product}${id}${addToCart}`}>
              <img src={single.image} alt={`show ${single.product} option`} />
              <Typography>{single.product}</Typography>
              <Typography
                hidden={!isShowPrice}
              >{`R$ ${single.price}`}</Typography>
              <Box
                onClick={() =>
                  handleClickOpen && !isReservation
                    ? toSetOrder(
                        setPreOrder,
                        preOrder,
                        single,
                        addToCart,
                        openModal
                      )
                    : null
                }
              >
                <Button className="botao-add-produto" onClick={handleClickOpen}>
                  {addToCart ? "Adicionar" : "Remover"}
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ShowProducts;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Ambeer from "./index";
import { allBeers, foods } from "../services/data";

const allProducts = [...allBeers, ...foods];

const setDataToSearch = (filter) => {
  if (filter === "Todos") {
    return [...allBeers, ...foods];
  }
  if (filter === "Cervejas") {
    return [...allBeers];
  }
  return [...foods];
};

const user = { email: "", password: "" };
const date = { name: "", nickName: "", email: "", password: "" };

const AmbeerContext = ({ children }) => {
  const [login, setLogin] = useState("Context Ativo");
  const [filter, setFilter] = useState("Todos");
  const [informationsUser, setInformationsUser] = useState(user);
  const [userDate, setUserDate] = useState(date);
  const [userSearch, setUserSearch] = useState("");
  const [searchedProducts, setSearchedProducts] = useState(allProducts);
  const [preOrder, setPreOrder] = useState([]);
  const [selectDate, setSelectDate] = useState(new Date());

  useEffect(() => {
    const afterFilter = setDataToSearch(filter);
    const afterInput =
      userSearch !== ""
        ? afterFilter.filter((single) =>
            single.product.toLowerCase().includes(userSearch.toLowerCase())
          )
        : afterFilter;
    setSearchedProducts(afterInput);
  }, [filter, userSearch]);

  const saveInput = (input) => {
    const inputsLogin = {
      email: input.email,
      password: input.password,
    };
    setInformationsUser(inputsLogin);
    setUserDate(inputsLogin);
  };

  const saveRegisterUser = (dados) => {
    const inputsRegister = {
      name: dados.name,
      nickName: dados.nickName,
      email: dados.email,
      password: dados.password,
    };
    setUserDate(inputsRegister);
  };

  const toProvider = {
    login,
    setLogin,
    filter,
    setFilter,
    userSearch,
    setUserSearch,
    searchedProducts,
    saveInput,
    informationsUser,
    saveRegisterUser,
    userDate,
    preOrder,
    setPreOrder,
    setSelectDate,
    selectDate,
  };

  return <Ambeer.Provider value={toProvider}>{children}</Ambeer.Provider>;
};

export default AmbeerContext;

AmbeerContext.propTypes = {
  children: PropTypes.node.isRequired,
};

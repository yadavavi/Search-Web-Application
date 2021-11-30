import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";

import { entryAttr } from "./assets/filter";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/Layout/MainLayout.js";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerms, setSearchTerms] = useState("");
  const [params, setParams] = useState({
    search: "",
    status: [],
    productType: [],
  });
  const [checked, setChecked] = useState({
    status: [],
    productType: [],
  });
  const history = useHistory();

  useEffect(() => {
    let search = params["search"].toLowerCase().replace(/ /g, "");
    let product = params["productType"].toString().toLowerCase().replace(/ /g, "");
    let status = params["status"].toString().toLowerCase().replace(/ /g, "");
    const param = new URLSearchParams({
      ...(search && { search: search }),
      ...(product && { productType: product }),
      ...(status && { status: status }),
    });
    if (param.toString()) {
      let path = `/result?${param}`;
      history.push(path);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const getProducts = (variables) => {
   axios
      .post("localhost:9898/product/getProducts", variables)
      .then((response) => {
        if (response.data.success) {
          setProductsList(response.data.products);
        } else {
          alert("Failed to fectch product datas");
        }
      });
  };

  const reset = () => {
    const newChecked = { ...checked };
    newChecked["productType"] = [];
    newChecked["status"] = [];
    setChecked(newChecked);
    setSearchInput("");
    setSearchTerms("");
    setParams({ search: "", status: [], productType: [] });
    setProductsList([]);
  };

  const onSearchHandler = (input) => {
    const variables = {
      filters: checked,
      searchTerm: input,
    };
    setParams({ ...params, search: input });
    setSearchTerms(input);
    getProducts(variables);
  };

  const onFilterHandler = (input) => {
    const variables = {
      filters: input,
      searchTerm: searchTerms,
    };
    getProducts(variables);
  };

  return (
    <MainLayout
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      onSearchHandler={onSearchHandler}
      reset={reset}
    >
      <Switch>
        <Route path="/" exact>
          <Home
            entryAttr={entryAttr}
            check={checked}
            setCheck={setChecked}
            params={params}
            setParams={setParams}
            onFilterHandler={onFilterHandler}
          />
        </Route>
        <Route path="/result">
          <SearchResult
            params={params}
            setParams={setParams}
            entryAttr={entryAttr}
            recordList={productsList}
            check={checked}
            setCheck={setChecked}
            onFilterHandler={onFilterHandler}
          />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </MainLayout>
  );
}

export default App;

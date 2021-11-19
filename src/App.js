/* eslint-disable react-hooks/exhaustive-deps */
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";

import { entryAttr } from "./assets/filter";

import { useEffect, useState } from "react";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";

import MainLayout from "./components/Layout/MainLayout.js";

function App() {
  const [recordListDefault, setRecordListDefault] = useState([]);
  const [recordList, setRecordList] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [productArr, setProductArr] = useState([]);
  const [statusArr, setStatusArr] = useState([]);
  const [checked, setChecked] = useState({
    status: [],
    productType: [],
  });
  const history = useHistory();

  useEffect(() => {
    axios
      .get("./mockData.json")
      .then((res) => {
        setRecordListDefault(res.data);
        setRecordList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {}, [recordList]);

  const reset = () => {
    const newChecked = { ...checked };
    newChecked["productType"] = [];
    newChecked["status"] = [];
    setChecked(newChecked);
    setSearchTerms("");
    onFilterHandler(newChecked);
  };

  useEffect(() => {
    getProduct();
  }, [searchTerms]);
  useEffect(() => {
    getProduct();
  }, [productArr]);
  useEffect(() => {
    getProduct();
  }, [statusArr]);

  const getProduct = () => {
    let records, recordsNew;

    records = recordListDefault.filter((rec) => {
      return rec.material_name
        .toLowerCase()
        .includes(searchTerms.toLowerCase());
    });

    if (productArr.length !== 0) {
      recordsNew = records.filter(
        (p) => productArr.indexOf(p.product_type) !== -1
      );
      records = recordsNew;
    }
    if (statusArr.length !== 0) {
      recordsNew = records.filter(
        (p) => statusArr.indexOf(p.marker_poduct_status) !== -1
      );
      records = recordsNew;
    }

    setRecordList(records);
  };

  const onSearchHandler = (input) => {
    setSearchTerms(input);
    let path = `result`;
    history.push(path);
  };

  const onFilterHandler = (input) => {
    setProductArr(input.productType);
    setStatusArr(input.status);
    getProduct();
  };

  return (
    <MainLayout onSearchHandler={onSearchHandler} reset={reset}>
      <Switch>
        <Route path="/" exact>
          <Home
            entryAttr={entryAttr}
            check={checked}
            setCheck={setChecked}
            onFilterHandler={onFilterHandler}
          />
        </Route>
        <Route path="/result">
          <SearchResult
            entryAttr={entryAttr}
            recordList={recordList}
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

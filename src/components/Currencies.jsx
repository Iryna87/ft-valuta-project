/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import axios from 'axios';

const proxify = (url) => {
  const proxy = 'https://hexlet-allorigins.herokuapp.com';
  const newUrl = new URL('/get', proxy);
  newUrl.searchParams.set('url', url);
  newUrl.searchParams.set('disableCache', true);
  return newUrl.toString();
};

const adress = proxify('http://api.currencylayer.com/live?access_key=4ebf7b7edbfea578c0d87f16de6acc57');

const Currencies = () => {
  const [childValue, setChildValue] = useState([]);
  const [valuta, setValuta] = useState([]);
  useEffect(() => {
    const someasync = async () => {
      try {
        const response = await axios.get(proxify(adress));
        const res = await response.data.contents;
        const currencies = JSON.parse(res);
        const curses = JSON.parse(currencies.contents).quotes;
        const entries = Object.entries(curses);
        setChildValue(entries);
      } catch (e) {
        console.log(e);
      }
    };
    someasync();
  }, [setChildValue]);

  const chooseBaseCurrency = () => <div>yes</div>;

  const showCurrencies = (e) => {
    e.preventDefault();
    const str = e.target.value;
    const items = childValue.map(([key]) => ((key.substr(3, 1)).toLowerCase() === str ? `${key.substr(3)}, ` : ''));
    setValuta(_.compact(items));
  };

  return (
    <div>
      <form noValidate="" className="py-1 border rounded-2" onSubmit={chooseBaseCurrency}>
        <div className="input-group has-validation">
          <input name="body" className="border-0 p-0 ps-2 form-control" value='' onChange={showCurrencies} placeholder='Choose Basic Currency' />
          <button type="submit" className="btn btn-group-vertical">Submit</button>
        </div>
      </form>
      {<div>{_.isEmpty(valuta) ? '' : valuta.map((key) => key)}</div>}
      {childValue.map(([key, value]) => <ul key={key}><li>1 UDS =       {value}       {key.substr(3)}</li></ul>)}
    </div>
  );
};

export default Currencies;

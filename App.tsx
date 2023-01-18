import { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';

import { SafeArea } from './style';

type data = {
  date: string,
  valor: number
}

export default function App() {
  const addZero = (number: number) => {
    if (number <= 9) {
      return "0" + number;
    }
    return number;
  }
  const url = (qtdDays: number) => {
    const date = new Date();
    const listLastDays = qtdDays;
    const end_date = `2022-11-29`;
    date.setDate(date.getDate() - listLastDays - 200);
    const start_date = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
    return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
  }
  const getListCoins = async (url: string) => {
    let response = await fetch(url);
    let returnApi = await response.json();
    let selectListQuotations = returnApi.bpi;
    const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
      return {
        date: key.split("-").reverse().join("/"),
        valor: selectListQuotations[key]
      }
    })
    let data = queryCoinsList.reverse();
    return data;
  }
  const getPriceCoinsGraphic = async (url: string) => {
    let responseG = await fetch(url);
    let returnApiG = await responseG.json();
    let selectListQuotationsG = returnApiG.bpi;
    const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
      return selectListQuotationsG[key];
    });
    let dataG = queryCoinsListG;
    return dataG;
  }

  const [coinsList, setCoinsList] = useState<Array<data>>();
  const [coinsGraphicList, setCoinsGraphicList] = useState<void[]>([]);
  const [days, setDays] = useState<number>(30)
  const [updateData, setUpdateData] = useState(true)
  const [price, setPrice] = useState<number | undefined>();

  const priceQuotation = () => {
    if (coinsList) {
      setPrice(coinsList[0].valor);
    }
  }

  const updateDay = (number: number) => {
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data);
    });
    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG);
    });
    priceQuotation()
    if (updateData) {
      setUpdateData(false);
    }
  }, [updateData]);


  return (
    <SafeArea>
      <StatusBar
        backgroundColor="#f50d41"
        barStyle="dark-content"
      />
      <CurrentPrice lastQuotation={price} />
      <HistoryGraphic infoDataGraphic={coinsGraphicList} />
      <QuotationList filterDay={updateDay} listTransactions={coinsList} />
    </SafeArea>
  );
}


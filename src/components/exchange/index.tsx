import React, { useState, useEffect, useCallback } from 'react';
import { CurrencyAPI } from '../../service';
import { DOLAR, EURO, STERLIN, GRAM_ALTIN, CURRENCY_STATUS } from '../../model';
import Dollar from '../../assets/svg/dollar.svg';
import Euro from '../../assets/svg/euro.svg';
import Sterlin from '../../assets/svg/sterlin.svg';
import Gold from '../../assets/svg/gold.svg';

const Exchange: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [allCurrencies, setAllCurrencies] = useState<Array<ICurrency>>([]);
  const [goldPricesList, setGoldPricesList] = useState<IGold>({});

  const getCurrencyList = useCallback(async () => {
    try {
      const listOfCurrencies = await CurrencyAPI.getCurrencies();
      if (listOfCurrencies) {
        const { result } = listOfCurrencies;
        const currencyCodes = ['USD', 'EUR', 'GBP'];
        currencyCodes.forEach((code) => {
          let matchedCurrencies = result
            .filter((currency: ICurrency) =>
              currency.code ? currency.code.includes(code) : null
            )
            .find((item: ICurrency) => item);

          setAllCurrencies((prevState) => [...prevState, matchedCurrencies]);
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getGoldPricesList = useCallback(async () => {
    try {
      const listOfGoldPrices = await CurrencyAPI.getGoldPrices();
      if (listOfGoldPrices) {
        const { result } = listOfGoldPrices;
        const gramsOfGold = result.find(
          (goldCurrency: IGold) => goldCurrency.name === 'Gram Altın'
        );
        setGoldPricesList(gramsOfGold);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      // getCurrencyList().catch(console.error);
      // getGoldPricesList().catch(console.error);
    }

    setLoading(true);
  }, [loading]);

  return (
    <section className='exchange'>
      {allCurrencies &&
        allCurrencies.map((currency: ICurrency, index: number) => {
          const { code } = currency;
          if (code) {
            if (code.includes('USD')) {
              return (
                <div className='exchange__item' key={index}>
                  <div className='exchange__item__info'>
                    <div className='exchange__item__image icon--dollar'>
                      <img src={Dollar} alt='dollar' />
                    </div>
                    <div className='exchange__item__wrapper'>
                      <span className='exchange__item__title'>{DOLAR}</span>
                      <span className='exchange__item__status'>
                        {CURRENCY_STATUS}
                      </span>
                    </div>
                    <span className='exchange__item__amount'>
                      {currency.selling}
                    </span>
                  </div>
                </div>
              );
            }
            if (code.includes('EUR')) {
              return (
                <div className='exchange__item' key={index}>
                  <div className='exchange__item__info'>
                    <div className='exchange__item__image icon--euro'>
                      <img src={Euro} alt='euro' />
                    </div>
                    <div className='exchange__item__wrapper'>
                      <span className='exchange__item__title'>{EURO}</span>
                      <span className='exchange__item__status'>
                        {CURRENCY_STATUS}
                      </span>
                    </div>
                    <span className='exchange__item__amount'>
                      {currency.selling}
                    </span>
                  </div>
                </div>
              );
            }
            if (code.includes('GBP')) {
              return (
                <div className='exchange__item' key={index}>
                  <div className='exchange__item__info'>
                    <div className='exchange__item__image icon--sterlin'>
                      <img src={Sterlin} alt='sterlin' />
                    </div>
                    <div className='exchange__item__wrapper'>
                      <span className='exchange__item__title'>{STERLIN}</span>
                      <span className='exchange__item__status'>
                        {CURRENCY_STATUS}
                      </span>
                    </div>
                    <span className='exchange__item__amount'>
                      {currency.selling}
                    </span>
                  </div>
                </div>
              );
            }
          }
        })}
      {goldPricesList && goldPricesList.selling && (
        <div className='exchange__item'>
          <div className='exchange__item__info'>
            <div className='exchange__item__image icon--gold'>
              <img src={Gold} alt='gold' />
            </div>
            <div className='exchange__item__wrapper'>
              <span className='exchange__item__title'>{GRAM_ALTIN}</span>
              <span className='exchange__item__status'>{CURRENCY_STATUS}</span>
            </div>
            <span className='exchange__item__amount'>
              {goldPricesList.selling}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Exchange;

export interface IGold {
  buying?: number;
  buyingstr?: string;
  date?: string;
  datetime?: string;
  name?: string;
  rate?: number;
  selling?: number;
  sellingstr?: string;
  time?: string;
}

export interface ICurrency extends IGold {
  calculated?: number;
  code?: string;
}

export interface ICurrencyList {
  result: Array<ICurrency>;
}

export interface IGoldList {
  result: Array<IGold>;
}

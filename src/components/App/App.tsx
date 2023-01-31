import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Form from '../Form';
import axios from 'axios';
import { IData } from '../../Interfaces';

function App() {
  const [data, setData] = useState<IData>({
    occupations: [],
    states: [],
  });
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get<IData>(
        'https://frontend-take-home.fetchrewards.com/form',
      );
      setData(res.data);
    };
    fetch();
  }, []);
  return (
    <div className='wrapper'>
      <Header />
      <Form occupations={data.occupations} states={data.states} />
    </div>
  );
}

export default App;

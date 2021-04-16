import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
import axios from '../axios/axios';
import Opstions from '../component/Options/Options'
function App() {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState([])
  useEffect(() => {
    const timer = setTimeout(() => {
      const query = `?name=${search}`
      axios.get("/api/character/" + query).then(res => {
        const result = res.data.results;
        const data = result.map(el => {
          return {
            id: el.id,
            name: el.name
          }
        })
        setOptions(data)
      })
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [search])
  const selectName = (name) => {
    setSearch(name);
    setDisplay(false);
  }
  return (
    <div className={classes.Container}>
      <input type="search" value={search} onClick={() => setDisplay(!display)} onChange={(event) => setSearch(event.target.value)} placeholder="Type to Search" />
      {display && <Opstions data={options} selectName={selectName} />}
    </div>
  );
}

export default App;

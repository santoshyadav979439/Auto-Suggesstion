import React, { useEffect, useState } from 'react';
import classes from'./App.module.css';
import axios from 'axios';
import OpstionsComp from '../component/OptionsComp/OptionsComp'
function App() {
  const [display, setDisplay] = useState(false);
  const [search,setSearch] =useState('');
  const [options,setOptions]= useState([])
  useEffect(()=>{
   const timer= setTimeout(()=>{
     if(search.length>0)
     setDisplay(true)
     const query=`?name=${search}`
      axios.get("https://rickandmortyapi.com/api/character/"+query).then(res=>{
        const result=res.data.results;
        const data=result.map(el=>{
          return {
            id:el.id,
            name:el.name
          }
        })
        setOptions(data)
      })
    },500)
 return ()=>{
   clearTimeout(timer)
 }
  },[search])
  return (
    <div>
      <input type ="search" value={search} onChange={(event)=>setSearch(event.target.value)} />
    {display && <OpstionsComp data={options} />}  
    </div>
  );
}

export default App;

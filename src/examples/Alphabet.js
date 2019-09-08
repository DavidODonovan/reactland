import React, { useState, useEffect} from 'react';
import { shuffle } from 'd3-array';
import { ReactLand } from '../';
import { D3Alphabet }  from 'd3land';

const Alpha=(props)=>{
  const [data, setData] = useState([]);

  const generateData=()=>{
    let arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push({letter: arr[i], id: i});
    };
    shuffle(newArr);
    const slicedAndDiced = newArr.slice(Math.floor(Math.random()*26));
    setData(slicedAndDiced);
  };

  useEffect(()=>{
    generateData();
  }, []);

  useEffect(()=>{
    if(props.clicked===true)
      generateData();
  }, [props.clicked]);

  return (
    <div style={{display: 'grid', height: '100%', grid: '50px 1fr/ 1fr'}}>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={generateData}>update data</button>
      </div>

      <ReactLand D3Class={D3Alphabet} data={data}/>
    </div>
  );
}

export default Alpha;

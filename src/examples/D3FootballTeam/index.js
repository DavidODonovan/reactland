import React, { useState, useEffect} from 'react';
import { shuffle } from 'd3-array';
import { ReactLand } from '../../index';
import D3Nexus from './D3Nexus';

const Coach=(props)=>{
  const [players, setPlayers] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cut, setCut] = useState([]);

  const rand=(min,max)=>{
    return ( min+Math.round(Math.random()*max) );
  };

  const createPlayer=(id)=>{
    return {
            id: id,
            stamina: rand(5,10),
            x: rand(1,24),
            y: rand(1,8)
           }
  };

  const updatePlayers = ()=>{
    if(players.length===11){
      setCut(players.splice(rand(1,5),rand(1,5)));
    } else {
      cut.forEach((p)=>players.push(p))
    }
    let temp = players.map((d)=>createPlayer(d.id));
    setPlayers(temp);
  };

  useEffect(()=>{
    let init = [];
    for(let i=0; i<11; i++){
      init.push(createPlayer(i+1));
    };
    setPlayers(init);
  },[]);

  useEffect(()=>{
    if(props.clicked===true)
      updatePlayers();
  }, [props.clicked]);

  return (
    <div style={{display: 'grid', height: '100%', grid: '50px 1fr /1fr'}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={updatePlayers}>update data</button>
      </div>
      <ReactLand D3Class={D3Nexus} data={players}/>
    </div>
  );
}

export default Coach;

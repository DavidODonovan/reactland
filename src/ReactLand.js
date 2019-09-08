import React from 'react';
import { Provider } from 'react-dims';
import PropTypes from 'prop-types';
import ReactNode from './ReactNode';
import ThePattern from './ThePattern';
import Football from './examples/D3FootballTeam';
import Alphabet from './examples/D3Alphabet';

const ReactLand=(props)=>{
  if(props.example==='alphabet'){
    return (
      <Provider debounce={props.debounce}>
        <Alphabet/>
      </Provider>
    )
  }
  else if(props.example==='football'){
    return (
      <Provider debounce={props.debounce}>
        <Football/>
      </Provider>
    )
  } else {
    return (
      <Provider debounce={props.debounce}>
        <ReactNode D3Class={props.D3Class} data={props.data}/>
      </Provider>
    )
  }
};

ReactLand.propTypes = {
  data: PropTypes.array,
  D3Class: PropTypes.func,
  debounce: PropTypes.number
};

ReactLand.defaultProps = {
  data: [4,3,7,2,2,2,2,7,3,4],
  D3Class: ThePattern,
  debounce: 100
};

export default ReactLand;

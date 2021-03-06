import React, { useRef, useState, useEffect } from 'react';
import { withContext } from 'react-dims';

const ReactNode = (props)=>{
  const {data, dims, D3Class} = props;
  const domNode = useRef(null);
  const [canvas, createCanvas] = useState(null);
  const [vizInitialized, setVizInitialized] = useState(false);

  useEffect(()=>{
    createCanvas(()=>new D3Class(domNode.current));
  },[]);

  useEffect(()=>{
    if(data.length>1 && dims.width && vizInitialized===false){
      canvas.init(data, dims);
      setVizInitialized(()=>true);
    };
  },[data, dims]);

  useEffect(()=>{
    vizInitialized && canvas.updateData(data);
  },[data]);

  useEffect(()=>{
    vizInitialized && canvas.updateDims(dims);
  },[dims]);

  return (
    <div ref={domNode} style={{display: 'grid', height: '100%'}}/>
  )
};

export default withContext(ReactNode);

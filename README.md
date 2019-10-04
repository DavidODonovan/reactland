<h2 align="center">ReactLand</h2>
<p align="center">
<strong>A React component that demonstrates fully responsive D3 charts.</strong>
<br><br>

<!-- downloads per week-->
<a href="https://npmjs.com/package/reactland">
  <img src="https://img.shields.io/npm/dw/reactland.svg"/>
</a>

<!-- npm version -->
<a href="https://npmjs.com/package/reactland">
  <img src="https://img.shields.io/npm/v/reactland.svg"/>
</a>

<a href="https://github.com/DavidODonovan/reactland#maintenance-status">
  <img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg"/>
</a>

</p>
Requires React 16.0.0 or higher.

Currently, the primary purpose of this React component is to quickly demonstrate some examples of fully responsive D3 visualisations inside of a React app.


```code
npm i reactland

```
<strong>Usage</strong>

Nest this component anywhere inside of your app, whilst ensuring you style the parent component with a reasonable CSS height property.

Toggle between the two example charts by specifying a prop of 'example' with a value of either 'alphabet' or 'football';

```code
import ReactLand from 'reactland';

function App() {
  return (
    <div style={{height: '100vh'}}>
      <ReactLand example='alphabet'/>
    </div>
  )
};

```

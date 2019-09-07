<p align="center"><img src="logo.svg" width=250></p>
<h2 align="center">ReactLand</h2>
<p align="center">
<strong>A placeholder for a notional set of React utilities</strong>
<br><br>
<a href="https://npmjs.com/package/reactland"><img src="https://img.shields.io/npm/dw/reactland.svg"></a>

<a href="https://npmjs.com/package/reactland"><img src="https://img.shields.io/npm/v/reactland.svg"></a>


<a href="https://github.com/DavidODonovan/reactland#maintenance-status">
  <img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />
</a>
</p>


Currently in development, will require React version 16.0.0 or greater.

A demonstration pattern for creating loosely coupled, dynamic and fully responsive data visualisations by combining D3 and React.

This library contains a basic set of React components that act as a logic container wrapping your D3 chart.  

Also contains a set of vanilla JS D3 classes, which, when used in unison with the React pattern, form a complete system for dataviz in React.

The D3 logic is so loosely coupled that it is readily portable to other frameworks such as Vue or Angular.

The React components take care of responsive design by forcing the svg canvas to take on various sizes.


Football example simple illustrates the D3 'General Update Pattern' - which is a source of great confusion for everyone starting out with D3.js. It doesn't have to be so hard; this visualisation, in conjunction with the code base, should give you enough of an understanding of the pattern to start creating dynamic interactive visualisations of your own, with ever changing data sets.

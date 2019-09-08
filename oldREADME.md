<h2 align="center">ReactLand</h2>
<p align="center">
<strong>Fully responsive D3 visualisations inside of React.</strong>
<br><br>
<a href="https://npmjs.com/package/reactland"><img src="https://img.shields.io/npm/dw/reactland.svg"></a>

<a href="https://npmjs.com/package/reactland"><img src="https://img.shields.io/npm/v/reactland.svg"></a>


<a href="https://github.com/DavidODonovan/reactland#maintenance-status">
  <img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />
</a>
</p>

A demonstration pattern for creating loosely coupled, dynamic and fully responsive data visualisations by combining D3 and React.

A demonstration set of React bindings to help build dynamic, responsive, scaleable, loosely coupled D3 visualisations inside of React.

Requires React version 16.0.0 or greater.
Leverages <strong>react-dims</strong> and <strong>D3Land</strong><---provide links

This library contains a basic set of React components that act as a logic container wrapping your D3 chart.  

D3Land; Also contains a set of vanilla JS D3 classes, which, when used in unison with the React pattern, form a complete loosely coupled system for dataviz in React.

The D3 logic takes care of all data binding, rendering and transitioning between states, and is so loosely coupled with React that it is readily portable to other frameworks such as Vue or Angular.

The React components take care of responsive design by forcing the svg canvas to take on various sizes., pass dims down as props, fetch, format and feed data to D3.

Example 'Football' pattern also demonstrates the D3 'General Update Pattern', in a simple to reason about manner. Hopefully making this notoriously difficult concept fairly easy to comprehend.

Football example simple illustrates the D3 'General Update Pattern' - which is a source of great confusion for everyone starting out with D3.js. It doesn't have to be so hard; this visualisation, in conjunction with the code base, should give you enough of an understanding of the pattern to start creating dynamic interactive visualisations of your own, with ever changing data sets.

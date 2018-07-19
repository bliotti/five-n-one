import React from "react";
import fetch from "isomorphic-fetch";
import { map } from "ramda";
import Component from "@reactions/component";

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  );
};

const Colors = props => {
  return (
    <Component
      initialState={{ colors: [] }}
      didMount={({ state, setState }) => {
        fetch("http://localhost:5000/colors")
          .then(res => res.json())
          .then(colors => setState({ colors }));
      }}
    >
      {({ state, setState }) => (
        <div>
          <h1>Colors</h1>
          <ul>{map(li, state.colors)}</ul>
        </div>
      )}
    </Component>
  );
};

// class Colors extends React.Component {
//     constructor() {
//         super()
//         this.state = { colors: [] }
//     }
//     componentDidMount() {
//         fetch('http://localhost:5000')
//             .then(res => res.json())
//             .then(colors => this.setState({ colors })
//   }

//     render() {
//         return (
//             <div>
//                 <h1>Colors</h1>
//                 <ul>{map(li, this.state.colors)}</ul>
//             </div>
//         )

//     }
// }

export default Colors;

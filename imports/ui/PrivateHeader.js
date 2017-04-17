import React from 'react';
import { Accounts } from 'meteor/accounts-base';


// Stateless function component.
// Created as a variable because PrivateHeader needs to exist to check the propTypes down below.
const PrivateHeader = (props) => {

  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => Accounts.logout()}>Logout</button>
      </div>
    </div>
  );
}

// export default class PrivateHeader extends React.Component {
//   onLogout(){
//     Accounts.logout();
//   }
//
//   render(){
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.onLogout.bind(this)}>Logout</button>
//       </div>
//     );
//   }
// }


PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default PrivateHeader;

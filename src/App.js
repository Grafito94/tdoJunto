import React from 'react';
import PersonCard from './components/PersonCard/PersonCard';
import ButtonCard from './components/ButtonCard/ButtonCard';

class App extends React.Component {

  render() {
    return(
      <div className="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">hairColor</th>
              <th scope="col">Likes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><PersonCard firstName = { "Santiago" }/></td>
              <td><PersonCard lastName = { "Gutierrez" }/></td>
              <td><PersonCard age = { 28 }/></td>
              <td><PersonCard hairColor = { "Black" }/></td>
              <td><ButtonCard firstName = { "Santiago" } lastName = { "Gutierrez" } /></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td><PersonCard firstName = { "Mambo" }/></td>
              <td><PersonCard lastName = { "Jose" }/></td>
              <td><PersonCard age = { 30 }/></td>
              <td><PersonCard hairColor = { "Blondy" }/></td>
              <td><ButtonCard firstName = { "Mambo" } lastName = { "Jose" } /></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><PersonCard firstName = { "Cocoa" }/></td>
              <td><PersonCard lastName = { "Jose" }/></td>
              <td><PersonCard age = { 10 }/></td>
              <td><PersonCard hairColor = { "Brown" }/></td>
              <td><ButtonCard firstName = { "Cocoa" } lastName = { "Jose" } /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default App;


import React from 'react';
// import ReactDOM from 'react-dom'
import '../styles/App.scss';
// import 'font-awesome/css/font-awesome.min.css';
import UserCard from './UserCard';
import image from '../images/image.jpg';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

      return (
        <div className="App" id="root">
          <UserCard name='Gador Villanueva' 
                    date="Todos los días son iguales"
                    image={image}
          />
          
        </div>
      )
  }
}



// ReactDOM.render(
//   <UserCard />,
//   document.getElementById('root')
// );
export default App;


import React from 'react';
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





class UserCard extends React.Component {
 
  
  render() {
    
      const header =(
      <header className="header">
           <div className="imageShow"><img src={this.props.image} /></div>
           <div className="user">
           <h2>{this.props.name}</h2>
              <p className="date">{this.props.date}</p>
           </div>
         </header>)
      
    const main =(
      <main className="main">
        <div className="main_text">
          <p>Visita el canal de YouTube Music para descubrir a los artistas y las listas de reproducción más destacados del momento. Suscríbete para no perderte las noved.Visita el canal de YouTube Music para descubrir a los artistas y las listas de reproducción más destacados del momento. Suscríbete para no perderte las noved.</p>
        </div>
      

      <div className="article-footer">
        <p className="more">Leer más...</p>
        <p className="likes">37 <i className="fas fa-heart"></i></p>
      </div>
      </main>
    )
  
    const appRoot = (
      <div className="app">
        <div className="card">
          {header}
          {main}
        </div>
      </div>
    )
    return appRoot;
    
    
  }
 
  
}









export default UserCard;
import React, { Component } from 'react';
import './App.css';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Slider />
        <SubInfoContainer />
        <BodySuperior />
      </div>
    )
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg text-light bg-dark">
        <a className="navbar-brand">Dark Owls</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i className="material-icons md-light">menu</i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link linkNavBar" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link linkNavBar" href="#">League of Legends</a>
            </li>
            <li className="nav-item">
              <a className="nav-link linkNavBar" href="#">Hearthstone</a>
            </li>
            <li className="nav-item">
              <a className="nav-link linkNavBar" href="#">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link linkNavBar" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

class Slider extends Component {
  render() {
    return (
      <div className="row m-0">
        <div className="col-sm-8 p-0">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={require('./download.svg')} alt="First slide"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>League of Legends</h5>
                    <p>O game mais KappaPride</p>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={require('./download.svg')} alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Hearthstone</h5>
                  <p>O game mais Resident Sleeper</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-sm-4" style={{backgroundColor: '#A3A3AB'}}>
          <InfosImportantesContainer />
        </div>
      </div>
    )
  }
}

class InfosImportantesContainer extends Component {
  render() {
    return (
      <div className="m-2">
        <blockquote className="blockquote text-center">
          <p className="mb-0">Vocês são todos uns 4heads!</p>
          <footer className="blockquote-footer">Katreque em <cite title="Source Title">O PogChamp</cite></footer>
        </blockquote>
        <blockquote className="blockquote text-center">
          <p className="mb-0">Biri biri!</p>
          <footer className="blockquote-footer">Biri biri em <cite title="Source Title">SehLoiro</cite></footer>
        </blockquote>
        <blockquote className="blockquote text-center">
          <p className="mb-0">Lago ai, lagou aqui?</p>
          <footer className="blockquote-footer">Yoda em <cite title="Source Title">Kappa Pride City</cite></footer>
        </blockquote>

      </div>
    )
  }
}

class SubInfoContainer extends Component {
  render() {
    return (
      <div className="container-fluid mb-4">
        <div className="col-sm-12 m-0 mt-3 text-center">
          <h1 className="display-2 d-none d-md-block">KappaPride</h1>
          <h1 className="display-5 d-sm-none">KappaPride</h1>
          <h3 className="text-muted">Subtítulo PogChamp</h3>
        </div>
        <div className="container mt-4 text-center">
          <img src={require("./socialMedia.svg")} className="rounded m-2"></img>
          <img src={require("./socialMedia.svg")} className="rounded m-2"></img>
          <img src={require("./socialMedia.svg")} className="rounded m-2"></img>
          <img src={require("./socialMedia.svg")} className="rounded m-2"></img>
        </div>
      </div>
    )
  }
}

class BodySuperior extends Component {
  render() {
    return (
      <div className="row m-0 p-4" style={{backgroundColor: '#A3A3AB'}}>
        <div className="col-sm-12 text-center">
          <h1>Form Futuro Kappa Pride Fon</h1>
          <h1>Form Futuro Kappa Pride Fon</h1>
          <h1>Form Futuro Kappa Pride Fon</h1>
          <h1>Form Futuro Kappa Pride Fon</h1>
          <h1>Form Futuro Kappa Pride Fon</h1>
          <h1>Form Futuro Kappa Pride Fon</h1>
          <h1>Form Futuro Kappa Pride Fon</h1>
          <h1>Form Futuro Kappa Pride Fon</h1>
          <h1>Form Futuro Kappa Pride Fon</h1>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Homepage />
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Homepage />
    );
  }
}

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
  constructor(props) {
    super(props);
    this.state = {
      toggleFromObjetivo: false,
      toggleFromParticipar: false,
      toggleFromRegras: false
    }

    this.toggleFromObjetivo = this.toggleFromObjetivo.bind(this);
    this.toggleFromParticipar = this.toggleFromParticipar.bind(this);
    this.toggleFromRegras = this.toggleFromRegras.bind(this);
  }

  toggleFromObjetivo() {
    let estado = this.state.toggleFromObjetivo;
    this.toggleOffAll();
    this.setState({
      toggleFromObjetivo: !estado
    })
  }

  toggleFromParticipar() {
    let estado = this.state.toggleFromParticipar;
    this.toggleOffAll();
    this.setState({
      toggleFromParticipar: !estado
    })
  }

  toggleFromRegras() {
    let estado = this.state.toggleFromRegras;
    this.toggleOffAll();
    this.setState({
      toggleFromRegras: !estado
    })
  }

  toggleOffAll() {
    this.setState({
      toggleFromObjetivo: false,
      toggleFromParticipar: false,
      toggleFromRegras: false
    })
  }

  render() {
    return (
      <div className="container-fluid mb-4">
        <div className="col-md-12 m-0 mt-3 text-center">
          <h1 className="display-2 d-none d-md-block">KappaPride</h1>
          <h1 className="display-5 d-sm-none">KappaPride</h1>
          <h3 className="text-muted">Subtítulo PogChamp</h3>
        </div>
        {/*Grandes Devices */}
        <div className="col-md-12 mt-4 text-center d-none d-md-block">
          <img src={require("./socialMedia.svg")} className="rounded m-2" onClick={this.toggleFromObjetivo}></img>
          <img src={require("./socialMedia.svg")} className="rounded m-2" onClick={this.toggleFromParticipar}></img>
          <img src={require("./socialMedia.svg")} className="rounded m-2" onClick={this.toggleFromRegras}></img>
          <Objetivo toggle={this.state.toggleFromObjetivo} />
          <Participar toggle={this.state.toggleFromParticipar}/>
          <Regras toggle={this.state.toggleFromRegras}/>
        </div>
        {/*Mobile Devices */}
        <div className="col-md-12 mt-4 text-center d-sm-none">
          <img src={require("./socialMedia.svg")} className="rounded m-2" onClick={this.toggleFromObjetivo}></img>
          <Objetivo toggle={this.state.toggleFromObjetivo} />
          <img src={require("./socialMedia.svg")} className="rounded m-2" onClick={this.toggleFromParticipar}></img>
          <Participar toggle={this.state.toggleFromParticipar}/>
          <img src={require("./socialMedia.svg")} className="rounded m-2" onClick={this.toggleFromRegras}></img>
          <Regras toggle={this.state.toggleFromRegras}/>
        </div>
      </div>
    )
  }
}

class Objetivo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.toggle?'d-block fadeinAnimation':'d-none fadeinAnimation'}>
        <h1>Objetivo</h1>
        <p>O objetivo é ser o objetivo dentro do objetivo objetivado sempre objetivando os nosso objetivos. Kappa</p>
      </div>
    )
  }
}

class Participar extends Component {
  render() {
    return (
      <div className={this.props.toggle?'d-block fadeinAnimation':'d-none fadeinAnimation'}>
        <h1>Participar</h1>
        <p>O objetivo é ser o objetivo dentro do objetivo objetivado sempre objetivando os nosso objetivos. Kappa</p>
      </div>
    )
  }
}

class Regras extends Component {
  render() {
    return (
      <div className={this.props.toggle?'d-block fadeinAnimation':'d-none fadeinAnimation'}>
        <h1>Regras</h1>
        <p>O objetivo é ser o objetivo dentro do objetivo objetivado sempre objetivando os nosso objetivos. Kappa</p>
      </div>
    )
  }
}

class BodySuperior extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esconderFormLeague: false,
      esconderFormHearth: false
    };

    this.toggleFromLeague = this.toggleFromLeague.bind(this);
    this.toggleFromHearthstone = this.toggleFromHearthstone.bind(this);
  }

  toggleFromLeague () {
    let estado = this.state.esconderFormLeague;
    this.setState({
      esconderFormLeague: !estado
    })
  }

  toggleFromHearthstone () {
    let estado = this.state.esconderFormHearth;
    this.setState({
      esconderFormHearth: !estado
    })
  }

  render() {
    return (
      <div className="row m-0 p-4" style={{backgroundColor: '#A3A3AB'}}>
        <div className="col-sm-12 mb-4 text-center">
          <h1>Clique e faça já sua inscrição para nossa peneira!</h1>
          <div className="m-4">
            <button className="mr-1 btn btn-lg btn-dark" onClick={this.toggleFromLeague}>League of Legends</button>
            <button className="ml-1 btn btn-lg btn-light" onClick={this.toggleFromHearthstone}>Hearthstone</button>
          </div>
        </div>
        <div className={this.state.esconderFormLeague?'d-block':'d-none'}>
          <p>NANI</p>
          <div className="col-sm-5 mb-4 mt-2 container-fluid embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src="https://docs.google.com/forms/d/e/1FAIpQLSeWOWhQsd-Uau-SZ3VeV5DKyqReo2yjYZb1m6Wwid61X1aBtQ/viewform?embedded=true" title="LoL" width="660" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Carregando…</iframe>
          </div>
        </div>

        <div className={this.state.esconderFormHearth?'d-block':'d-none'}>
          <p>NANI</p>
          <div className="col-sm-5 mb-4 mt-2 container-fluid embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src="https://docs.google.com/forms/d/e/1FAIpQLSd9x_iW4y6vy1GqrXKrSqptUOV7nx0XgBDkp_lO1WKh3MNuGA/viewform?embedded=true" title="HS" width="660" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Carregando…</iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

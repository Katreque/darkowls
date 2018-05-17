import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

const idHome = "home";
const idInformacao = "informacao";
const idInscricao = "inscricao";
const idContato = "contato";

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
      <div id={idHome}>
        <Navbar />
        <Slider />
        <SubInfoContainer />
        <BodySuperior />
        <BodyInferior />
        <Footer />
      </div>
    )
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  smoothScroll(id) {
    $('html').animate({
        scrollTop: $('#' + id).offset().top
      }, 'slow')
  }

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
              <a className="nav-link linkNavBar handPointer" onClick={() => this.smoothScroll(idHome)}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link linkNavBar handPointer" onClick={() => this.smoothScroll(idInformacao)}>Informações</a>
            </li>
            <li className="nav-item">
              <a className="nav-link linkNavBar handPointer" onClick={() => this.smoothScroll(idInscricao)}>Inscrição</a>
            </li>
            <li className="nav-item">
              <a className="nav-link linkNavBar handPointer" onClick={() => this.smoothScroll(idContato)}>Contato</a>
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
          <div id="mainSlider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={require('./darkOwlsCapa1280x640.png')} alt="First slide"/>
              </div>
            </div>
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
      <div className="m-2 mt-3 mb-3">
        <div className="card customCard text-center text-white bg-dark m-2">
          <div className="customCard card-body">
            <h5 className="card-title">League & HS</h5>
            <p className="card-text m-0">Os primeiros times da Dark Owls</p>
          </div>
        </div>
        <div className="card text-center text-white bg-dark m-2">
          <div className="customCard card-body">
            <h5 className="card-title">As inscrições estão abertas!</h5>
            <p className="card-text m-0">Saiba como participar da peneira abaixo</p>
          </div>
        </div>
        <div className="card customCard text-center text-white bg-dark m-2">
          <div className="customCard card-body">
            <h5 className="card-title">Fique atento as datas!</h5>
            <p className="card-text m-0">As inscrições se encerram no dia 26/05</p>
          </div>
        </div>
      </div>
    )
  }
}

class SubInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleFromObjetivo: true,
      toggleFromParticipar: false,
      toggleFromRegras: false
    }

    this.arrayIdButtons = [
      {
        id: 'botaoObjetivoDesktop'
      },
      {
        id: 'botaoParticiparDesktop'
      },
      {
        id: 'botaoInstitucionalDesktop'
      },
      {
        id: 'botaoObjetivoMobile'
      },
      {
        id: 'botaoParticiparMobile'
      },
      {
        id: 'botaoInstitucionalMobile'
      }
    ];

    this.toggleFromObjetivo = this.toggleFromObjetivo.bind(this);
    this.toggleFromParticipar = this.toggleFromParticipar.bind(this);
    this.toggleFromRegras = this.toggleFromRegras.bind(this);
  }

  toggleFromObjetivo() {
    let estado = this.state.toggleFromObjetivo;
    this.toggleDefault();
    this.setState({
      toggleFromObjetivo: !estado
    }, () => {
      this.toggleBotaoAtivo()
      return this.smoothScrollInfo(idInformacao);
    })
  }

  toggleFromParticipar() {
    let estado = this.state.toggleFromParticipar;
    this.toggleDefault();
    this.setState({
      toggleFromParticipar: !estado
    }, () => {
      this.toggleBotaoAtivo();
      return this.smoothScrollInfo(idInformacao);
    })
  }

  toggleFromRegras() {
    let estado = this.state.toggleFromRegras;
    this.toggleDefault();
    this.setState({
      toggleFromRegras: !estado
    }, () => {
      this.toggleBotaoAtivo();
      return this.smoothScrollInfo(idInformacao);
    })
  }

  toggleDefault() {
    this.setState({
      toggleFromObjetivo: false,
      toggleFromParticipar: false,
      toggleFromRegras: false
    })
  }

  toggleBotaoAtivo() {
    let indicesAtivos = [];

    if(!!this.state.toggleFromObjetivo) {
      indicesAtivos = [0, 3];
    }

    if(!!this.state.toggleFromParticipar) {
      indicesAtivos = [1, 4];
    }

    if(!!this.state.toggleFromRegras) {
      indicesAtivos = [2, 5];
    }

    for(let i = 0; i < this.arrayIdButtons.length; i++) {
      $('#' + this.arrayIdButtons[i].id).removeClass('btn-outline-dark');
      if (i === indicesAtivos[0] || i === indicesAtivos[1]) {
        $('#' + this.arrayIdButtons[i].id).addClass('btn-dark');
      } else {
        $('#' + this.arrayIdButtons[i].id).addClass('btn-outline-dark');
      }
    }
  }

  smoothScrollInfo(id) {
    $('html').animate({
        scrollTop: $('#' + id).offset().top
      }, 'slow')
  }

  render() {
    return (
      <div id={idInformacao} className="container-fluid mb-4">
        <div className="col-md-12 m-0 mt-3 text-center">
          <h1 className="display-2 d-none d-md-block">Hora do Duelo!</h1>
          <h1 className="display-5 d-sm-none">Hora do Duelo!</h1>
          <h3 className="text-muted">Conheça mais sobre a atlética da Ciência da Computação do UNIFESO</h3>
        </div>
        {/*Grandes Devices */}
        <div className="container">
          <div className="row">
            <div className="col-sm-4 mt-4 text-center d-none d-md-block">
              <button id="botaoObjetivoDesktop" className="btn btn-lg btn-dark btn-block" onClick={this.toggleFromObjetivo}>Objetivo</button>
            </div>
            <div className="col-sm-4 mt-4 text-center d-none d-md-block">
              <button id="botaoParticiparDesktop" className="btn btn-lg btn-outline-dark btn-block" onClick={this.toggleFromParticipar}>Participe</button>
            </div>
            <div className="col-sm-4 mt-4 text-center d-none d-md-block">
              <button id="botaoInstitucionalDesktop" className="btn btn-lg btn-outline-dark btn-block" onClick={this.toggleFromRegras}>Institucional</button>
            </div>
          </div>
          <div className="col-sm-12 mt-4 text-center d-none d-md-block">
            <Objetivo toggle={this.state.toggleFromObjetivo} />
            <Participar toggle={this.state.toggleFromParticipar}/>
            <Regras toggle={this.state.toggleFromRegras}/>
          </div>
        </div>
        {/*Mobile Devices */}
        <div className="col-sm-12 mt-4 text-center d-sm-none">
          <div className="container">
            <button id="botaoObjetivoMobile" className="btn btn-lg btn-dark btn-block mb-2" onClick={this.toggleFromObjetivo}>Objetivo</button>
            <Objetivo toggle={this.state.toggleFromObjetivo} />

            <button id="botaoParticiparMobile" className="btn btn-lg btn-outline-dark btn-block mt-2 mb-2" onClick={this.toggleFromParticipar}>Participe</button>
            <Participar toggle={this.state.toggleFromParticipar}/>

            <button id="botaoInstitucionalMobile" className="btn btn-lg btn-outline-dark btn-block mt-2 mb-2" onClick={this.toggleFromRegras}>Institucional</button>
            <Regras toggle={this.state.toggleFromRegras}/>
          </div>
        </div>
      </div>
    )
  }
}

class Objetivo extends Component {
  render() {
    return (
      <div className={this.props.toggle?'d-block':'d-none'}>
        <div className="card text-white bg-dark m-2">
          <h1 className="card-header text-center fadeinAnimation">Objetivo</h1>
          <div className="card-body text-left fadeinAnimation m-3">
            <p className="corTexto">
              Para este primeiro ano de Atlética, o objetivo é formar e estabelecer times fortes
              e competitivos para poderem disputar os principais campeonatos nacionais de e-Sports
              com foco universitário no ano que vem.
            </p>
            <p className="corTexto">
              Neste primeiro semestre, iremos focar no <strong className="text-white">League of Legends</strong> e <strong className="text-white">Hearthstone. </strong>
              Por serem jogos que já estamos mais acostumados de lidar, escolhemos para nos facilitar em relação
              a organização e no gerenciamento das equipes.
            </p>
            <p className="corTexto">
              Com base nas experiências, feedbacks e andamento dos times, nossa meta é no segundo semestre
              criar <strong className="text-white">mais dois times</strong> de outros games para assim entrarem na Atlética.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

class Participar extends Component {
  render() {
    return (
      <div className={this.props.toggle?'d-block':'d-none'}>
        <div className="card text-white bg-dark m-2">
          <h1 className="card-header text-center fadeinAnimation">Participe</h1>
          <div className="card-body text-left fadeinAnimation m-3">
            <p className="corTexto">
              Fazer sua inscrição na peneira é bem simples. Basta ir na sessão de <strong className="text-white">Inscrição</strong>, escolher o formulário
              do jogo no qual quer participar, preenchê-lo e ficar atento em seu email. Data e avisos serão passados por lá.
            </p>
            <p className="corTexto">
              A peneira é totalmente <strong className="text-white">de graça</strong>, para que todos possam ter a oportunidade de participar.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

class Regras extends Component {
  render() {
    return (
      <div className={this.props.toggle?'d-block':'d-none'}>
        <div className="card text-white bg-dark m-2">
          <h1 className="d-none d-sm-block card-header text-center fadeinAnimation">Institucional</h1>
          <h2 className="d-block d-sm-none card-header text-center fadeinAnimation">Institucional</h2>
          <div className="card-body text-left fadeinAnimation m-3">
            <p className="corTexto">
              O cenário de e-Sports está em constante crescimento em todo o mundo e no Brasil não é diferente.
              Apesar do início do movimento, ainda é um campo pouco visto e reconhecido por muitas instituições.
            </p>
            <p className="corTexto">
               Iremos mostrar que através da <strong className="text-white">Dark Owls</strong>, fundada em 2018 por Renan "Katreque" Souza,
               podemos ter grande impacto positivo seja no cenário competitivo de e-Sports, para a instituição
               levando seu nome aos principais eventos nacionais e para os estudantes envolvidos na Atlética,
               ganhando experiência e conhecimento sobre o funcionamento da área, uma das mais aquecidas atualmente.
             </p>
          </div>
        </div>
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
      <div id={idInscricao} className="row m-0 p-4" style={{backgroundColor: '#A3A3AB'}}>
        <div className="col-sm-12 mb-4 text-center">
          <h1>Clique e faça já sua inscrição para nossa peneira!</h1>
          <div className="row mt-4">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4 d-none d-sm-block">
              <button className="btn btn-lg btn-dark btn-block" onClick={this.toggleFromLeague}>League of Legends</button>
              <button className="btn btn-lg btn-light btn-block" onClick={this.toggleFromHearthstone}>Hearthstone</button>
            </div>
            <div className="col-sm-4 d-block d-sm-none">
              <a className="btn btn-lg btn-dark btn-block" href="https://goo.gl/forms/qxekl3J9nvTgfrCe2" target="_blank" rel="noopener noreferrer">League of Legends</a>
              <a className="btn btn-lg btn-light btn-block" href="https://goo.gl/forms/bbmd2qCNSCAZaz3t2" target="_blank" rel="noopener noreferrer">Hearthstone</a>
            </div>
            <div className="col-sm-4">
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="d-flex justify-content-center">
            <div className={this.state.esconderFormLeague?'d-block':'d-none'}>
              <div className="d-none d-sm-block m-2 fadeinAnimation">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWOWhQsd-Uau-SZ3VeV5DKyqReo2yjYZb1m6Wwid61X1aBtQ/viewform?embedded=true" title="LoL" width="660" height="500" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
              </div>
            </div>
            <div className={this.state.esconderFormHearth?'d-block':'d-none'}>
              <div className="d-none d-sm-block m-2 fadeinAnimation">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd9x_iW4y6vy1GqrXKrSqptUOV7nx0XgBDkp_lO1WKh3MNuGA/viewform?embedded=true" title="HS" width="660" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Carregando…</iframe>
              </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

class BodyInferior extends Component {
  render() {
    return(
      <div id={idContato} className="row m-4">
        <div className="col-sm-12 text-center">
          <h1>Novidades em breve!</h1>
          <h3 className="text-muted d-none d-sm-block">Qualquer dúvida, dentre em contato pelo email: <strong>dacc.unifeso@gmail.com</strong></h3>
          <h4 className="text-muted d-block d-sm-none">Qualquer dúvida, dentre em contato pelo email: <strong>dacc.unifeso@gmail.com</strong></h4>
        </div>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return(
      <div>
        <div className="card-footer text-muted d-none d-sm-block">
          {/*<span className="text-left linkFooterColor">Dark Owls 2018 - Os Direitos são reservados</span>*/}
          <a href="https://github.com/Katreque/darkowls" target="_blank" rel="noopener noreferrer" className="linkFooterColor text-right">Renan "Katreque" Souza | GitHub</a>
        </div>
        <div className="card-footer text-muted text-center d-block d-sm-none">
          <a href="https://github.com/Katreque/darkowls" target="_blank" rel="noopener noreferrer" className="linkFooterColor text-right">Renan "Katreque" Souza | GitHub</a>
        </div>
      </div>
    )
  }
}

export default App;

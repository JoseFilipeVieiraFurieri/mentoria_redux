import React from 'react';
import { addEmail } from './redux/actions'
import { connect } from 'react-redux';
import './App.css';


class App extends React.Component {
  state = {
    emailLocal: '',
  }

  handleChange = ({target : { name, value }}) => {
    this.setState({
      [name] : value,
    })
  }

  handleClick = () => {
    const { emailLocal } = this.state;
    // o email local vem do proprio componente app é o state na linha acima, a intenção agora e subir ele para o estado global
    const { dispatch } = this.props;
    //pega a função dispatch que vem do props. esse metodo e alternativo aos mapDispatchToProps
    dispatch(addEmail(emailLocal))
    // add email e a função presente no index action da action. lembre que a função dispatch ela dispara a ação para o reducer
    // que por fim altera o estado global e armazena ele na store
  }

  // na descontrução voce pega pega o target depois descontroe do target o name e o value

  render () {
    const { emailGlobal } = this.props;
  return (
    <div className="App">
       <h1>Teste</h1>
       <label htmlFor='email'> Digite seu email: 
         <input type="text" name="emailLocal" id="email" onChange={ this.handleChange }/>
       </label>
       <button type="button" onClick={ this.handleClick }>Salvar</button>
       <span>{emailGlobal}</span>
    </div>
  );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
   emailGlobal: loginReducer.emailGlobal,
})

export default connect(mapStateToProps)(App);

// O connect passa a props dispatch que pé responsavel por disparar a ação para o reducer

// o mapStateToProps serve para vc pegar o estado que esta na store. Ela fica disponivel como props do componente e pode
// ser usada descontruindo do this props.

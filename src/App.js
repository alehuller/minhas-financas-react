import React from 'react';

import Login from './views/login'
import CadastroUsuario from './views/cadastroUsuario';

import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

class App extends React.Component {
  render() {
    return(
      <div>
            <CadastroUsuario />
      </div>
    )
  }
}

export default App //ele esta mostrando a funcao para toda a aplicacao poder utilizar essa funcao

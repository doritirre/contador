import React, { Component } from 'react';
import style from "./components/feed/style.css"

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: 'zerado',
            contador: 0
        }
        this.negativo = this.negativo.bind(this)
    };

    negativo() {
        let state = this.state;
        if (state.contador <= 0) {
            alert('Opa, zerou!!!');
            return
        }
        state.contador -= 1;
        if(state.contador -= 1) {
            return this.setState({nome: 'diminuindo...'})
        }
        this.setState(state)
    }

    render() {
        return (
            <div className="container">
                <h2 className="cont">contador</h2>
                <hr/>
                <h2 className="nome">{this.state.nome}</h2><br/><br/>
                <div className="contador">
                    <button className="negativo" onClick={this.negativo}> - </button>
                    <h2 className="num">{this.state.contador}</h2>
                    <button className="positivo" onClick={() => {
                        let state = this.state;                        
                        state.contador += 1;
                        if(state.contador += 1) {
                            return this.setState({nome: 'aumentando...'})
                        }
                        
                        this.setState(state);
                    }}> + </button>
                </div>
                
            </div>
        );
    }
}

 
 export default App;
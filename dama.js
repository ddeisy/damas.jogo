import React from 'react';
import Quadro from './Quadro';
import './Tabuleiro.css'

class Tabuleiro extends React.Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            tabu:[
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 2, 0, 2, 0, 2, 0],
                [0, 2, 0, 2, 0, 2, 0, 2],
                [2, 0, 2, 0, 2, 0, 2, 0]
            ],
            JogadorAtual: 1,
            posOr: null,
            posDes: null
        }
    }

    handleJogar(pos){
        if(this.state.posOr === null){
            if(this.state.tabu[pos.x][pos.y]!== this.state.JogAtual){
                return
            }
            else{
                this.setState({posOr : pos})
            }
        }
        else{
            if(this.posDes === null){
                if(this.state.tabu[pos.x][pos.y]=== this.state.JogadorAtual){
                    this.setState({posOr : pos})
                }
            }
        }
        if(this.state.posOr !== null) {
            if(this.state.pos !== 0){
                return
            }
            else{
                if(this.state.JogadorAtual === 1){
                    if(this.state.tabu[pos.x] === [pos.x + 1] && [pos.y] === [pos.y + 1]){
                        this.setState({ posDes : 1})
                    }
                    else{
                        return
                    }
                    if(this.state.tabu[pos.x] === [pos.x - 1] && [pos.y] === [pos.y + 1]){
                        this.setState({ posDes : 1}) 
                    }
                    else{
                        return
                    }
                }
                else{
                    if(this.state.tabu[pos.x] === [pos.x - 1] && [pos.y] === [pos.y - 1]){
                        this.setState({ posDes : 1})
                    }
                    else{
                        return
                    }
                    if(this.state.tabu[pos.x] === [pos.x + 1] && [pos.y] === [pos.y - 1]){
                        this.setState({ posDes : 1}) 
                    }
                    else{
                        return
                    }
                }
            }
        }
    }

    render() {
        let x = 0, y = 0;
        
        const rows = this.state.tabu.map((row) => {
            const r = row.map((n) => {
                return <Quadro x={x} y={y++} n={n}/>
            })

            y = 0;
            x = x + 1;
            return <div className="row">{r}</div>
        });

        return (
            <div className="tabuleiro">{rows}</div>
        )
    }
}

export default Tabuleiro;
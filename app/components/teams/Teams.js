import React from 'react';
import ReactDOM from 'react-dom';
import Api from '../../utils/api';

import TeamInfo from './TeamInfo'

class Teams extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamName: null,
            players: null
        }
    }

    componentDidMount() {
        const string = Api.constructUrl(this.props.location.pathname, "players");
       Api.callApi(string).then(data => {
           this.setState(() => {
               return {
                players: data.players 
               }
           })
        });
    }

    render() {
        return(
            <div>
                {!this.state.players ? <p className="loading">"Loading"</p> : 
                    <div>
                        {/* <h1 className="league-name">{this.state.table.leagueCaption}</h1> */}
                        {!this.state.players ? <p className="loading">The API doesn't have data on this...sorry!</p> : <TeamInfo team={this.state.players} /> }
                    </div>
                }
            </div>
        )
    }
    
}

module.exports = Teams; 
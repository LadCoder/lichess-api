import React, {useState} from 'react'
import { Table, Icon } from 'semantic-ui-react'
import TournamentWinsRow from './TournamentWinsRow';

function TournamentWinsTable({tournaments}) {
    const [players, setPlayers] = useState([])
    return (
        <Table celled padded>
            <Table.Header>
                <Table.Row textAlign="center">
                    <Table.HeaderCell singleLine>Player</Table.HeaderCell>
                    <Table.HeaderCell>Rating</Table.HeaderCell>
                    <Table.HeaderCell>Tournament Wins</Table.HeaderCell>
                    <Table.HeaderCell>Total Games</Table.HeaderCell>
                    <Table.HeaderCell>Average Berserk</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                { players.map((player, i) => <TournamentWinsRow key={i} player={player}/>) }
            </Table.Body>
        </Table>
    );
}

export default TournamentWinsTable;

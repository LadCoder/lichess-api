import React, {useState, useEffect} from 'react'
import { Table, Dimmer, Loader, Segment } from 'semantic-ui-react'
import Result from './Result';

function TournamentResults({id}) {   
    const [results, setResults] = useState({ loading: false, data: [] })

    const fetchData = () => {
        setResults({ loading: true, data: [] })
        fetch(`https://lichess.org/api/tournament/${id}/results`)
        .then(response => response.text())
        .then((data) => {
            const objects = data.match(/.+/g).map(JSON.parse)
            setResults({ loading: false, data: objects })
        })
        .catch(console.log)
    }

    useEffect(() => {
        fetchData()
    }, [id])

    console.log(results)

    return !results.loading
        ? <Table celled padded>
            <Table.Header>
                <Table.Row textAlign="center">
                    <Table.HeaderCell>Rank</Table.HeaderCell>
                    <Table.HeaderCell singleLine>Player</Table.HeaderCell>
                    <Table.HeaderCell>Rating</Table.HeaderCell>
                    <Table.HeaderCell>Score</Table.HeaderCell>
                    <Table.HeaderCell>Performance</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                { results.data.map((player, i) => <Result key={i} player={player}/>) }
            </Table.Body>
        </Table>
        : <Dimmer active>
            <Loader size='large'>Loading</Loader>
        </Dimmer>
}

export default TournamentResults;
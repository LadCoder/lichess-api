import React from 'react'
import { Table } from 'semantic-ui-react'

function TournamentWinsRow({player}) {
  return (
    <Table.Row textAlign="center">
        <Table.Cell singleLine textAlign="left">{player.name}</Table.Cell>
        <Table.Cell>{player.rating}</Table.Cell>
        <Table.Cell>{player.wins}</Table.Cell>
        <Table.Cell>{player.totalGames}</Table.Cell>
        <Table.Cell>{player.berserkRate}</Table.Cell>
    </Table.Row>
  );
}

export default TournamentWinsRow;

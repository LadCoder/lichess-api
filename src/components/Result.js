import React from 'react'
import { Table } from 'semantic-ui-react'

function Result({player}) {
  return (
    <Table.Row textAlign="center">
        <Table.Cell>{player.rank}</Table.Cell>
        <Table.Cell singleLine textAlign="left">
            {player.title && player.title} {player.username}
        </Table.Cell>
        <Table.Cell>{player.rating}</Table.Cell>
        <Table.Cell>{player.score}</Table.Cell>
        <Table.Cell>{player.performance}</Table.Cell>
    </Table.Row>
  );
}

export default Result;

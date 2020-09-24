import React,  { useState, useEffect } from 'react'
import { Container, Segment, Tab, Dimmer, Loader } from 'semantic-ui-react'
import PageHeader from './components/PageHeader';
import TournamentResults from './components/TournamentResults';
import TournamentWinsTable from './components/TournamentWinsTable';

function App() {
  const [tournaments, setTournaments] = useState({ loading: false, tournaments: [] })
  const [results, setResults] = useState([])
  const [panes, setPanes] = useState([
    { 
      menuItem: 'Leaderboard', 
      render: () => <Tab.Pane attached={false}><TournamentWinsTable tournaments={tournaments} /></Tab.Pane> 
    },
  ])

  const fetchData = () => {
    setTournaments({ loading: true })
    fetch('https://lichess.org/api/user/degen_chess/tournament/created')
      .then(response => response.text())
      .then((data) => {
        const objects = data.match(/.+/g).map(JSON.parse).sort((a, b) => {
          if (a.startsAt < b.startsAt) { return -1; }
          if (a.startsAt > b.startsAt) { return 1; }
          return 0;
        });
        setTournaments({ loading: false, tournaments: objects })
          objects.map(t => {
          setPanes(oldState => [...oldState, {
            menuItem: t.fullName,
            render: () => <Tab.Pane attached={false}><TournamentResults id={t.id}/></Tab.Pane>
          }])
        }) 
      })
      .catch(console.log)
  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log('results', results)
  console.log('tournaments', tournaments)
  console.log('panes', panes)


  return <Container>
      <Segment placeholder>
        <PageHeader />
      </Segment>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes}>
        test
      </Tab>
      
    </Container>
}

export default App;

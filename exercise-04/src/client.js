import React from 'react'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Actions, Scene, Router } from 'react-native-router-flux'

import Pokedex from './components/Pokedex'
import PokemonPage from './components/PokemonPage'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/__PROJECT_ID__'})
})

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='pokedex' component={Pokedex} title='Pokedex' initial={true} type='replace' />
    <Scene key='pokemonPage' title='Edit Pokemon' component={PokemonPage} />
  </Scene>
)

export const routes = (
  <ApolloProvider client={client}>
    <Router scenes={scenes}/>
  </ApolloProvider>
)
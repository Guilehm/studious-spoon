import React from 'react'
import Home from '../src/components/Home'
import ApiService from '../src/services/api-service'
import { PokemonDetailResult } from '../src/services/types'
import Head from 'next/head'


interface PokemonDetailResultProps {
  pokemonList: PokemonDetailResult[]
}


const Index: React.FC<PokemonDetailResultProps> = ({ pokemonList }) => {

  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Home pokemonList={pokemonList} />
    </>

  )
}


export default Index


export const getStaticProps = async () => {
  const Api = new ApiService()
  const response = await Api.getPokemonList()
  const pokemonList = response.data || []
  return {
    props: {
      pokemonList
    },
    revalidate: 60,
  }
}

import { createSlice } from '@reduxjs/toolkit';
import automotivoThumb from 'assets/categorias/thumbnail/automotivo.png';
import eletronicosThumb from 'assets/categorias/thumbnail/eletronicos.png';
import escritorioThumb from 'assets/categorias/thumbnail/escritorio.png';
import jogosThumb from 'assets/categorias/thumbnail/jogos.png';
import somThumb from 'assets/categorias/thumbnail/som.png';
import automotivoHeader from 'assets/categorias/header/automotivo.png';
import eletronicosHeader from 'assets/categorias/header/eletronicos.png';
import escritorioHeader from 'assets/categorias/header/escritorio.png';
import jogosHeader from 'assets/categorias/header/jogos.png';
import somHeader from 'assets/categorias/header/som.png';

const initialState = [{
  nome: 'Heros',
  thumbnail: eletronicosThumb,
  header: eletronicosHeader,
  id: 'eletronicos',
  descricao: 'Os mais poderosos heróis para você desenvolver'
}, {
  nome: 'Dragons',
  thumbnail: automotivoThumb,
  header: automotivoHeader,
  id: 'automotivos',
  descricao: 'Os monstros estão prontos para queimar e devorar'
}, {
  nome: 'Arqueiros',
  thumbnail: jogosThumb,
  header: jogosHeader,
  id: 'jogos',
  descricao: 'Desenvolva seu poder militar com arqueiros poderosos!'
}, {
  nome: 'Infantaria',
  thumbnail: escritorioThumb,
  header: escritorioHeader,
  id: 'escritorio',
  descricao: 'Desenvolva seu poder militar com a infantaria que produz mais dano!'
}, {
  nome: 'Cavalaria',
  thumbnail: somThumb,
  header: somHeader,
  id: 'som',
  descricao: 'Desenvolva seu poder militar com a cavalaria!'
}];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
});

export default categoriasSlice.reducer;
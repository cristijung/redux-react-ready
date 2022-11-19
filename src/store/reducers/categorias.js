import { createSlice } from '@reduxjs/toolkit';
import drgThumb from 'assets/categorias/thumbnail/dragao-mini.png';
import heroThumb from 'assets/categorias/thumbnail/hero-mini.png';
import infantariaThumb from 'assets/categorias/thumbnail/inf-mini.png';
import arqThumb from 'assets/categorias/thumbnail/arq-mini.png';
import cavalariaThumb from 'assets/categorias/thumbnail/cava-mini.png';
import drgHeader from 'assets/categorias/header/dragao-capa.png';
import heroHeader from 'assets/categorias/header/hero-capa.png';
import infantariaHeader from 'assets/categorias/header/inf-capa.png';
import arqHeader from 'assets/categorias/header/arq-capa.png';
import cavalariaHeader from 'assets/categorias/header/cava-capa.png';

const initialState = [{
  nome: 'Heros',
  thumbnail: heroThumb,
  header: heroHeader,
  id: 'eletronicos',
  descricao: 'Os mais poderosos heróis para você desenvolver'
}, {
  nome: 'Dragons',
  thumbnail: drgThumb,
  header: drgHeader,
  id: 'automotivos',
  descricao: 'Os monstros estão prontos para queimar e devorar'
}, {
  nome: 'Arqueiros',
  thumbnail: arqThumb,
  header: arqHeader,
  id: 'jogos',
  descricao: 'Desenvolva seu poder militar com arqueiros poderosos!'
}, {
  nome: 'Infantaria',
  thumbnail: infantariaThumb,
  header: infantariaHeader,
  id: 'escritorio',
  descricao: 'Desenvolva seu poder militar com a infantaria que produz mais dano!'
}, {
  nome: 'Cavalaria',
  thumbnail: cavalariaThumb,
  header: cavalariaHeader,
  id: 'som',
  descricao: 'Desenvolva seu poder militar com a cavalaria!'
}];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
});

export default categoriasSlice.reducer;
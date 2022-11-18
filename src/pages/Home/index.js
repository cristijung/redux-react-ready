import styles from './Home.module.scss';
import logo from '../../assets/logo-rok.png';
import Header from 'components/Header';

const categorias = [
    {
        nome: 'Heros',
        thumbnail: herosThumb,
        header: herosHeader,
        id: 'heros',
        descricao: 'Os mais poderosos heróis para você desenvolver'
    }, 
    {
        nome: 'Dragons',
        thumbnail: dragonsThumb,
        header: dragonsHeader,
        id: 'dragons',
        descricao: 'Os monstros estão prontos para queimar e devorar'   
    }, 
    {
        nome: 'Arqueiros',
        thumbnail: arqueirosThumb,
        header: arqueirosHeader,
        id: 'arqueiros',
        descricao: 'Desenvolva seu poder militar com arqueiros poderosos!'
    },
    {
        nome: 'Infantaria',
        thumbnail: infantariaThumb,
        header: infantariaHeader,
        id: 'infantaria',
        descricao: 'Desenvolva seu poder militar com a infantaria que produz mais dano!'
    },
    {
        nome: 'Cavalaria',
        thumbnail: cavalariaThumb,
        header: cavalariaHeader,
        id: 'cavalaria',
        descricao: 'Desenvolva seu poder militar com a cavalaria!'
    }
]

export default function Home() {
    <>
        <Header
            titulo='Itens de ROK'
            descricao='Compre e pesquise as melhores skills de ROK'
            imagem={logo}
            className={styles.header}
        />
        
    </>
}


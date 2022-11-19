import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import eritraHero from 'assets/itens/h1.png';
import dolenHero from 'assets/itens/h2.png';
import gideonHero from 'assets/itens/h3.png';
import huanHero from 'assets/itens/h4.png';
import sombraDragao from 'assets/itens/d1.png';
import tempestadeDragao from 'assets/itens/d2.png';
import douradoDragao from 'assets/itens/d3.png';
import geloDragao from 'assets/itens/d4.png';
import jogo1 from 'assets/itens/jogo-1.png';
import console2 from 'assets/itens/console-2.png';
import manete from 'assets/itens/manete.png';
import jogo2 from 'assets/itens/jogo-2.png';
import caderno from 'assets/itens/caderno.png';
import cadeira from 'assets/itens/cadeira.png';
import organizadorPastas from 'assets/itens/organizador-pastas.png';
import papel from 'assets/itens/papel.png';
import tv60 from 'assets/itens/tv-60.png';
import caixaSom from 'assets/itens/caixa-som.png';
import caixaSomBluetooth from 'assets/itens/caixa-som-bluetooth.png';
import miniSystem from 'assets/itens/mini-system.png';


const initialState = [{
  titulo: 'Eritra',
  descricao: 'Também chamada de A Duquesa do Medo Profundo, é responsável por vigiar o Poço da Vida Eterna por milhares de anos. Compre esta heroína para ter mais poder.',
  foto: eritraHero,
  favorito: false,
  preco: 1236.99,
  id: uuid(),
  categoria: 'heros'
}, {
  titulo: 'Dolen Sikil',
  descricao: 'Guerreiro elfo treinado no batalhão de elite, possui habilidades incríveis adicionadas ao seu poder militar. Compre este herói para ter mais poder.',
  foto: dolenHero,
  favorito: false,
  preco: 900,
  id: uuid(),
  categoria: 'heros'
},  {
  titulo: 'Gideon',
  descricao: 'Elfo Brado que faz parte do clã dos Magos de Nyria. Com apenas algumas palavras ele invoca uma coleção de pestes e uma força de combate digna dos Sinhari. Compre este herói para ter mais poder.',
  foto: gideonHero,
  favorito: false,
  preco: 1600.99,
  id: uuid(),
  categoria: 'heros'
}, {
  titulo: 'Huan Mulan',
  descricao: 'Também chamada de  A Terrível Donzela de Arco e Flecha. Desceu das montanhas onde nenhum Nyriano conseguia entender o que falava, hoje em dia pertence à irmandade do Caminho Silencioso e sua principal habilidade é caçar criaturas malignas. Compre esta heroína para ter mais poder.',
  foto: huanHero,
  favorito: false,
  preco: 4478.96,
  id: uuid(),
  categoria: 'heros'
},  {
  titulo: 'Dragão das Sombras',
  descricao: 'Habilidade principal chamada de O Manto da Noite, seu fogo é frio e congela imediatamente o inimigo.',
  foto: sombraDragao,
  favorito: false,
  preco: 1500.96,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Dragão da Tempestade',
  descricao: 'Habilidade principal de Descarga Elétrica Natural, seu ataque mata como um raio de uma potente tempestade.',
  foto: tempestadeDragao,
  favorito: false,
  preco: 1490.90,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Dragão Dourado',
  descricao: 'Habilidade principal de Bênção Divina do Reino, com sua luz potente faz toda a natureza se desenvolver.',
  foto: douradoDragao,
  favorito: false,
  preco: 2900,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Dragão do Gelo',
  descricao: 'Com o Suporte Veicular Magnetico 3 em 1 i2GO PRO você posiciona seu Smartphone de qualquer tamanho e outros dispositivos onde quiser de maneira fácil e segura. Ideal para o utilização de aplicativos de GPS e controlar músicas no carro, assistir a filmes e séries em casa, além de atender chamadas de vídeo e conferir documentos e mensagens no escritório.',
  foto: geloDragao,
  favorito: false,
  preco: 1200.99,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Jogo para console',
  descricao: 'Embarque em uma jornada épica e comovente e lute contra queles que desafiam o destino que anseia por conhecimento para ajudá-lo a entender a profecia e o papel que ele desempenhará. Você deve decidir se será acorrentado pelo medo de repetir seus erros ou se libertar de seu passado para ser o pai que precisa.',
  foto: jogo1,
  favorito: false,
  preco: 299.90,
  id: uuid(),
  categoria: 'arqueiro'
}, {
  titulo: 'Console',
  descricao: 'Menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital e também possui os melhores serviços para jogadores de todos os tipos.',
  foto: console2,
  favorito: false,
  preco: 4349,
  id: uuid(),
  categoria: 'arqueiro'
}, {
  titulo: 'Controle joystick sem fio',
  descricao: 'Este controle combina funções revolucionárias, preservando precisão, conforto e exatidão em cada movimento. Graças à sua ergonomia especialmente projetada para a posição da sua mão, você pode passar horas jogando com total conforto.',
  foto: manete,
  favorito: false,
  preco: 279,
  id: uuid(),
  categoria: 'arqueiro'
}, {
  titulo: 'Jogo para console',
  descricao: 'Em sua mais nova aventura um adolescente está se ajustando a sua nova casa mas quando uma luta feroz pelo poder ameaça destruir sua nova casa, o aspirante a herói percebe que com grandes poderes, também deve vir uma grande responsabilidade para salvar toda a Nova Iorque deve assumir o manto de herói.',
  foto: jogo2,
  favorito: false,
  preco: 349.90,
  id: uuid(),
  categoria: 'arqueiro'
},  {
  titulo: 'Caderno Inteligente',
  descricao: 'Caderno inteligente com calendário, elástico para caneta e divisórias Formato: 215 x 280 mm (lxa) Com 60 folhas pautadas e 20 folhas lisas brancas de 90 gramas que você tira e coloca quando quiser Fabricado com muito cuidado e atenção aos detalhes',
  foto: caderno,
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'infantaria'
}, {
  titulo: 'Cadeira de Escritório',
  descricao: 'Base giratória em 360º de polipropileno com 5 rodízios;Ajuste de altura a gás;Encosto com estrutura de madeira com estofamento revestido em couro PU;Assento com madeira multi laminada com estofamento revestido em couro PU;Braços em polipropileno com estofamento revestido em couro PU; Espuma com densidade controlada.',
  foto: cadeira,
  favorito: false,
  preco: 629,
  id: uuid(),
  categoria: 'infantaria'
}, {
  titulo: 'Papel Sulfite A4 75g 500 folhas',
  descricao: 'Desenvolvido para ser utilizado em atividades escolares e profissionais corte perfeito e equilibrada absorção, permite melhor deslizamento do papel na impressora. Produzido com eucalipto 100% renovável e as fibras são tratadas para obter o mais elevado grau de brancura. Chamex garante excelente performance em equipamentos e impressoras de alta velocidade, com 99% de não atolamento das folhas em sua impressora.',
  foto: papel,
  favorito: false,
  preco: 27.60,
  id: uuid(),
  categoria: 'infantaria'
}, {
  titulo: 'Arquivo Estreito com Furação',
  descricao: 'Ideal para a organização de pastas e papéis. Organize seus documentos e pastas suspensas em um só lugar, poupando espaço em gavetas. Possui encaixe para acomodas as pastas sem amassar. Contém furos para ventilação do organizador e design diferenciado. Organiza e deixa seu ambiente mais bonito.',
  foto: organizadorPastas,
  favorito: false,
  preco: 44.90,
  id: uuid(),
  categoria: 'infantaria'
},  {
  titulo: 'Smart TV 60" 4K UHD',
  descricao: 'Smart TV LG 60" 4K UHD WiFi Bluetooth Inteligência Artificial, Painel de Controle, Processamento Natural de Linguagem, AI Recommendation, Otimizador de Games, Channels, Edição Inteligente de Apps e Media Player.',
  foto: tv60,
  favorito: false,
  preco: 3359,
  id: uuid(),
  categoria: 'cavalaria'
}, {
  titulo: 'Caixa de Som',
  descricao: 'A caixa de som 710 à prova de respingos transforma seu próximo evento em uma verdadeira festa, show ou balada. Show de luzes único e colorido sincronizado com seu aparelho de celular. Botões minimalistas e intuitivos no painel superior e o aplicativo permitem criar experiências musicais e visuais de alto nível. Com luzes estroboscópicas piscantes personalizáveis e o som incrível do conjunto duplo de tweeters e woofers ricos em graves.',
  foto: caixaSom,
  favorito: false,
  preco: 5817.33,
  id: uuid(),
  categoria: 'cavalaria'
}, {
  titulo: 'Caixa de Som Bluetooth',
  descricao: 'Caixa de som oferece o ousado som com driver de longa excursão otimizado, tweeter separado e dois radiadores de graves. Até 20 horas de reprodução e um prático powerbank para manter carregados os dispositivos que fazem a festa a noite toda.',
  foto: caixaSomBluetooth,
  favorito: false,
  preco: 1199,
  id: uuid(),
  categoria: 'cavalaria'
}, {
  titulo: 'Mini System com Função karaokê',
  descricao: 'Moderno e superpotente, o Mini System vai reproduzir suas músicas com qualidade máxima nos mais diversos formatos, como MP3, WMA CD, CD-R e CD-RW. E, se a ideia for promover festas e encontros animados, a função karaokê, a conexão Bluetooth e as duas portas USB serão bastante úteis.',
  foto: miniSystem,
  favorito: false,
  preco: 782.91,
  id: uuid(),
  categoria: 'cavalaria'
}];

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(item => {
        if(item.id === payload) item.favorito = !item.favorito;
        return item;
      })
    }
  }
});

export const { mudarFavorito } = itensSlice.actions;

export default itensSlice.reducer;
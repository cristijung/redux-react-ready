import Button from "components/Button";
import Header from "components/Header";
import styles from './Anuncie.module.scss';
import { useSelector } from "react-redux";



export default function Anuncie() {
    const categorias = useSelector(state => state.categorias.map(({nome, id}) => ({nome, id})));

    return (
        <>
       <Header 
        titulo='Anuncie aqui'
        descricao='Anuncie aqui a sua skill no melhor site de troca de ROK'
       />
       <form className={styles.formulario}>
        <input placeholder='Nome da Skill' alt='Nome da skill' />
        <input placeholder='Descrição da Skill' alt='descrição da skill' />
        <input placeholder='URL da imagem da skill' alt='url da imagem da skill' />
        <select>
            <option value='' disabled>Selecione a categoria</option> 
            {categorias.map(categoria => (
                <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                </option>
            ))}
        </select>
        <input type='number' placeholder='Preço da skill' />
        <Button type='submit'>
            Cadastrar Skill
        </Button>
       </form>
        </>
    )
}
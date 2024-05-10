import { styled } from "styled-components"
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`


const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`
let texto = ''

const CampoTexto = ({ filtro, setFiltro }) => {
    const handleKeyPress = e => {
        if (e.key === "Enter") {
            setFiltro(texto)
        }
    }

    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado onChange={event => texto = event.target.value} onKeyUp={handleKeyPress} />
            <IconeLupa src={search} alt="ícone de lupa" onClick={() => setFiltro(texto)} />
        </ContainerEstilizado>
    )
}

export default CampoTexto
import ManImage from '../../assets/man-working.png'
import { Container } from './styles'

// Estático por enquanto
export function Carrousel(){
    return (
        <Container>
            <img src={ManImage} alt="A man working" />
                <div>
                    <h1>Keep life simple</h1>
                    <p>Store all your notes in a simple and <br /> intuitive app that helps you enjoy what is <br /> most important in life</p>
                </div>
        </Container>
    )
}
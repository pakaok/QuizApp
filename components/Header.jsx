import logoImg from '../src/assets/quiz-logo.png'

export default function Header(){
    return (
        <header>
            <img src={logoImg} alt="React Quiz" />
            <h1>React Quiz</h1>
        </header>
    );
}
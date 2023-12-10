import Joke from '../joke';

const ChuckJoke: React.FC<Joke> = ({joke}) => <p>{joke}</p>;

//const ChuckJoke: React.FC<ChuckJokeProps> = () => <p></p>



export default ChuckJoke;

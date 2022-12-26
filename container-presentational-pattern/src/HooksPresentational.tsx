import useDogImages from './hooks';

function HooksPresentational() {
  const dogs = useDogImages();

  return <div>{dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />)}</div> 
}

export default HooksPresentational
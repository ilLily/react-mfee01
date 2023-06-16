import {useState} from 'react';
import "./card.css"
import Button2 from '../btn/btn2'

export default function Card() {
  
  const getRandNum = ()=>{
      const randId = Math.floor(Math.random()*151)+1;
      return randId;
  }
  const [pokeId, setPokeId] = useState(1)
  
  return (
    <div className="card">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`} alt="" />
        <h5>I love Pet #{pokeId}</h5>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo. Facilis modi odio nemo.</p>
        <button onClick={()=>{
          console.log('haha');
            setPokeId(pokeId+1);
        }}>button</button>

        <div onClick={()=>{
           
            setPokeId( getRandNum());
          }}>
           <Button2 color="white" background="green" btnName="ChangePoke" />
        </div>
    </div>
  );
}
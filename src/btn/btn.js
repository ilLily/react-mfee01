export default function Button(props) {
    console.log(props);
  return (
    <button style={{'color':'black','background':`${props.color}`}}>Button</button>
  );
}
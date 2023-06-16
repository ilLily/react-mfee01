export default function Button2(props) {
  const c = props.color;
  const b = props.background;
  const bName= props.btnName;
  return (
   <button style={  {'color':`${c}`,"background":`${b}`}  }>{bName}</button>
   );

}
import "./Form.css";

const Form = (props) => {

  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div className="form">
      <div>
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default Form;

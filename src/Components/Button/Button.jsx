
import "./Button.css"
const Button = ({children, variant,size, onClick, type= "button"}) => {
  return (
    <>
      <button type ={type} className={`btn btn-${variant} btn-${size}`} onClick={onClick}>
        <span className="create">{children}</span>
        <div className="arrow">
        
          <span className="material-symbols-outlined " id="arrow">arrow_forward</span>
        </div>
      </button>
    </>
  );
};

export default Button;

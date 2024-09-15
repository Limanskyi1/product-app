interface IGoBackBtn {
    className: string;
    mode: "light" | "dark";
    onClick?: () => void;
  }
  
  export const GoBackBtn = ({ className, onClick, mode }: IGoBackBtn) => {

    const createImageSrc = () => {
        if(mode === "dark"){
            return "/arrow-left.svg"
        }
        return "/arrow-left-dark.svg";
    }

    return (
        <button onClick={onClick} className={className}>
          <img src={createImageSrc()} alt="icon arrow" />
          <span>Go Back</span>
        </button>
      );
  };
  
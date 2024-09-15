

interface ISpinner{
    className:string;
}
export const Spinner = ({className}:ISpinner) => {
  return (
    <img src="/loader.svg" alt="loader" className={className}/>
  )
}

const ContainerLeft = ({children}) =>{
    return (
        <div className="container leftside width-left">
            <div className="content height-left">
                {children}
            </div>
          </div>
    )
}
export default ContainerLeft;
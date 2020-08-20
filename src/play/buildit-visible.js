class VisiblityToggle extends React.Component{
    constructor(props){
        super(props)
        this.handleVisiblityToggle =  this.handleVisiblityToggle.bind(this)
        this.state = {
            visiblity:false
        }
    }
    handleVisiblityToggle(){
        this.setState((prevState) =>{
            return {
                visiblity :!prevState.visiblity
            }
        })
    }
    render(){
    return (
        <div>
            <h1>Visiblity Toggle</h1>
            <button onClick={this.handleVisiblityToggle}>
            {this.state.visiblity == true ?  'Hide details':'showDetails'}
            </button>
            {this.state.visiblity == true && <p>This is details</p>}
        </div>
    )
    }
}

ReactDOM.render(<VisiblityToggle />,document.getElementById('app'))

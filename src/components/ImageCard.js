import React from 'react'

class ImageCard extends React.Component{
    constructor(props) {
        super(props)
    
        this.imageRef= React.createRef();
        this.state = {
             span:0
        }
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setHeight);
    }
    setHeight=()=>{
        this.setState({
            span:Math.ceil(this.imageRef.current.clientHeight/10)
        })
    }
    
    render(){
        const {alt_description,urls}=this.props.image;

        return(
            <div style={{gridRowEnd:`span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
            </div>
        )
    }

}


export default ImageCard
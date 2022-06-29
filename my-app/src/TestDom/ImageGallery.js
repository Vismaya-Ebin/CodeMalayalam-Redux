import React from "react";
export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: props.links };
    console.log(props.links);
  }
  handleRemove =(item)=>{
    console.log(item);
   
    this.setState((state)=>{links:state.links.filter(link=>link !== item)})

  }
  render() {
    return (
      <div>
        {this.state.links.map((data, index) => (
          <div key={data}>
            <img  key={data} src={data} />
            <button onClick={()=>this.handleRemove(data)}>X</button>
          </div>
        ))}
      </div>
    );
  }
}

import React from "react";

class Thumb extends React.Component<any, any> {
    constructor(props:any){
        super(props);
    }
    state = {
      loading: false,
      thumb: undefined,
    };
  
    componentWillReceiveProps(nextProps) {
        debugger;
      if (!nextProps.fileData) { return; }
  
      this.setState({ loading: true }, () => {
        let reader = new FileReader();
  
        reader.onloadend = () => {
          this.setState({ loading: false, thumb: reader.result });
        };
  
        reader.readAsDataURL(nextProps.fileData);
      });
    }
  
    render() {
      const { loading, thumb } = this.state;
     debugger;
      if (! this.props.fileData) { return null; }
  
      if (loading) { return <p>loading...</p>; }
  
      return (<img src={thumb}
        alt={this.props.fileData.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200} />);
    }
  }

  export default Thumb;
  
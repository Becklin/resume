import React, {Component} from 'react';
import Frame from '../frame/frame';
import woosa from 'projectwoosa';

class Landingpage extends Component {

    handleChange(e){
        console.log(e.target.value);
    }
    render(){
        console.log(woosa(20000));
        return (
            <div><h1>Landingpage Page</h1>
            <Frame >
                <label htmlFor='first' >1</label><input type='Radio' id='first' value='first' onChange={this.handleChange} />
                <label htmlFor='second'>2</label><input type='Radio' id='second' value='second' onChange={this.handleChange} />
                <label htmlFor='third'>3</label><input type='Radio' id='third' value='third' onChange={this.handleChange} />
            </Frame>

            </div>
        )
    }
}

export default Landingpage;

import React from 'react';
import Select from 'react-select';

class Form extends React.Component {
    render(){
        const UnitsOfMeasure = [
            { label: "Kelvin", value: 'kelvin' },
            { label: "Metric", value: 'metric' },
            { label: "Imperial (US)", value: 'imperial' }
        ];

        return(
            <form onSubmit={this.props.getWeather}>
                <input type='text' name='zip' placeholder='Zip or Postal Code'/>
                <input type='text' name='country' placeholder='Country Code (i.e. US, UK)'/>
                <Select className="units" options={UnitsOfMeasure} name='units'/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;
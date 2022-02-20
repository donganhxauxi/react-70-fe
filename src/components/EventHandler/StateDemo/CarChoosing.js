import React, { Component } from 'react';
// import Black from '../../../img/black-car.jpg';
// import Steel from '../../../img/steel-car.jpg';
// import Silver from '../../../img/silver-car.jpg';
// import Red from '../../../img/red-car.jpg';

// const DUMMY_DATA = [
//     { name: 'Black', url: Black },
//     { name: 'Silver', url: Steel },
//     { name: 'Red', url: Red },
//     { name: 'Steel', url: Steel }
// ];
export class CarChoosing extends Component {
    constructor() {
        super();
        this.state = { size: 14 };
    }

    // toggleCarColor(image) {
    //     this.setState({ image });
    // }

    increaseSize() {
        this.setState((currState) => {
            return { size: (currState.size += 1) };
        });
    }

    decreaseSize() {
        this.setState((currState) => {
            return { size: (currState.size -= 1) };
        });
    }

    render() {
        return (
            <div className="container">
                <h3 style={{ fontSize: `${this.state.size}px` }}>
                    Bai tap tang giam font size
                </h3>
                <button onClick={this.increaseSize.bind(this)}>+</button>
                <button onClick={this.decreaseSize.bind(this)}>-</button>
            </div>
        );
        // return (
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-6">
        //                 <img
        //                     src={this.state.image}
        //                     style={{
        //                         maxWidth: '100%',
        //                         maxHeight: '100%',
        //                         display: 'block'
        //                     }}
        //                 />
        //             </div>
        //             <div className="col-6">
        //                 {DUMMY_DATA.map((car) => (
        //                     <button
        //                         key={car.name}
        //                         onClick={this.toggleCarColor.bind(
        //                             this,
        //                             car.url
        //                         )}
        //                     >
        //                         {car.name}
        //                     </button>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}

export default CarChoosing;

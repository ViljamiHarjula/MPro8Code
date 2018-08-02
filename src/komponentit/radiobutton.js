
// import React, { Component } from 'react';

// class Application extends Component {

//   getInitialState () {
//     return {
//       selectedOption: 'option1'
//     };
//   };

//   handleOptionChange (changeEvent) {
//     this.setState({
//       selectedOption: changeEvent.target.value
//     });
//   };

//   handleFormSubmit (formSubmitEvent) {
//     formSubmitEvent.preventDefault();

//     console.log('You have selected:', this.state.selectedOption);
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12">

//             <form onSubmit={this.handleFormSubmit}>
//               <div className="radio">
//                 <label>
//                   <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
//                   Option 1
//                 </label>
//               </div>
//               <div className="radio">
//                 <label>
//                   <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
//                   Option 2
//                 </label>
//               </div>
//               <div className="radio">
//                 <label>
//                   <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
//                   Option 3
//                 </label>
//               </div>
//               <button className="btn btn-default" type="submit">Save</button>
//             </form>

//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Application;

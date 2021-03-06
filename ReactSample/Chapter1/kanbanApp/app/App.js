import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';

// class App extends Component {
//   render(){
//     var place = 'Land';
//     return (
//       <h1>Hello {place}</h1>
//     );
//   }
// }
// render(<App />, document.getElementById('root'));

// // 부모 컴포넌트
// class GroceryList extends Component {
// 	render() {
// 		return (
// 			<ul>
// 				<ListItem quantity='1' name='Bread'>1</ListItem>
// 				<ListItem quantity='6' name='Eggs'>2</ListItem>
// 				<ListItem quantity='2' name='Milk'>3</ListItem>
// 			</ul>
// 		);
// 	}
// }

// class ListItem extends Component {
// 	render() {
// 		return (
// 			<li>{this.props.quantity}, {this.props.name}, {this.props.children}</li>
// 		);
// 	}
// }

// render(<GroceryList />, document.getElementById('root'));

let cardsList = [
	{
		id: 1,
		title: 'Read the Book',
		description: 'I should read the whole book',
		status: 'in-progress',
		tasks: []
	},
	{
		id: 2,
		title: 'Write some code',
		description: 'Code along with the samples in the book',
		status: 'todo',
		tasks: [
			{
				id: 1,
				name: 'ContractList Example',
				done: true
			},
			{
				id: 2,
				name: 'Kanban Example',
				done: false
			},
			{
				id: 3,
				name: 'My own experiments',
				done: false
			}
		]
	}
]

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
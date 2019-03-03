import { __ } from '@wordpress/i18n';
import { Component, createRef } from '@wordpress/element';
import { PlainText } from '@wordpress/editor';

//TODO: use peer dependencies!
import classnames from 'classnames';

class EmojiTaskListEdit extends Component {

	state = {
		focusIndex: -1
	};

	toList() {
		const { attributes } = this.props;
		const { tasks, completed } = attributes;

		//className is not available in serialized this.props so infer the generation
		const className = 'wp-block-gwwar-emoji-tasklist';

		return (
			<ul className={ className }>
				{
					tasks.map( ( task, index ) => {
						const isCompleted = completed[ index ];
						return (
							<li key={ index } className={ classnames( `${ className }-item`, { 'is-completed': isCompleted, } ) }>
								<input type="checkbox" checked={ isCompleted } className={ classnames( `${ className }-checkbox` ) } />
								<span className={ classnames( `${ className }-task` ) }>{ task }</span>
							</li>
						);
					} )
				}
			</ul>
		)
	}

	addOrRemoveTask = ( index ) => {
		const { attributes, setAttributes } = this.props;
		const { tasks, completed } = attributes;

		return ( event ) => {
			//add a new task
			if ( event.key === 'Enter' ) {
				event.preventDefault();
				setAttributes( {
					tasks: [ ...tasks.slice( 0, index + 1 ), '', ...tasks.slice( index + 1 ) ],
					completed: [ ...completed.slice( 0, index + 1 ), false, ...completed.slice( index + 1 ) ]
				} );
				this.setState( { focusIndex: index + 1 } );
			}

			if ( event.key === 'Backspace' ) {
				//remove a task
				const task = tasks[ index ];
				if ( task === '' ) {
					event.preventDefault();
					const updatedTasks = [
						...tasks.slice( 0, index ),
						...tasks.slice( index + 1 ),
					];
					setAttributes( { tasks: updatedTasks } );
					this.setState( { focusIndex: index - 1 } );
					//TODO: keep focus on block
				}
			}
		}
	};

	updateTaskValue = ( index ) => {
		const { attributes, setAttributes } = this.props;
		const { tasks } = attributes;

		return ( newTaskValue ) => {
			const updatedTasks = [
				...tasks.slice( 0, index ),
				newTaskValue,
				...tasks.slice( index + 1 ),
			];
			setAttributes( { tasks: updatedTasks } );
		}
	};

	toggleCheckbox = ( index ) => {
		const { attributes, setAttributes } = this.props;
		const { completed } = attributes;

		return () => {
			const updatedCompleted = [
				...completed.slice( 0, index ),
				! completed[ index ],
				...completed.slice( index + 1 ),
			];
			setAttributes( { completed: updatedCompleted } );
		}
	};

	toEditable() {
		const { attributes, className } = this.props;
		const { tasks, completed } = attributes;

		return (
			<ul className={ classnames( className, 'is-selected' ) }>
				{
					tasks.map( ( task, index ) => {
						const isCompleted = completed[ index ];
						return (
							<li key={ index }
							    className={ classnames( `${ className }-item`, { 'is-completed': isCompleted, } ) }>
								<input
									type="checkbox"
									checked={ isCompleted }
									className={ classnames( `${ className }-checkbox` ) }
									onChange={ this.toggleCheckbox( index ) }
								/>
								<span className={ classnames( `${ className }-task` ) }>
										<PlainText
											value={ task }
											onChange={ this.updateTaskValue( index ) }
											onKeyDown={ this.addOrRemoveTask( index ) }
											placeholder={ __( 'Add a task…' ) }
											aria-label={ __( 'Task List Item' ) }
											autoFocus={ this.state.focusIndex === index }
										/>
								</span>
							</li>
						);
					} )
				}
			</ul>
		);
	}

	render() {
		const { isSelected } = this.props;
		if ( isSelected ) {
			return this.toEditable();
		}
		return this.toList();
	}
}

export default EmojiTaskListEdit;
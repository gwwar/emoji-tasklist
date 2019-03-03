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
		const { attributes, className } = this.props;
		const { tasks, completed } = attributes;

		//className is not available in serialized this.props so infer the generation
		const base = 'wp-block-gwwar-emoji-tasklist';

		return (
			<ul className={ classnames( base, { [ className ]: className && className !== base } ) }>
				{
					tasks.map( ( task, index ) => {
						const isCompleted = completed[ index ];
						return (
							<li key={ index } className={ classnames( `${ base }-item`, { 'is-completed': isCompleted, } ) }>
								<input type="checkbox" checked={ isCompleted } className={ classnames( `${ base }-checkbox` ) } />
								<span className={ classnames( `${ base }-task` ) }>{ task }</span>
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

		//className is not available in serialized this.props so infer the generation
		const base = 'wp-block-gwwar-emoji-tasklist';

		return (
			<ul className={ classnames( base, 'is-selected', { [ className ]: className && className !== base } ) }>
				{
					tasks.map( ( task, index ) => {
						const isCompleted = completed[ index ];
						return (
							<li key={ index }
							    onClick={ ( event ) => {
							    	if ( event.target.tagName.toLowerCase() === 'li' ) {
									    this.toggleCheckbox( index )();
								    }
							    } }
							    className={ classnames( `${ base }-item`, { 'is-completed': isCompleted, } ) }>
								<input
									type="checkbox"
									checked={ isCompleted }
									className={ classnames( `${ base }-checkbox` ) }
									onChange={ this.toggleCheckbox( index ) }
								/>
								<PlainText
									className={ classnames( `${ base }-task` ) }
									value={ task }
									onChange={ this.updateTaskValue( index ) }
									onKeyDown={ this.addOrRemoveTask( index ) }
									placeholder={ __( 'Add a task…' ) }
									aria-label={ __( 'Task List Item' ) }
									autoFocus={ this.state.focusIndex === index }
								/>
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
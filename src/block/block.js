/**
 * Emoji Tasklist -- The Tasklist made with ✅ ❌ and more!
 */

/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType, hasBlockSupport } from '@wordpress/blocks';
import { createBlock } from '@wordpress/blocks';
import {
	addFilter,
} from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import WhiteHeavyCheckmarkIcon from './whiteHeavyCheckmarkIcon';
import edit from './edit';

/**
 * Styles
 */
import './style.scss';
import './editor.scss';

registerBlockType( 'gwwar/emoji-tasklist', {
	title: __( 'Emoji tasklist' ),
	icon: <WhiteHeavyCheckmarkIcon />,
	category: 'formatting',
	keywords: [
		__( 'task' ),
		__( 'list' ),
		__( 'todo' ),
	],

	transforms: {
		from: [
			{
				type: 'prefix',
				prefix: 'o',
				transform( content ) {
					return createBlock( 'gwwar/emoji-tasklist', {
						tasks: [ content ],
						completed: [ false ]
					});
				},
			},
			{
				type: 'prefix',
				prefix: 'x',
				transform( content ) {
					return createBlock( 'gwwar/emoji-tasklist', {
						tasks: [ content ],
						completed: [ true ]
					} );
				},
			},
		],
	},

	attributes: {
		completed: {
			type: 'array',
			source: 'query',
			selector: 'li.wp-block-gwwar-emoji-tasklist-item .wp-block-gwwar-emoji-tasklist-checkbox',
			query: {
				value: {
					type: 'boolean',
					source: 'attribute',
					attribute: 'checked',
					default: false,
				},
			},
			default: [ { completed: false } ],
		},
		tasks: {
			type: 'array',
			source: 'query',
			selector: 'li.wp-block-gwwar-emoji-tasklist-item .wp-block-gwwar-emoji-tasklist-task',
			query: {
				task: {
					type: 'string',
					source: 'html',
				},
			},
			default: [ { task: '' } ]
		},
	},
	edit,
	save: edit,
} );

// TODO: can we specify block attributes to not nest like this?
export function flattenAttributes( blockAttributes, blockType, innerHTML ) {
	// when reading from post_content flatten attributes from
	// { completed: [ { value: true } ], tasks: { task: '' } }
	// to
	// { completed: [ true ], tasks: [ '' ] }
	if ( blockType.name === 'gwwar/emoji-tasklist' ) {
		const { completed, tasks } = blockAttributes;
		return {
			completed: completed.map( ( checkbox ) => checkbox.value ),
			tasks: tasks.map( ( task ) => task.task ),
		}
	}
}

addFilter( 'blocks.getBlockAttributes', 'gwwar/emoji-tasklist', flattenAttributes );


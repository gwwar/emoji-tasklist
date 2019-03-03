import { Component } from '@wordpress/element';

/**
 * Custom Icon for Emoji Tasklist, Adapted from Twemoji
 */
class WhiteHeavyCheckmarkIcon extends Component {
	render() {
		return (
			<svg viewBox="0 0 45 45"
			     style={{ enableBackground: 'new 0 0 45 45' }} xmlSpace="preserve" version="1.1" id="svg2" width={ 45 }
			     height={45}>
				<g transform="matrix(1.25,0,0,-1.25,0,45)" id="g10">
					<g id="g12">
						<g clipPath="url(#clipPath16)" id="g14">
							<g transform="translate(36,4)" id="g20">
								<path id="path22"
								      style={{fill: '#77b255', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none'}}
								      d="m 0,0 c 0,-2.209 -1.791,-4 -4,-4 l -28,0 c -2.209,0 -4,1.791 -4,4 l 0,28 c 0,2.209 1.791,4 4,4 l 28,0 c 2.209,0 4,-1.791 4,-4 L 0,0 Z"/>
							</g>
							<g transform="translate(13.5,7)" id="g24">
								<path id="path26"
								      style={{fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none'}}
								      d="m 0,0 c -0.64,0 -1.28,0.244 -1.768,0.732 l -6.5,6.5 c -0.976,0.977 -0.976,2.559 0,3.536 0.976,0.976 2.56,0.976 3.536,0 L 0,6.035 13.732,19.768 c 0.977,0.976 2.559,0.976 3.536,0 0.976,-0.977 0.976,-2.559 0,-3.536 L 1.768,0.732 C 1.28,0.244 0.64,0 0,0"/>
							</g>
						</g>
					</g>
				</g>
			</svg>
		);
	}
}

export default WhiteHeavyCheckmarkIcon;
import {GridHelper} from 'three';

import name from './name';

export default function() {
	let {
		data,
		el,
	} = this;
	let {
		colorCenterLine,
		colorGrid,
		divisions,
		size,
	} = data;
	let object = new GridHelper(
		size,
		divisions,
		colorCenterLine,
		colorGrid,
	);
	el.setObject3D(name, object);
}

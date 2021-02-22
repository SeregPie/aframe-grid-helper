import AFRAME from 'aframe';

import init from './init';
import name from './name';
import remove from './remove';

export default function(oldData) {
	let {
		data,
		el,
	} = this;
	let {
		fog,
		opacity,
		transparent,
	} = data;
	if (Object.keys(oldData).length) {
		let pick = (({
			colorCenterLine,
			colorGrid,
			divisions,
			size,
		}) => ({
			colorCenterLine,
			colorGrid,
			divisions,
			size,
		}));
		if (!AFRAME.utils.deepEqual(pick(data), pick(oldData))) {
			remove.call(this);
			init.call(this);
		}
	}
	let object = el.getObject3D(name);
	if (object) {
		let {material} = object;
		Object.assign(material, {
			fog,
			opacity,
			transparent,
		});
	}
}

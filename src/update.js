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
	let object = el.getObject3D(name);
	if (Object.keys(oldData).length) {
		remove.call(this);
		init.call(this);
	}
	let {material} = object;
	Object.assign(material, {
		fog,
		opacity,
		transparent,
	});
}

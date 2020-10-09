import name from './name';

export default function() {
	let {el} = this;
	let object = el.getObject3D(name);
	let {
		geometry,
		material,
	} = object;
	geometry.dispose();
	material.dispose();
	el.removeObject3D(name);
}

setInterval(() => {
	let v = document.querySelector("video");
	console.log("EExt", v);
	v.preservesPitch = false;
	v.playbackRate = 0.96;

	console.log("EExt: set 0.96", v);
}, 1000);

console.log("contentScript loaded");
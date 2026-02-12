setTimeout(() => {
	let v = document.querySelector("video");
	v.preservesPitch = false;
	v.playbackRate = 0.96;

	console.log("EExt: set 0.96", v);
}, 1000);
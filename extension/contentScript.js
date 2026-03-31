var cMadeInterval = setInterval(() => {
	let v = document.querySelector("video");
	v.preservesPitch = false;
	v.playbackRate = 1 / 1.04;

	console.log("EExt: set 0.96", v);
}, 1000);

window.__cStopPlaybackChange = () => {
	clearInterval(cMadeInterval);
}

console.log("contentScript loaded");
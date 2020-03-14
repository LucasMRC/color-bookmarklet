(function() {
	const number = () => Math.floor(Math.random() * 255 + 1);
	document.querySelector('*').style.color = 'inherit';
	document.querySelector('*').style.backgroundColor = 'inherit';
	document.body.style.cssText = `transition: ease 2s;background-color: rgb(${number()}, ${number()}, ${number()});color: rgb(${number()}, ${number()}, ${number()});`;
})();
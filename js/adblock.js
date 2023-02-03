fetch('http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js').catch(() => {
	let adp_underlay = document.createElement('div');
	adp_underlay.className = 'adp-underlay';
	document.body.appendChild(adp_underlay);
	let adp = document.body;
	adp.className = 'adp';
	adp.innerHTML = `
        <div style="color:white;background-color:black">
		<h3>Ad Blocker Detected!</h3>
		<p>We use advertisements to keep our website online, it would help if you whitelist our website, thanks!</p>
		<a href="https://zhanyarios.ml">Okay</a>
		<br>
		<a href="#"> Donate<a/></div>
	`;
	document.body.appendChild(adp);
	adp.querySelector('a').onclick = e => {
		e.preventDefault();
		document.body.removeChild(adp_underlay);
		document.body.removeChild(adp);
	};
});
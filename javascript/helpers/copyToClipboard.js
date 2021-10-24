export function copyToClp(txt: string) {
	const m = document;
	const txtValue = m.createTextNode(txt);
	const w = window;
	const b = m.body;
	b.appendChild(txtValue);
	if ((b as any).createTextRange) {
		const d = (b as any).createTextRange();
		d.moveToElementText(txt);
		d.select();
		m.execCommand("copy");
	} else {
		const d = m.createRange();
		const g = w.getSelection;
		d.selectNodeContents(txtValue);
		(g() as any).removeAllRanges();
		(g() as any).addRange(d);
		m.execCommand("copy");
		(g() as any).removeAllRanges();
	}
	txtValue.remove();
}
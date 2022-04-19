const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = edge => ({
	type: 'RND',
	payload: Math.round(Math.random() * edge * 2 - edge),
});

export { inc, dec, rnd };

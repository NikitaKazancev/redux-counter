const initialState = {
	counter: 0,
};

export default function reducer(state = initialState, { type, payload }) {
	const { counter } = state;

	switch (type) {
		case 'INC':
			return { ...state, counter: counter + 1 };
		case 'DEC':
			return { ...state, counter: counter - 1 };
		case 'RND':
			return { ...state, counter: payload };
		default:
			return state;
	}
}

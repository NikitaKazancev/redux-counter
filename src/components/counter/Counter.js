import './counter.scss';

import { useDispatch, useSelector } from 'react-redux';
import { inc, dec, rnd } from '../../redux/actions';

export default function Counter() {
	const counter = useSelector(({ counter }) => counter);
	const dispatch = useDispatch();

	return (
		<>
			<div className='counter'>{counter}</div>
			<div className='counter__btns'>
				<button className='counter__inc' onClick={() => dispatch(inc())}>
					INC
				</button>
				<button className='counter__dec' onClick={() => dispatch(dec())}>
					DEC
				</button>
				<button
					className='counter__rnd'
					onClick={edge => dispatch(rnd(100))}
				>
					RND
				</button>
			</div>
		</>
	);
}

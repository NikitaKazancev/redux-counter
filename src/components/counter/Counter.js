import './counter.scss';

import { connect } from 'react-redux';
import { inc, dec, rnd } from '../../redux/actions';

function Counter({ counter, inc, dec, rnd }) {
	return (
		<>
			<div className='counter'>{counter}</div>
			<div className='counter__btns'>
				<button className='counter__inc' onClick={inc}>
					INC
				</button>
				<button className='counter__dec' onClick={dec}>
					DEC
				</button>
				<button className='counter__rnd' onClick={() => rnd(100)}>
					RND
				</button>
			</div>
		</>
	);
}

////// Компонент Counter

const mapStateToProps = ({ counter }) => {
	return { counter };
};

const mapDispatchToProps = dispatch => {
	return {
		inc: () => dispatch(inc()),
		dec: () => dispatch(dec()),
		rnd: edge => dispatch(rnd(edge)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

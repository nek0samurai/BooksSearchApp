import { getMoreBooks } from '../../redux/actions/bookActions';

import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

import style from './LoadMore.module.css';

const LoadMore = () => {
	const dispatch = useDispatch();
	let { startIndex, search, sort } = useSelector((state) => state.filter);

	const handleMoreBooks = () => {
		dispatch(getMoreBooks({ sort, search, startIndex: startIndex + 12 }));
	};

	return (
		<>
			<div className={style.loadmore__container}>
				<Button onClick={() => handleMoreBooks()} variant="contained" className="loadmore-button">
					Load more
				</Button>
			</div>
		</>
	);
};

export default LoadMore;


// import { useState } from 'react';
// import { loadImages } from '../store/imageAction'
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';




// function Button() {
//     const [category, setCategory] = useState('sports');
//     const [page, setPage] = useState(1);
//     const dispatch = useDispatch();
//     const photos = useSelector(state => state.photos.data.slice((page - 1) * 9, page * 9));

//     const handleCategoryChange = newCategory => {
//         setCategory(newCategory);
//         setPage(1); 
//         dispatch(loadImages(newCategory));
//       };

//     const handleNextPage = () => {
//         setPage(prevPage => prevPage + 1);
//       };
    
//       const handlePrevPage = () => {
//         setPage(prevPage => prevPage - 1);
//       };
//     return (
//         <>
//         {/* <div>
//         <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
//         <button onClick={handleNextPage} disabled={photos.length < 9}>Next</button>
//       </div>
//       <div>
//         <button onClick={() => handleCategoryChange('sports')}>Sports</button>
//         <button onClick={() => handleCategoryChange('work')}>Work</button>
//         <button onClick={() => handleCategoryChange('animals')}>Animals</button>
//       </div> */}
//       </>
//       );
// }

// export default Button;
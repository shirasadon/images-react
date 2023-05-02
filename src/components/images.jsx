
  import { useState } from 'react';
   import { loadImages, } from '../store/imageAction'
   import { useDispatch } from 'react-redux';
   import { useSelector } from 'react-redux';
   import { useEffect } from 'react';
  

function Images() {
    const [category, setCategory] = useState('sports');
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const images = useSelector(state => state.images.data.slice((page - 1) * 9, page * 9));
  
    const handleCategoryChange = newCategory => {
      setCategory(newCategory);
      setPage(1); 
      dispatch(loadImages(newCategory));
    };
  
    const handleNextPage = () => {
      setPage(prevPage => prevPage + 1);
    };
  
    const handlePrevPage = () => {
      setPage(prevPage => prevPage - 1);
    };
  
    useEffect(() => {
      dispatch(loadImages(category));
    }, [category, dispatch, page]);
    
  return (
    <>
    <div style={{width: '1200px',
      marginRight: 'auto',
      marginLeft: 'auto'
    }}>
    <h1>Images</h1>
    
    <div>
      <button class="btn btn-secondary" onClick={() => handleCategoryChange('sports')}>Sports</button>
      <button class="btn btn-secondary" onClick={() => handleCategoryChange('work')}>Work</button>
      <button class="btn btn-secondary" onClick={() => handleCategoryChange('animals')}>Animals</button>
      <button class="btn btn-secondary" onClick={() => handleCategoryChange('flowers')}>flowers</button>
      </div>
  


    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '30px' ,margin:"30px",height:'120px'}}>
      {images.map(photo => (
        <img key={photo.id} src={photo.largeImageURL} alt={photo.tags} style={{ width: '100%', height: 'auto' }} />
      ))}
    </div>
    </div>

    
 
    <button class="btn btn-secondary" style={{marginLeft:'60px',
    border: '3px'} } onClick={handlePrevPage} disabled={page === 1}>Prev</button>
        <button class="btn btn-secondary" style={{ position: 'static',marginLeft:'1600px',
    border: '3px'} } onClick={handleNextPage} disabled={images.length < 9}>Next</button>
     
 </>

  );
        }
export default Images
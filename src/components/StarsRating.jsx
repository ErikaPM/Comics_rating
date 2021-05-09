import React from 'react';
import '../assets/styles/components/StarRating.scss';
import Star from '../components/Star';

const StarsRating = (props) => {
  const {
    index, 
    rating, 
    hover, 
    onMouseEnter, 
    onMouseLeave, 
    onSave
  } = props;
  const fill = React.useMemo(() => {
    if(hover >= index) {
      return 'yellow';
    } else if (!hover && rating >= index){
      return 'yellow';
    } else {
      return 'none';
    }
  }, [index, rating, hover]);
  return (
    <div className = "stars cursor" 
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
      onClick={() => onSave(index)}>
      <Star fill = {fill}/>
    </div>
  )
}

export default StarsRating;
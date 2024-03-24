import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrailers } from '../../redux/operations';
import {
  selectError,
  selectIsLoading,
  selectTrailers,
} from '../../redux/selectors';

import { TrailersItem } from './TrailersItem';
import { Button, List, Wrapper } from './TrailersList.styled';

export const TrailersList = () => {

  const dispatch = useDispatch();
  const trailers = useSelector(selectTrailers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTrailers(1));
  }, [dispatch]);

  const [visibleTrailers, setVisibleTrailers] = useState(4); 
  const loadMore = () => {
    setVisibleTrailers((prev) => prev + 4); 
  };
  const allTrailersDisplayed = visibleTrailers >= trailers.length;

    return (
      <Wrapper>
      <List>
        {trailers.slice(0, visibleTrailers).map(trailer => {
          return <TrailersItem trailer={trailer} key={trailer._id} />
        })}
      </List>
      {!allTrailersDisplayed && (
      <Button onClick={loadMore} disabled={allTrailersDisplayed}>Load more</Button>
      )}
      </Wrapper>
    );
  };
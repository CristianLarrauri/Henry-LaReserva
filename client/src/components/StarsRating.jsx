import StarsRating from 'stars-rating';
import React from 'react';
import { render } from 'react-dom';

render(
	<StarsRating count={4} size={30} color2={'#ffd700'} />,

	document.getElementById('where-to-render')
);

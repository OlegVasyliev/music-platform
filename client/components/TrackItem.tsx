import React from 'react';
import { ITrack } from '../types/track';

interface TrackItemsProps {
	track: ITrack;
	active?: boolean;
}

const  TrackItem: React.FC<TrackItemsProps> = ({track, active = false}) => {
	return (
		<div>
			{track.name}
		</div>
	);
};

export default TrackItem;
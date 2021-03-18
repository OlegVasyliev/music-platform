import { Card, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';

interface TrackItemProps {
	track: ITrack;
	active?: boolean;
}

const  TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
	return (
		<Card className={styles.track}>
			<IconButton>
				{active
					? <Pause/>
					:<PlayArrow/>
				}
			</IconButton>
			<img className={styles.img} src={track.picture}/>
			<Grid container direction="column" className={styles.grid}>
				<div>{track.name}</div>
				<div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
			</Grid>
			{active && <div> 02:42 / 03:32</div>}
			<IconButton className={styles.icon}>
				<Delete/>
			</IconButton>
		</Card>
	);
};

export default TrackItem;
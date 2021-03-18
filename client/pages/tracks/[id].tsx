import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const TrackPage = () => {
	const track: ITrack = {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/50b1909c-4d3a-4785-9df7-0dc0b3246866.mp3', picture: 'http://localhost:5000/image/66c31d73-68ac-4017-ae5e-6fb5aaba55b4.jpg', comments: [] };
	const router = useRouter();
	
	return (
		<MainLayout>
			<Button
			 variant={'outlined'}
			 style={{fontSize: 32}}
			 onClick={() => router.push('/tracks')}>
				Back to track list
			</Button>
			<Grid container style={{margin: '20px 0'}}>
				<img src={track.picture} width={200} height={200}/>
				<div style={{marginLeft: 30}}>
					<h1>Track name - {track.name}</h1>
					<h1>Artist - {track.artist}</h1>
					<h1>Listens - {track.listens}</h1>
				</div>
			</Grid>
			<h1>Lyrics</h1>
			<p>{track.text}</p>
			<h1>Comments</h1>
			<Grid container>
				<TextField
					label='your name'
					fullWidth
				/>
				<TextField
					label='comment'
					fullWidth
					multiline
					rows={4}
				/>
				<Button>Send comment</Button>
			</Grid>
			<div>
				{track.comments.map(comment =>
				<div>
					<div>Author - {comment.username}</div>
					<div>Comment - {comment.text}</div>
				</div>
				)}

			</div>
		</MainLayout>
	)
}

export default TrackPage;
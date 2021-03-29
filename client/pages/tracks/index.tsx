import {Grid, Card, Button, Box} from '@material-ui/core';
import {useRouter} from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import MainLayout from '../../layouts/MainLayout';
import {ITrack} from '../../types/track';
import {useTypedSelector} from "../../hooks/useTypedSelector";


const Index = () => {
    const router = useRouter()
    const tracks: ({ comments: any[]; listens: number; artist: string; name: string; _id: string; text: string; audio: string; picture: string } | { comments: any[]; listens: number; artist: string; name: string; _id: string; text: string; audio: string; picture: string } | { comments: any[]; listens: number; artist: string; name: string; _id: string; text: string; audio: string; picture: string })[] = [
        {
            _id: '1',
            name: 'Track 1',
            artist: 'Artist 1',
            text: 'Some text',
            listens: 5,
            audio: 'http://localhost:5000/audio/50b1909c-4d3a-4785-9df7-0dc0b3246866.mp3',
            picture: 'http://localhost:5000/image/66c31d73-68ac-4017-ae5e-6fb5aaba55b4.jpg',
            comments: []
        },
        {
            _id: '2',
            name: 'Track 1',
            artist: 'Artist 1',
            text: 'Some text',
            listens: 5,
            audio: 'http://localhost:5000/audio/50b1909c-4d3a-4785-9df7-0dc0b3246866.mp3',
            picture: 'http://localhost:5000/image/66c31d73-68ac-4017-ae5e-6fb5aaba55b4.jpg',
            comments: []
        },
        {
            _id: '3',
            name: 'Track 1',
            artist: 'Artist 1',
            text: 'Some text',
            listens: 5,
            audio: 'http://localhost:5000/audio/50b1909c-4d3a-4785-9df7-0dc0b3246866.mp3',
            picture: 'http://localhost:5000/image/66c31d73-68ac-4017-ae5e-6fb5aaba55b4.jpg',
            comments: []
        },

    ]
    // @ts-ignore
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Track list</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Download track
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};
export default Index;
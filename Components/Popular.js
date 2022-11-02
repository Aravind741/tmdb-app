import { StyleSheet, View } from 'react-native'

import { AppContext } from '../App'

import React, { useContext } from 'react';
import MovieCard from './MovieCard';



const Popular = () => {


    const { movies, movieUpdate } = useContext(AppContext);

    const title = 'Popular';
    const buttonTitle1 = 'movies';
    const buttonTitle2 = 'onTv';
    const mov = 'movie';
    const tv = 'tv'


    return (
        <View>
            <MovieCard movies={movies} movieUpdate={movieUpdate} title={title} buttonTitle1={buttonTitle1} buttonTitle2={buttonTitle2} mov={mov} tv={tv} />
        </View>
    )
}

export default Popular

const styles = StyleSheet.create({})
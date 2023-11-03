import {useEffect, useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import './App.css';
import {fetchTopAlbums, fetchNewAlbums, fetchSongs} from './api/api';
import Section from "./Components/Section/Section";
import styles from "./App.module.css";
import BasicAccordion from '../src/Components/Accordion/Accordion';

function App() {
    const [topAlbumsData, setTopAlbumsData] = useState([]);
    const [newAlbumsData, setNewAlbumsData] = useState([]);
    const [songsData, setSongsData] = useState([]);
    const [filteredDataValues, setFilteredDataValues] = useState([]);
    const [value, setValue] = useState(0);


    const generateTopAlbumsData = async () => {
        try {
            const data = await fetchTopAlbums();
            setTopAlbumsData(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        generateTopAlbumsData();
    }, []);

    const generateNewAlbumsData = async () => {
        try {
            const data = await fetchNewAlbums();
            setNewAlbumsData(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        generateNewAlbumsData();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const generateSongsData = (value) => {
        let keys;
        if (value === 0) {
            filteredData(songsData);
            return;
        } else if (value === 1) {
            keys = "rock";
        } else if (value === 2) {
            keys = "pop";
        } else if (value === 3) {
            keys = "jazz"
        } else if (value === 4) {
            keys = "blues"
        }
        const res = songsData.filter((item) => item.genre.key === keys);
        filteredData(res);
    }

    useEffect(() => {
        generateSongsData(value);
    }, [value]);

    const filteredData = (val) => {
        setFilteredDataValues(val);
    }

    const generateAllSongData = async () => {
        try {
            const res = await fetchSongs();
            setSongsData(res);
            setFilteredDataValues(res);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        generateAllSongData();
    }, []);


    return (<div>
        <Navbar/>
        <Hero/>
        <div className={styles.sectionWrapper}>
            <Section
                data={topAlbumsData}
                type="album"
                title="Top Albums"
                filteredDataValues={topAlbumsData}
            />
            <Section
                data={newAlbumsData}
                type="album"
                title="New Albums"
                filteredDataValues={newAlbumsData}
            />
            <Section
                data={filteredDataValues}
                type="songs"
                title="Songs"
                filteredData={filteredData}
                filteredDataValues={filteredDataValues}
                value={value}
                handleChange={handleChange}
            />
        </div>
            <BasicAccordion />
    </div>);
}

export default App;

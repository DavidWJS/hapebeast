import React, {useState, useEffect} from 'react'
// import MintInfoSection from './components/MintInfo';
import Navbar from '../components/Navbar'
import GlobalStyle from '../globalStyles'
import Hero from '../components/Hero';
import {SliderData} from '../data/SliderData'
import Dropdown from '../components/Dropdown';
import InfoSection from '../components/InfoSection';
import { InfoData, InfoDataTwo} from '../data/InfoData';
import VideoSection from '../components/Video';
import Footer from '../components/Footer';
import RoadMap from '../components/RoadMap';
import Team from '../components/Team';

const Home = () => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("Dec 25, 2021").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000))  / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / (1000));
            
            if(distance < 0) {
                // Stop Timer
                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <GlobalStyle />
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData}/>
            <InfoSection {...InfoDataTwo}/>
            <VideoSection />
            <RoadMap/>
            <Team/>
            <Footer/>
            {/* <CountdownTimer timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/> */}
        </>
    );
};

export default Home;
import React from 'react'
import styled from 'styled-components'
import ImageOne from '../images/hape6.jpg'
import ImageTwo from '../images/hape8.jpg'
import ImageThree from '../images/hape9.jpg'

const TeamContainer = styled.div`
    background-color: #000000;
    height: 2300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 3400px;
    }
`;

const TeamWrapper1 = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 36px;
    padding: 0 50px;
    margin-bottom: 150px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

const TeamWrapper2 = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 36px;
    padding: 0 50px;
    margin-bottom: 150px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

const TeamWrapper3 = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 36px;
    padding: 0 50px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

const TeamWrapper4 = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 36px;
    padding: 0 50px;
    margin-bottom: 150px;
    justify-content: center;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
}
`;

const TeamCard1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 340px;
    width: 400px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

const TeamCard2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

const TeamCard3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 340px;
    width: 300px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

const TeamCard4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

const TeamIcon1 = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
    border-radius: 100px;
`;

const TeamIcon2 = styled.img`
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
    border-radius: 100px;
`;

const TeamIcon3 = styled.img`
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
    border-radius: 100px;
`;

const TeamH1 = styled.h1`
    font-size: 4rem;
    font-weight: 1000;
    color: #ffffff;
    margin-bottom: 64px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const TeamH2 = styled.h2`
    font-size: 1.3rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: #ffffff;
    text-align: center;
`;

const TeamP1 = styled.p`
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    margin-bottom: 10px;
    text-align: center;
`;

const TeamP2 = styled.p`
    font-size: 0.8rem;
    text-align: center;
    color: #ffffff;
    text-align: center;
`;

const Team = () => {
    return (
        <TeamContainer id="team">
            <TeamH1>MEET THE HⱯPEBEAST TEAM</TeamH1>
            <TeamWrapper1>
                <TeamCard1>
                    <TeamIcon1 src={ImageTwo} alt={ImageTwo}/>
                    <TeamH2>DIGIMENTAL</TeamH2>
                    <TeamP1>PRIMAL HAPE</TeamP1>
                    <TeamP2>Founder of HAPEBEAST, Digimental Studio and Lead Digital Artist on the project. Proud member of BAYC.</TeamP2>
                </TeamCard1>
            </TeamWrapper1>
            <TeamWrapper2>
                <TeamCard2>
                    <TeamIcon2 src={ImageOne} alt={ImageOne}/>
                    <TeamH2>TROU</TeamH2>
                    <TeamP1>UTILITY</TeamP1>
                    <TeamP2>A game designer and creative director with 20 years’ experience, Trou plans the future and scripts the present.</TeamP2>
                </TeamCard2>
                <TeamCard2>
                    <TeamIcon2 src={ImageOne} alt={ImageOne}/>
                    <TeamH2>RICK</TeamH2>
                    <TeamP1>SMART CONTRACTS</TeamP1>
                    <TeamP2>Leading Digimental’s interface with the blockchain and securing the future of the HAPES. Tech’s back in fashion.</TeamP2>
                </TeamCard2>
                <TeamCard2>
                    <TeamIcon2 src={ImageOne} alt={ImageOne}/>
                    <TeamH2>JUSTCARL</TeamH2>
                    <TeamP1>STRATEGY</TeamP1>
                    <TeamP2>Noise & positioning. Want to talk to the HAPEBEAST team about a commercial arrangement? Carl’s your point of contact.</TeamP2>
                </TeamCard2>
            </TeamWrapper2>
            <TeamWrapper3>
                <TeamCard3>
                    <TeamIcon3 src={ImageThree} alt={ImageThree}/>
                    <TeamH2>THE MODERATION TEAM</TeamH2>
                </TeamCard3>
            </TeamWrapper3>
            <TeamWrapper4>
                <TeamCard4>
                    <TeamP1>NG</TeamP1>
                    <TeamP2>HEAD MOD & CHINESE MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>RIDOO</TeamP1>
                    <TeamP2>INDONESIAN MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>TOBI</TeamP1>
                    <TeamP2>PHILIPPINES MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>HOTMESSMELLOW</TeamP1>
                    <TeamP2>INDIAN MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>THEGOAT</TeamP1>
                    <TeamP2>NEW ZEALAND MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>YIN</TeamP1>
                    <TeamP2>CHINESE MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>MARTBIEANS</TeamP1>
                    <TeamP2>VC MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>MIKEY G</TeamP1>
                    <TeamP2>US MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>KUROMI</TeamP1>
                    <TeamP2>CHINESE MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>DONA</TeamP1>
                    <TeamP2>SPANISH MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>NITOO3</TeamP1>
                    <TeamP2>FRENCH MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>FLOOB</TeamP1>
                    <TeamP2>JAPANESE MODERATOR</TeamP2>
                </TeamCard4>
                <TeamCard4>
                    <TeamP1>CRISTIAN</TeamP1>
                    <TeamP2>HEAD MOD & LGBTQ+ MODERATOR</TeamP2>
                </TeamCard4>
            </TeamWrapper4>
        </TeamContainer>
    );
};

export default Team;
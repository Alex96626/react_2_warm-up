import { useState } from 'react';

import './Ticklish.css';

const moodList = ['😐', '😋', '💥'];

const Ticklish = () => {
    const [moodLevel, setMoodLevel] = useState(0);

    const handlerSwitchMood = () => {
        if (moodLevel >= moodList.length - 1) return;
        setMoodLevel((prevMood) => prevMood + 1);
    };

    return (
        <div
            className='Mood'
            onClick={handlerSwitchMood}
            data-mood={moodList[moodLevel]}
        ></div>
    );
};

export { Ticklish };

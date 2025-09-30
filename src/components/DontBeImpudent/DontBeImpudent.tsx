import { useRef, useState, type ChangeEvent } from 'react';

const DontBeImpudent = () => {
    const characterLimit = 3;

    const [characterCount, setCharacterCount] = useState(characterLimit);
    const wordsRef = useRef(characterLimit);

    const handlerСheckCharacterCount = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setCharacterCount(() => {
            const currentValue = target.value;
            const currentCharacterCount = currentValue.length;
            let charactersLeft = characterLimit - currentCharacterCount;

            if (charactersLeft < 0) {
                target.value = currentValue.substring(0, currentValue.length - 1);
                charactersLeft = 0;
            }

            wordsRef.current = charactersLeft;
            console.log(characterCount)
            return charactersLeft;
        });
    };

    return (
        <div className='DontBeImpudent'>
            <div>
                <input type='text' onChange={handlerСheckCharacterCount} />
                {characterCount === 0 && <p className='error'>Недопустимое количество символов</p> }
            </div>
            <span>Отслось {wordsRef.current} символ(а/ов)</span>
        </div>
    );
};

export { DontBeImpudent };

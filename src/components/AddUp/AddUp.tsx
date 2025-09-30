import { useRef, useState, type ChangeEvent } from 'react';

const AddUp = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState(0);

    const valueRef = useRef('');

    const handlerChangeValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
        valueRef.current = target.value;
        setValue(target.value);
    };

    const handlerAdditionValue = () => {
        setResult(Number(result) + Number(valueRef.current));
    };

    return (
        <div className='Add-up'>
            <input
                type='text'
                className='Add-up-Value'
                value={value}
                onChange={handlerChangeValue}
            />
            <button className='Add-up-Button' onClick={handlerAdditionValue}>
                Plus
            </button>
            <div className='Add-up-Result'>{result}</div>
        </div>
    );
};

export { AddUp };

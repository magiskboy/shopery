import s from './Radio.module.css';
import { useEffect, useState } from "react";
import classNames from "classnames";

type Props = {
    checked?: boolean;
    onChange?: (value: boolean) => void;
};

const Radio: React.FC<Props> = ({checked, onChange}) => {
    const [value, setValue] = useState(Boolean(checked));
    
    const onClick = () => {
        setValue(true);
    }

    useEffect(() => {
        onChange?.(value);
    }, [value, onChange])

    return <div className={classNames({
        [s.radio]: true,
        [s['radio-checked']]: value,
    })} onClick={onClick}>
        {value && <div className={s.inner}></div>}
    </div>
}

export default Radio;
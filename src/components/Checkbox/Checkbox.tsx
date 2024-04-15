import { PiCheckBold } from "react-icons/pi";
import s from './Checkbox.module.css';
import { useEffect, useState } from "react";
import classNames from "classnames";

type Props = {
    checked?: boolean;
    onChange?: (value: boolean) => void;
};

const Checkbox: React.FC<Props> = ({checked, onChange}) => {
    const [value, setValue] = useState(Boolean(checked));
    
    const toggle = () => {
        setValue(state => !state);
    }

    useEffect(() => {
        onChange?.(value);
    }, [value, onChange])

    return <div className={classNames({
        [s.checkbox]: true,
        [s.checked]: value,
    })} onClick={toggle}>{value && <PiCheckBold color="white" />}</div>
}

export default Checkbox;
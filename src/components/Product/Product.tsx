import Image from 'next/image';
import s from './Product.module.css';
import Price from '../Price';
import Rate from '../Rate';
import { PiHandbag } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { PiHeart } from "react-icons/pi";
import Button from '../Button';


type Props = {
    image?: string;
    name: string;
    price: number;
    currency?: string;
    rate?: number;
}

const Product: React.FC<Props> = ({name = '', price, currency = 'USD', rate, image = ''}) => {
    return <div className={s.product}>
        <div className={s.image}>
            <Image src={image} width={116} height={116} alt={name} />
        </div>
        <div className={s.main}>
            <div className={s.detail}>
                <span className={s.name}>{name}</span>
                <Price price={price} currency={currency} className={s.price} />
                {rate && <Rate rate={rate} />}
            </div>
            <div className={s.mask}>
                <span className={s.name}>{name}</span>
                <div className={s.actions}>
                    <Button variant="fill"><PiHandbag size={20} /></Button>
                    <Button variant="fill"><IoEyeOutline size={20} /></Button>
                    <Button variant="fill"><PiHeart size={20} /></Button>
                </div>
            </div>
        </div>
    </div>
}

export default Product;
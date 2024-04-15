import classNames from 'classnames';
import s from './Price.module.css';

export const Price: React.FC<Props> = ({size = 'medium', price, sale, currency = 'USD', locale = 'en-US', className = ''}) => {
    return <div className={className}>
        <span className={classNames({
            [s[size || 'medium']]: true,
            [s.price]: true
        })}>{price.toLocaleString(locale, {style: 'currency', currency})}</span>
        {sale && <span className={classNames({
            [s.sale]: true,
            [s[size || 'medium']]: true,
        })}>{sale.toLocaleString(locale, {style: 'currency', currency})}</span>}
    </div>
}

type Props = {
    size?: 'small' | 'medium' | 'large',
    price: number,
    sale?: number,
    currency?: string,
    locale?: string,
    className?: string,
}
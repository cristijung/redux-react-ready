import { forwardRef } from 'react';
import styles from './Input.module.scss';

function Input({ value, onChange, ...algumasProps }, ref) {
    return (
        <input 
            ref={ref}
            value={value} 
            onChange={onChange} 
            {...algumasProps}
            className={styles.input} 
        />
    )
    
}

export default forwardRef(Input);
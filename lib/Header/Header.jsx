import classes from './Header.module.css';
export function Header({className,children}){
    let styles = className ? `${className} ${classes.header}` :`${classes.header}`;
    return (
        <div className={styles} >{children}</div>
    )
}
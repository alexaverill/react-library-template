import classes from './Button.module.css';
export function Button(props){
    return(
        <button className={classes.testButton} onClick={props.onClick}>Button</button>
    )
}
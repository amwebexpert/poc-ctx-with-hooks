import * as React from 'react';
import './Checkbox.css';

interface IProps {
    selected: boolean;
    onClick?: () => void;
}

export const Checkbox: React.FunctionComponent<IProps> = (props: IProps) => {
    let cssClass: string;
    if (props.selected) {
        cssClass = 'checkbox clickable-item fa fa-lg fa-check-square-o';
    } else {
        cssClass = 'checkbox clickable-item fa fa-lg fa-square-o';
    }

    if (props.onClick) {
        return (
            <span className={cssClass} aria-hidden="true" onClick={props.onClick}/>
        );
    } else {
        return (
            <span className={cssClass} aria-hidden="true"/>
        );
    }

};

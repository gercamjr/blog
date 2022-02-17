import React from 'react';
import Moment from "react-moment";
export default function PublishedDate (props) {
    console.log(props);
    return (
        <Moment format="MMM Do YYYY">
                  {props.date}
        </Moment>
    )
}
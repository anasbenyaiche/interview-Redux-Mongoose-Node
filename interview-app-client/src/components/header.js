import React from 'react';
import Input from '@material-ui/core/Input';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (<div style={{ display: 'flex', justifyContent: 'space-between', margin: '2%', alignItems: 'center' }}>
            <h1> Users List</h1>
            <div style={{ display: 'flex',alignItems: 'center'}}>
                <Input></Input>
                <div id="ex1" class="modal">
                    <div>{this.props.children}</div>
                    <a href="#" rel="modal:close">Close</a>
                </div>


                <p><a href="#ex1" rel="modal:open"><AddBoxIcon></AddBoxIcon></a></p>

            </div>

        </div>)
    }
}
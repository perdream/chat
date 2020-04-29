import React from 'react';
import { Image, Card, Icon } from "semantic-ui-react"
const { ipcRenderer } = window.require('electron');

function Popcontent(props){
    const { imageUrl,changeOpen} = props; //获取父组件传递过来的值

    function view_avatar(e){
        ipcRenderer.send('open-view-avatar-window',imageUrl)
        changeOpen(false,e);
    };
    return (
        <Card>
        <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={imageUrl}
                onClick={(e)=>{view_avatar(e)}}
            /> 
            <Card.Header>
                Steve Sanders
                <Icon name='male' color="blue"/> 
            </Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="right">
            <a style={{marginRight:10}}>
                <Icon name='share square outline' color="black"/>
                shared
            </a>
            <a>
                <Icon name='paper plane outline' color="black"/>
                chat
            </a>
        </Card.Content>
    </Card>
    )
}
export default Popcontent;
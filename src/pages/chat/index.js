import React, { Fragment, useState, useEffect,useRef } from 'react';
import { Grid, Input, Icon, Button, List, Image, Card, Feed, Comment, Header, Form, TextArea, Popup } from 'semantic-ui-react'
import './index.css'
import Close from '../component/closebtn/close'
import 'emoji-mart/css/emoji-mart.css'
import { Picker,Emoji } from 'emoji-mart'
const { ipcRenderer } = window.require('electron')

function Chatpage() {
    // const [curr_avatar, setAvatar] = useState('')
    const [title, setTitle] = useState(2)
    const [open_emoji,setEmoji] = useState(false)
    const [content,setContent] = useState('')
    const [current_emoji,setCurrentEmoji] = useState('grinning')
    const inputRef = new useRef() 

    const style = {
        marginLeft: 10
    }
    const info_list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    function viewAvatar(e) {
        // console.log(e.target.src)
        // setAvatar({curr_avatar:e.target.src},()=>{
        //     // ipcRenderer.send('open-view-avatar-window',curr_avatar)
        //     console.log('hjhjhj')
        // })
        ipcRenderer.send('open-view-avatar-window', e.target.src)
    }

    function changeText(event,data){
        setContent(event.target.value)
    }

    function clearContent(){
        setContent('')
    }

    function sendContent(){
        if(content){
            console.log(content)
            setContent('')
        }
        return
    }

    function chooseEmoji(emoji,event){
        console.log(emoji)
        //Stitching content
        setContent(content+''+emoji.native)
        setCurrentEmoji(emoji)
        inputRef.current.focus()
        setEmoji(false)
    }
    // useEffect(()=>{
    //     if(curr_avatar){
    //         ipcRenderer.send('open-view-avatar-window',curr_avatar)
    //     }
    // },[curr_avatar])
    //view avatar

    return (
        <Fragment>
            <Grid.Column className="center-layout">
                <Input
                    icon={<Icon name='search' inverted circular link />}
                    placeholder='Search...'
                    size='mini'
                />
                <Button icon='add' size="mini" style={style} />
                {/* <div dangerouslySetInnerHTML={{ __html: '<Emoji emoji="santa" set="apple" size={16} />' }}></div> */}
                <List relaxed="very" divided className="frends-list" selection verticalAlign='middle'>
                    <List.Item className="list-item">
                        <Card>
                            <Card.Content>
                                <Image
                                    floated='right'
                                    size='mini'
                                    src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585799559389&di=14925ce79237fbe0774845f491ef39a2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F10%2F20190110004111_dgsxc.thumb.700_0.png'
                                    onClick={(e) => {
                                        viewAvatar(e)
                                    }}
                                />
                                <Card.Header>Jenny Lawrence</Card.Header>
                                <Card.Meta>New User</Card.Meta>
                                <Card.Description>
                                    Jenny requested permission to view your contact details
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        chat
                                    </Button>
                                    <Button basic color='red'>
                                        video
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    </List.Item>
                    <List.Item className="list-item">
                        <Card>
                            <Card.Content>
                                <Card.Header>Recent Activity</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label
                                            image='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585799559387&di=d97ae93be6da5c7a73869bf41e5bfa59&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F777c042b46122264ed15c6e4a905f3271a2d862a18146-4FEgbO_fw658'
                                            onClick={(e) => {
                                                viewAvatar(e)
                                            }}
                                        />
                                        <Feed.Content>
                                            <Feed.Date content='1 day ago' />
                                            <Feed.Summary>
                                                Jenny Hess
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                    <Feed.Event>
                                        <Feed.Label
                                            image='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585799559365&di=00a43add5700908354082384d6f82223&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F006APoFYly1g7kb3bugi5j30h50hs40q.jpg'
                                            onClick={(e) => {
                                                viewAvatar(e)
                                            }}
                                        />
                                        <Feed.Content>
                                            <Feed.Date content='3 days ago' />
                                            <Feed.Summary>
                                                Molly Malone
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                    <Feed.Event>
                                        <Feed.Label
                                            image='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585627010&di=c518f2fdae5bdffb5c141707099b6d87&src=http://b-ssl.duitang.com/uploads/item/201901/14/20190114173306_c2P5w.jpeg'
                                            onClick={(e) => {
                                                viewAvatar(e)
                                            }}
                                        />
                                        <Feed.Content>
                                            <Feed.Date content='4 days ago' />
                                            <Feed.Summary>
                                                Elliot Baker
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card.Content>
                        </Card>
                    </List.Item>
                    <List.Item className="list-item">
                        <Image
                            avatar
                            src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585627010&di=c518f2fdae5bdffb5c141707099b6d87&src=http://b-ssl.duitang.com/uploads/item/201901/14/20190114173306_c2P5w.jpeg'
                            onClick={(e) => {
                                viewAvatar(e)
                            }}
                        />
                        <List.Content>
                            <List.Header className="item-header">Snickerdoodle</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item className="list-item">
                        <Image
                            avatar
                            src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585627010&di=c518f2fdae5bdffb5c141707099b6d87&src=http://b-ssl.duitang.com/uploads/item/201901/14/20190114173306_c2P5w.jpeg'
                            onClick={(e) => {
                                viewAvatar(e)
                            }}
                        />
                        <List.Content>
                            <List.Header className="item-header">Snickerdoodle</List.Header>
                                An excellent companion
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column className="right-layout content-width" stretched={true}>
                <div className="main-container">
                    <div className="top-container">
                        {/* <div className="close-btn">
                            <Icon name="minus" size="small" link style={{ marginRight: 15 }} />
                            <Icon name="close" size="small" link style={{ marginRight: 10 }} />
                        </div> */}
                        <Close />
                        {
                            title === 1 ? <Header as='h5' icon='users' content='Learn More' /> :
                                <Header as='h5'>
                                    <Image size="mini" circular src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585627010&di=c518f2fdae5bdffb5c141707099b6d87&src=http://b-ssl.duitang.com/uploads/item/201901/14/20190114173306_c2P5w.jpeg' /> Patrick
                          </Header>
                        }
                    </div>
                    <div className="seond-container">
                        <Comment.Group size='small'>
                            {/* <Comment className="right-item">
                                <Comment.Content >
                                    <Comment.Metadata >
                                        <span className="item-time">Today at 5:42PM</span>
                                    </Comment.Metadata>
                                    <Comment.Author as='a' className="item-name">Matt</Comment.Author>
                                    <Comment.Text className="item-text">How artistic!Dude, this is awesome. Thanks so muchDude, this is awesome. Thanks so muchDude, this is awesome. Thanks so much</Comment.Text>
                                    <Comment.Actions className="item-reply">
                                        <a>Reply</a>
                                    </Comment.Actions>
                                </Comment.Content>
                                <Comment.Avatar className="item-avatar" as='a' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585799559387&di=d97ae93be6da5c7a73869bf41e5bfa59&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F777c042b46122264ed15c6e4a905f3271a2d862a18146-4FEgbO_fw658'
                                />
                            </Comment> */}
                            {
                                info_list.map(item => {
                                    return (
                                        <Comment>
                                            <Comment.Avatar as='a' src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585627010&di=c518f2fdae5bdffb5c141707099b6d87&src=http://b-ssl.duitang.com/uploads/item/201901/14/20190114173306_c2P5w.jpeg' />
                                            <Comment.Content>
                                                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                                <Comment.Metadata>
                                                    <span>5 days ago</span>
                                                </Comment.Metadata>
                                                <Comment.Text>Dude, this is awesome. Thanks so much 9999</Comment.Text>
                                                <Comment.Actions>
                                                    <a>Reply</a>
                                                </Comment.Actions>
                                            </Comment.Content>
                                        </Comment>
                                    )
                                })
                            }
                        </Comment.Group>
                    </div>
                    <div className="shird-container">
                        <div>
                            <Popup 
                                basic 
                                open={open_emoji} 
                                onOpen={()=>{
                                    setEmoji(true)
                                }}
                                onClose={()=>{
                                    setEmoji(false)
                                }}
                                on="click" 
                                trigger={
                                    <Button color='facebook' icon='facebook' inverted size="mini" />
                                }>
                                <Popup.Content>
                                    <Picker
                                        native={true}
                                        showPreview={false} 
                                        showSkinTones={false} 
                                        onClick={(emoji,event)=>{
                                            chooseEmoji(emoji,event)
                                        }}
                                        // onSelect={(emoji)=>{
                                        //     console.log(emoji)
                                        // }}
                                    />
                                </Popup.Content>
                            </Popup>
                            <Button color='twitter' icon='twitter' inverted size="mini" />
                            <Button color='linkedin' icon='linkedin' inverted size="mini" />
                            <Button color='google plus' icon='google plus' inverted size="mini" />
                        </div>
                        <Form>
                            <TextArea 
                                placeholder='Tell us more' 
                                style={{ minHeight: 60 }}
                                onChange={(event,data)=>{changeText(event,data)}}
                                value={content}
                                ref={inputRef}
                            />
                        </Form>
                        <Button.Group className="send-btn" size="mini">
                            <Button 
                                size="mini"
                                onClick={()=>{clearContent()}}
                            >cancel</Button>
                            <Button.Or text='ou' />
                            <Button 
                                positive 
                                size="mini"
                                onClick={()=>{sendContent()}}
                            >send</Button>
                        </Button.Group>
                    </div>
                </div>
            </Grid.Column>
        </Fragment>
    )
}

export default Chatpage
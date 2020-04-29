import React, { Fragment, useState, useReducer } from 'react';
import { Image, Popup} from "semantic-ui-react"
import './avatar.css'
import Popcontent from '../popcontent/popcontent'

function Avatar() {
    const [imageUrl,setImageUrl] = useState('https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585627010&di=c518f2fdae5bdffb5c141707099b6d87&src=http://b-ssl.duitang.com/uploads/item/201901/14/20190114173306_c2P5w.jpeg')
    const [isOpen,setIsOpen] = useState(false)

    function changeOpen(value,e){
        setIsOpen(value)
    }
    return (
        <Fragment>
            <Popup
                on='click'
                basic
                position="bottom right"
                trigger={
                    <Image src={imageUrl}
                        size="mini"
                        rounded
                        onClick={(e)=>{changeOpen(true,e)}}
                    />
                }
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onOpen={() => setIsOpen(true)}
            >
                <Popcontent imageUrl={imageUrl} changeOpen={changeOpen}/>
            </Popup>
        </Fragment>
    )
}

export default Avatar;
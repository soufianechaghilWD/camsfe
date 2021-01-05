import React, { useEffect, useState } from 'react'
import '../Style/Inside.css'
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SendIcon from '@material-ui/icons/Send';
import { useStateValue } from "./StateProvider";
import { useHistory }from 'react-router-dom';
import axios from '../axios'
import { getWhatItsNeeded, generate } from '../outils'
import IconButton from '@material-ui/core/IconButton';
import Pusher from 'pusher-js'

function Inside() {

    const [ state , dispatch] = useStateValue();
    const history = useHistory();
    const [contacts, setContacts] = useState([])
    const [inputSearch, setInputSearch] = useState('')
    const [searchInputFocus, setSearchInputFocus] = useState(false)
    const [waitDontLoseFocus, setWaitDontLoseFocus] = useState(false)
    const [selected, setSelected] = useState(null)
    const [messages, setMessages] = useState([])
    const [inputMsg, setInputMsg] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {
        if(state.user === null){
            history.push('/signin')
        }else{
            const pusher = new Pusher('6b2bfd2a7ff44ebf9466', {
                cluster: 'eu'
              });
          
              var channel = pusher.subscribe('messages');
              channel.bind('inserted', (data) => {
                alert(JSON.stringify(data));
              });
              channel.bind('updated', (data) => {
                  alert(JSON.stringify(data))
              })
        }
    }, [])

    useEffect(() => {
        axios.get(`/getUserInfo?id=${state?.user?.uid}`)
        .then(answer => {
            setContacts(answer.data.contacts)
            setUsername(answer.data.username)
        })
    }, [])

    const theRightSize = (str) => {
        if(str.length < 36) return str
        return str.split('').slice(0, 36).join('') + "..."
    }

    const handleAcontactClick = (contact) => {
        if(contacts?.some(one => one.username === contact.userName)){
            const msgsId =  contacts.filter(another => another.username === another.userName)[0]?.msgsId
            axios.get(`/allMsgs?id=${msgsId}`)
            .then(data => {
                setMessages(data.data)
            })
        }else{
            setMessages([])
        }
        setSelected(contact)
    }

    const handleAHavingcontactClick = (ele) => {
        const msgsId = generate(ele._id, state.user.uid)
        axios.get(`/allMsgs?id=${msgsId}`)
            .then(data => {
                setMessages(data.data)
            })
    }

    const handleMsgSend = () => {
        axios.post('/add_a_msg', {
            from : state.user.uid,
            message : inputMsg,
            time : new Date(),
            gen_id : generate(state.user.uid, selected._id),
            id1 : state.user.uid,
            id2 : selected._id,
            username1:  username,
            username2 : selected.userName
        })
    }
    console.log(selected)
    console.log(messages)
    return (
        <div className="inside">
            <div className="inside__body">
                <div className="inside__left">
                    <div className="inside__LeftHeader">
                        <Avatar className="inside__avatarUser">S</Avatar>
                        <div className="inside__LeftHeaderInfo">
                            <h3>{username}</h3>
                            <p> {theRightSize("This is My Bio create an account and have one too")} </p>
                        </div>
                        <SettingsIcon className="inside__headerSettingsIcon" />
                    </div>
                    <div className="inside__search">
                        <SearchIcon className="inside__searchIcon" />
                        <input type="text" onFocus={e => setSearchInputFocus(true)} onBlur={e => {if(waitDontLoseFocus === false) setSearchInputFocus(false)}} value={inputSearch} onChange={e => setInputSearch(e.target.value)} placeholder="Search or start a new chat" className="inside__searchField" />
                    </div>
                    {
                            (searchInputFocus && inputSearch !== '') && <div className="inside__searchOutput" tabIndex="0" onMouseEnter={() => setWaitDontLoseFocus(true)} onMouseLeave={() => setWaitDontLoseFocus(false)} onBlur={e => setSearchInputFocus(false)}  >
                                {getWhatItsNeeded(state.users, inputSearch, state.user.uid).length === 0 ? <p>SORRY</p> : 
                                
                                getWhatItsNeeded(state.users, inputSearch, state.user.uid).map(ele => (
                                    <div className="inside__contactsEach inside_eachSearch"  onClick={ () => handleAcontactClick(ele)}>
                                        <Avatar className="inside__contactsEachAvatar">{ele.userName.toUpperCase()[0]}</Avatar>
                                        <div className="inside__contactsEachInfo">
                                            <h3>{ele.userName}</h3>
                                            <p>{ele.email}</p>
                                        </div>
                                    </div>
                                ))

                                }
                            </div>
                    }
                    <div className="inside__contacts">

                        {contacts?.map(contact => (
                            <div onClick={() => handleAHavingcontactClick(contact)} className={contact?.username === selected?.userName ? 'inside__contactsEach inside__contactsEachSelected' : 'inside__contactsEach'}>
                                <Avatar className="inside__contactsEachAvatar">L</Avatar>
                                <div className="inside__contactsEachInfo">
                                    <h3>{contact?.username}</h3>
                                    <p>{theRightSize('This is our last message with lahcen')}</p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
                {selected === null ? (
                    <h1>No room opened</h1>
                ) : (
                    <div className="inside__right">
                    <div className="inside__rightHeader">
                        <Avatar className="inside__rightHeaderAvatar">L</Avatar>
                        <div className="inside__rightHeaderInfo">
                            <h3>{selected.userName}</h3>
                            <p>Last seen at 15:30</p>
                        </div>
                        <MoreVertIcon className="inside__rightHeaderMore" />
                    </div>
                    {/* <div className="inside__rightChat">
                        {messages?.map(ele => ele.from === state.user.uid ? 
                        (
                        <div className="inside__rightChatMsg inside__rightChatMsgOther">
                            <span>Tue, 29 Dec 2020 09:54:57 GMT</span>
                            <p>Man what's going on</p>
                        </div>
                        ) : 
                        (
                            <div className="inside__rightChatMsg">
                            <span>Tue, 29 Dec 2020 09:54:57 GMT</span>
                            <p>Yo what's up bro</p>
                        </div>
                        )
                        )
                        }
                    </div> */}
                    <div className="inside__rightSend">
                        <SentimentSatisfiedIcon className="inside__rightSendIconEmo" />
                        <input type="text" value={inputMsg} onChange={e => setInputMsg(e.target.value)} placeholder="Type a message" />
                        <IconButton onClick={handleMsgSend}>
                            <SendIcon className="inside__rightSendIconSend" />
                        </IconButton>
                    </div>
                </div>
                )
                }
                        
            </div>
        </div>
    )
}

export default Inside

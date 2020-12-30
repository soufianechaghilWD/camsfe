import React from 'react'
import '../Style/Inside.css'
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SendIcon from '@material-ui/icons/Send';


function Inside() {


    const theRightSize = (str) => {
        if(str.length < 36) return str
        return str.split('').slice(0, 36).join('') + "..."
    }

    return (
        <div className="inside">
            <div className="inside__body">
                <div className="inside__left">
                    <div className="inside__LeftHeader">
                        <Avatar className="inside__avatarUser">S</Avatar>
                        <div className="inside__LeftHeaderInfo">
                            <h3>Soufiane</h3>
                            <p> {theRightSize("This is My Bio create an account and have one too")} </p>
                        </div>
                        <SettingsIcon className="inside__headerSettingsIcon" />
                    </div>
                    <div className="inside__search">
                        <SearchIcon className="inside__searchIcon" />
                        <input type="text" placeholder="Search or start a new chat" className="inside__searchField" />
                    </div>
                    <div className="inside__contacts">
                        <div className="inside__contactsEach inside__contactsEachSelected">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Lahcen</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Omar</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Walid</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Nassim</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Salah</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Lahcen</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Lahcen</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Lahcen</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Lahcen</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Lahcen</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Lahcen</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Lahcen</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                        <div className="inside__contactsEach">
                            <Avatar className="inside__contactsEachAvatar">L</Avatar>
                            <div className="inside__contactsEachInfo">
                                <h3>Lahcen</h3>
                                <p>{theRightSize('This is our last message with lahcen')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inside__right">
                    <div className="inside__rightHeader">
                        <Avatar className="inside__rightHeaderAvatar">L</Avatar>
                        <div className="inside__rightHeaderInfo">
                            <h3>Lahcen</h3>
                            <p>Last seen at 15:30</p>
                        </div>
                        <MoreVertIcon className="inside__rightHeaderMore" />
                    </div>
                    <div className="inside__rightChat">
                        <div className="inside__rightChatMsg">
                            <span>Tue, 29 Dec 2020 09:54:57 GMT</span>
                            <p>Yo what's up bro</p>
                        </div>
                        <div className="inside__rightChatMsg inside__rightChatMsgOther">
                            <span>Tue, 29 Dec 2020 09:54:57 GMT</span>
                            <p>Man what's going on</p>
                        </div>
                        <div className="inside__rightChatMsg inside__rightChatMsgOther">
                            <span>Tue, 29 Dec 2020 09:54:57 GMT</span>
                            <p>Man what's going onMan what's going onMan what's going onMan what's going onMan what's going onMan what's going onMan what's going onMan what's going on</p>
                        </div>
                        <div className="inside__rightChatMsg ">
                            <span>Tue, 29 Dec 2020 09:54:57 GMT</span>
                            <p>Man what's going onMan what's going onMan what's going onMan what's going onMan what's going onMan what's going onMan what's going onMan what's going on</p>
                        </div>
                    </div>
                    <div className="inside__rightSend">
                        <SentimentSatisfiedIcon className="inside__rightSendIconEmo" />
                        <input type="text" placeholder="Type a message" />
                        <SendIcon className="inside__rightSendIconSend" />
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default Inside

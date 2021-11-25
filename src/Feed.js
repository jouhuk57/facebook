import React from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaKRN39DCZDNfcA92qZeA_TRaZwqmIPXn9w&usqp=CAU"
                  message="hi jowhar"
                  timestamp="This is timestamp"
                  username="jowhar"
                  image="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg" />

            <Post profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaKRN39DCZDNfcA92qZeA_TRaZwqmIPXn9w&usqp=CAU"
                  message="hi jowhar"
                  timestamp="This is timestamp"
                  username="jowhar"
                  image="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg" />

            <Post profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaKRN39DCZDNfcA92qZeA_TRaZwqmIPXn9w&usqp=CAU"
                  message="hi jowhar"
                  timestamp="This is timestamp"
                  username="jowhar"
                  image="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg" />


            <Post profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaKRN39DCZDNfcA92qZeA_TRaZwqmIPXn9w&usqp=CAU"
                  message="hi jowhar"
                  timestamp="This is timestamp"
                  username="jowhar"
                  image="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg" />
            {/* story reel*/}
             {/* MessageSender*/}
            
        </div>
    )
}

export default Feed

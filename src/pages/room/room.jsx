import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


export default function Room() {
    const { roomId } = useParams();

    // myMeeting Function
    const myMeeting = async (element) => {
        const appID = 141183308;
        const serverSecret = "f259a2118dc4359dcf5bdafede2b872d";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Enter your name"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: 'Copy Link',
                url: `https://https-github-com-rakesh60-videocalling.vercel.app/room/${roomId}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: true
        })

    }
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}
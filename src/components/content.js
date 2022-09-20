const content = (props) => {
    return `EJ Sathora is inviting you to a scheduled Zoom meeting.

Topic: EJ Sathora 4 - ${props.id} Malam
Time: 19:00 Jakarta

Join Zoom Meeting
${props.linkZoom}

Meeting ID: ${props.meetingId}
Passcode: ${props.passcode}`
}

export default content;
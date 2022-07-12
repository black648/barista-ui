
function getSessionMember() {
    let member = findSessionMember();

    if (member) {
        this.setState({
            member:member
        })
    }
}


const findSessionMember = () => {
    const memberSession = sessionStorage.getItem('member');
    if (memberSession) {
        const member = JSON.parse(memberSession);
        return member;
    }
    else {
        return false;
    }
}
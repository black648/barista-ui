import moment from 'moment';

export function dateFormat(e, isback) {

    if (!e) {
        if (!isback) { return false }
    } else {
        let date = new Date(e)
        let today = new Date()

        const toYear = today.getFullYear();        //년
        const toMonth = today.getMonth() + 1       //월
        const toDay = today.getDate()
        const year = date.getFullYear();        //년
        const month = date.getMonth() + 1       //월
        const day = date.getDate()              //일
        const hour = date.getHours()            //시
        const minutes = date.getMinutes()       //분

        if ((toYear === year) && (toMonth === month) && (toDay === day)) {
            return leadingZeros(hour, 2) + ':' + leadingZeros(minutes, 2)
        } else {
            return year + '-' + leadingZeros(month, 2) + '-' + leadingZeros(day, 2)
        }
    }

}

export function dateMinuteFormat(e, isback) {

    let date = new Date(e)
    let today = new Date()

    const toYear = today.getFullYear();        //년
    const toMonth = today.getMonth() + 1       //월
    const toDay = today.getDate()
    const year = date.getFullYear();        //년
    const month = date.getMonth() + 1       //월
    const day = date.getDate()              //일
    const hour = date.getHours()            //시
    const minutes = date.getMinutes()       //분
    const second = date.getSeconds()

    return year + '-' + leadingZeros(month, 2) + '-' + leadingZeros(day, 2) + " " + leadingZeros(hour, 2) + ":" + leadingZeros(minutes, 2)
}

export function dateSecondFormat(e, isback) {

    let date = new Date(e)
    let today = new Date()

    const toYear = today.getFullYear();        //년
    const toMonth = today.getMonth() + 1       //월
    const toDay = today.getDate()
    const year = date.getFullYear();        //년
    const month = date.getMonth() + 1       //월
    const day = date.getDate()              //일
    const hour = date.getHours()            //시
    const minutes = date.getMinutes()       //분
    const second = date.getSeconds()

    if ((toYear === year) && (toMonth === month) && (toDay === day)) {
        return leadingZeros(hour, 2) + ':' + leadingZeros(minutes, 2) + ":" + leadingZeros(second, 2)
    } else {
        return year + '-' + leadingZeros(month, 2) + '-' + leadingZeros(day, 2) + " " + leadingZeros(hour, 2) + ":" + leadingZeros(minutes, 2) + ":" + leadingZeros(second, 2)
    }
}

export function leadingZeros(date, num) {

    let zero = '';
    let convertDate = date.toString();
    if (convertDate.length < num) {
        for (let i = 0; i < num - convertDate.length; i++)
            zero += '0';
    }
    return zero + convertDate;
}

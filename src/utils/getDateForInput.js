export default function getDateForInput(date) {
    let temp = new Date(date);
    let day = temp.getDate(),
        month = temp.getMonth() + 1,
        year = temp.getFullYear();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;   

    return year + "-" + month + "-" + day;
}
//jshint esversion:6
exports.getDate=function (){
    let today = new Date();
    let options={
    month:"long",
    day:'numeric',
    weekday:"long"
    }
    return today.toLocaleDateString("en-US",options);

}

exports.getDay=function (){
    let today = new Date();
    let options={
    weekday:"long"
    }
    return today.toLocaleDateString("en-US",options);
}

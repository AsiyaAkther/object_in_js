// simple object example

var PersonInfo = {
    Name: 'Asiya Akther',
    Address: 'Sylhet',
    FathersName: 'Jomir Ali',
    Phone: '01877856263'
}
console.log(PersonInfo);
console.log("Asiya's phone no is " + PersonInfo.Phone);

// usign object multiple time
function StudentInfo(StdentName, StudentAddress, StudentPhn){
    this.StdentName = StdentName;
    this.StudentAddress = StudentAddress;
    this.StudentPhn = StudentPhn;
}

var NewObject = new StudentInfo("Asiya", "Sylhet", "01877856263");
console.log(NewObject);
console.log("Asiya's address is " + NewObject.StudentAddress);

//we dont'd need use console.log multiple time

function StdInfo(StdName, StdAddress, StdPhn){
    this.StdName = StdName;
    this.StdAddress = StdAddress;
    this.StdPhn = StdPhn;
    this.ShowInfo = function(){
        console.log(this.StdName);
        console.log(this.StdAddress);
        console.log(this.StdPhn);
    }
}
var NewObject = new StdInfo("Rumana", "Sylhet", "01877856663");
NewObject.ShowInfo();
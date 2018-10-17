// pre requires
var todosMain=document.getElementById('toDos');

// object for data
function Plan(title,location,time,date,dec)
{
    this.title=title;
    this.location=location;
    this.time=time;
    this.date=date;
    this.dec=dec;
}

// getData From localStorage
TData=localStorage.getItem('todos');

// make array
if(TData===null)
{
    var myData=[];
}
else{
 myData=JSON.parse(TData);
}

// save Data in Object
function SubmitBtnF()
{
    var title=document.getElementById('title').value;
    var location=document.getElementById('location').value;
    var time=document.getElementById('time').value;
    var date=document.getElementById('date').value;
    var dec=document.getElementById('dec').value;
    var abc=true;
    myData.map(function(){
        if(this.title==title)
        {
            abc=false;
        }
    })
    console.log(abc);

    var newPlan=new Plan(title,location,time,date,dec);
}
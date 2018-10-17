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
    this.comp='false';
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
    for(var i=0;i<myData.length;i++)
    {
        if(myData[i].title===title)
        {
        alert('Change title');
        return 0;
        }

    }
    var newPlan=new Plan(title,location,time,date,dec);
    myData.push(newPlan);
    saveData();
    changeTabes();  
}
// save data in localStorage
function saveData(){
    localStorage.setItem('todos',JSON.stringify(myData));
}

function loadHome(){
    toDos.innerHTML='';
    for(var i=0;i<myData.length;i++)
    {
        toDos.innerHTML+=`
    <div class="card-panel white-text waves-effect waves-light" onclick="openModel(event)">
                            <label>
                                <input type="checkbox" onclick='textLine(event,${i})' />
                                <span>
                                ${myData[i].title}
                                </span>
                            </label>
                            <a href="javascript:void(0)" class="white-text right close">
                                <i class="material-icons">
                                    close
                                </i>
                            </a>
                            <a href="javascript:void(0)" class="white-text right create">
                                <i class="material-icons">
                                    create
                                </i>
                            </a>
                        </div>
    `;
    }
}
// line Event
function textLine(event,i){
    console.log(myData[i].comp);
}
const posts=[
    {title:'post one', body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two', body:'this is post two',createdAt:new Date().getTime()}
]
let intervalId=0;
function getPost(){
    clearInterval(intervalId);
   intervalId= setInterval(()=>{
        let output='';
        posts.forEach((post,index) => {
            output+=`<li>${post.title}-last updated${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`;
            });
            document.body.innerHTML=output;
    },1000);
}
/*function createPost(post,callback){
    setTimeout(()=>{
       posts.push(post);
     },2000)
}
getPost();
createPost({title:'Post three',body:'this is post three',createdAt:''});*/

function create4thPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
            //callback();
        const error=false;
        if(!error){
            resolve();
        }
        else{
            reject('error');
        }
        },2000)
    })
   
}
function lastactivitytime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.lastactivitytime=new Date().getTime();
            resolve(posts.lastactivitytime)
        },1000)
    })
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           for(var i=0;i<posts.length;i++){
            
            if(posts.values!==0){
                resolve(posts.pop());
            }
            else{
                reject('no post found');
            }
        
           }
        },1000);
    })
 }

create4thPost({title:'post three',body:'this is post three'})
.then(()=>{
    getPost();
    
        deletePost().then(()=>{
            getPost();
        })
        .catch(err=>console.log(err));    
    

 })

 Promise.all([create4thPost,lastactivitytime,deletePost,getPost]).then((values)=>{
    console.log(values)
 } ) 
    


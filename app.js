document.addEventListener('DOMContentLoaded',()=>{
    const rows=document.querySelectorAll('.row')
    const score1=document.querySelector('#player1')
    const score2=document.querySelector('#player2')
    const timeleft1=document.querySelector('#time-left1')
    const timeleft2=document.querySelector('#time-left2')
    let player1time=300;
    let player2time=300;
    let chance=0;
    let diagonalCheck=new Map();
    diagonalCheck.set('row0','col0')
    diagonalCheck.set('row1','col1')
    diagonalCheck.set('row2','col2')
    diagonalCheck.set('row3','col3')
    diagonalCheck.set('row4','col4')
    diagonalCheck.set('row5','col5')
    diagonalCheck.set('row6','col6')
    diagonalCheck.set('row7','col7')
    diagonalCheck.set('row8','col8')
    diagonalCheck.set('row9','col9')

    const diagonalArray=["#col0","#col1","#co2","#col3","#col4","#col5","#col6","#col7","#col8","#col9"];

    let colvalue = new Map();
    colvalue.set('col0',10)
    colvalue.set('col1',9)
    colvalue.set('col2',8)
    colvalue.set('col3',7)
    colvalue.set('col4',6)
    colvalue.set('col5',5)
    colvalue.set('col6',4)
    colvalue.set('col7',3)
    colvalue.set('col8',2)
    let rowvalue=new Map()
    rowvalue.set('row1',2)
    rowvalue.set('row2',3)
    rowvalue.set('row3',4)
    rowvalue.set('row4',5)
    rowvalue.set('row5',6)
    rowvalue.set('row6',7)
    rowvalue.set('row7',8)
    rowvalue.set('row8',9)
    rowvalue.set('row9',10)
    const infoArray=[
        {
        row:"row0",
        col:["#col0"]
    },
    {
        row:"row1",
        col:["#col0","#col1"]
    },
    {
        row:"row2",
        col:["#col0","#col1","#col2"]
    },
    {
        row:"row3",
        col:["#col0","#col1","#col2","#col3"]
    },
    {
        row:"row4",
        col:["#col0","#col1","#col2","#col3","#col4"]
    },
    {
        row:"row5",
        col:["#col0","#col1","#col2","#col3","#col4","#col5"]
    },
    {
        row:"row6",
        col:["#col0","#col1","#col2","#col3","#col4","#col5","#col6"]
    },
    {
        row:"row7",
        col:["#col0","#col1","#col2","#col3","#col4","#col5","#col6","#col7"]
    },
    {
        row:"row8",
        col:["#col0","#col1","#col2","#col3","#col4","#col5","#col6","#col7","#col8"]
    },
    {
        row:"row9",
        col:["#col0","#col1","#col2","#col3","#col4","col5","#col6","#col7","#col8","#col9"]
    }]
    let r,id,index,indexr
  
    rows.forEach(row=>{
        row.addEventListener('mousedown',()=>{
            row.textContent="1 "
            id=row.getAttribute('id')
            index=id.slice(-1);
            r=row.getAttribute('class')
            r=r.split(" ")
            indexr=r[1].slice(-1);
            
                changeScore(id,r[1],index,indexr)
            

        
       

        },{once:true})

    })

     function changeScore(id,r,index){
        let horizontalScore=0;
        let veriticalScore=0;
        var count=0;
        const cols=document.querySelectorAll("#"+id)
        if(diagonalCheck.get(r)==id){
            const ro0=document.querySelectorAll('.row0')
            ro0.forEach(row0=>{
                if(row0.getAttribute('id')==diagonalCheck.get('row0')){
                      if(row0.textContent=="1 "){
                           count++;
                      }
                }
            })
            const ro1=document.querySelectorAll('.row1')
            ro1.forEach(row1=>{
                if(row1.getAttribute('id')==diagonalCheck.get('row1')){
                      if(row1.textContent=="1 "){
                           count++;
                      }
                }
            })
            
            const ro2=document.querySelectorAll('.row2')
            ro2.forEach(row2=>{
                if(row2.getAttribute('id')==diagonalCheck.get('row2')){
                      if(row2.textContent=="1 "){
                           count++;
                      }
                }
            })
            const ro3=document.querySelectorAll('.row3')
            ro3.forEach(row3=>{
                if(row3.getAttribute('id')==diagonalCheck.get('row3')){
                      if(row3.textContent=="1 "){
                           count++;
                      }
                }
            })
            const ro4=document.querySelectorAll('.row4')
            ro4.forEach(row4=>{
                if(row4.getAttribute('id')==diagonalCheck.get('row4')){
                      if(row4.textContent=="1 "){
                           count++;
                      }
                }
            })
            const ro5=document.querySelectorAll('.row5')
            ro5.forEach(row5=>{
                if(row5.getAttribute('id')==diagonalCheck.get('row5')){
                      if(row5.textContent=="1 "){
                           count++;
                      }
                }
            })
            const ro6=document.querySelectorAll('.row6')
            ro6.forEach(row6=>{
                if(row6.getAttribute('id')==diagonalCheck.get('row6')){
                      if(row6.textContent=="1 "){
                           count++;
                      }
                }
            })
            const ro7=document.querySelectorAll('.row7')
            ro7.forEach(row7=>{
                if(row7.getAttribute('id')==diagonalCheck.get('row7')){
                      if(row7.textContent=="1 "){
                           count++;
                      }
                }
            })
            const ro8=document.querySelectorAll('.row8')
            ro8.forEach(row8=>{
                if(row8.getAttribute('id')==diagonalCheck.get('row8')){
                      if(row8.textContent=="1 "){
                           count++;
                      }
                }
            })
            const ro9=document.querySelectorAll('.row9')
            ro9.forEach(row9=>{
                if(row9.getAttribute('id')==diagonalCheck.get('row9')){
                      if(row9.textContent=="1 "){
                           count++;
                      }
                }
            })
            
        }
        cols.forEach(row=>{
            if(row.textContent=="1 "){
                veriticalScore++;
            }
        })
        const funrow=document.querySelectorAll("."+r)
        funrow.forEach(row=>{
            if(row.textContent=='1 '){
                horizontalScore++;
            }
        })
        
                
         if(chance==0){
             chance=1;
             if(count==10){
                score1.textContent=parseInt(score1.textContent)+10;
             }else if((r=='row0'&&id=='col0')||(r=='row9'&&id=='col9')){
                 score1.textContent=parseInt(score1.textContent)+1;
             }else if(horizontalScore==rowvalue.get(r)&&veriticalScore==colvalue.get(id)){
                  score1.textContent=parseInt(score1.textContent)+Math.max(veriticalScore,horizontalScore);
             }else if(veriticalScore==colvalue.get(id)){
                 score1.textContent=parseInt(score1.textContent)+veriticalScore
             }else if(horizontalScore==rowvalue.get(r)){
                 score1.textContent=parseInt(score1.textContent)+horizontalScore
             }
            
        }else if(chance==1){
            chance=0;
            if(count==10){
                score2.textContent=parseInt(score2.textContent)+10;
            }else if((r=='row0'&&id=='col0')||(r=='row9'&&id=='col9')){
                score2.textContent=parseInt(score2.textContent)+1;
            }
            else if(horizontalScore==rowvalue.get(r)&&veriticalScore==colvalue.get(id)){
                score1.textContent=parseInt(score1.textContent)+Math.max(veriticalScore,horizontalScore);
           }else if(veriticalScore==colvalue.get(id)){
                score2.textContent=parseInt(score2.textContent)+veriticalScore
            }else if(horizontalScore==rowvalue.get(r)){
                score2.textContent=parseInt(score2.textContent)+horizontalScore
            }
            
        }
         
     }
    
     let countDown=setInterval(isOver,1000);
     function isOver(){
        if(chance==0){
          player1time--;
          timeleft1.textContent=player1time
        }else{
          player2time--;
          timeleft2.textContent=player2time
        }
        if(player1time<=10){
            timeleft1.setAttribute("style","color:darkred;")
        }else if(player2time<=10){
            timeleft2.setAttribute("style","color:darkred;")
        }
        if(player2time==-1){
            if(player1time!==0){
                timeleft2.textContent=0
              
            clearInterval(countDown)
            alert("congratulations player 1 won with score:"+score1.textContent)
            }
        }else if(player1time==-1){
            if(player2time!=0){
                timeleft1.textContent=0; 
                clearInterval(countDown)
          alert("congratulations player 2 won with score:"+score2.textContent)
        }
          
        }
}
     
     
     

})
   
   
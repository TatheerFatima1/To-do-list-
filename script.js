var getul = document.getElementById('ul')

function foo(){
  var a = document.getElementById('inp')
  var li = document.createElement('li')
   var litext = document.createTextNode(a.value)
   li.setAttribute('class','ggg')
   li.appendChild(litext)
   getul.appendChild(li)
   a.value =''
   var deletebtn = document.createElement('button')
   var deletebtntext =document.createTextNode('Delete')
   deletebtn.appendChild(deletebtntext)
   li.appendChild(deletebtn)
   deletebtn.setAttribute('onclick','del (this)')
   var editbtn = document.createElement('button')
   var editbtntext = document.createTextNode('Edit')
   editbtn.appendChild(editbtntext)
   li.appendChild(editbtn)
editbtn.setAttribute('onclick','editfun(this)')
deletebtn.setAttribute('class','btn aaa')
editbtn.setAttribute('class', 'btn aaa')
}
function deleteall() {
 getul.innerHTML=''
}
function del(e){
  e.parentNode.remove()
}
function editfun(e){
  var a = prompt ('enter edit value',e.parentNode.firstChild.nodeValue)
  
  e.parentNode.firstChild.nodeValue=a
}
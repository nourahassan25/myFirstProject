var bookmarkNameInpt=document.getElementById("bookmarkNameInpt");
var bookmarkUrlInpt=document.getElementById("bookmarkUrlInpt");

var bookmarks;

if(localStorage.getItem("myBookmarks")==null )
{
    bookmarks=[];

}
else
{
    bookmarks=JSON.parse(localStorage.getItem("myBookmarks"));
    displayBookmark();


}


function addBookmark()
{
    var y;
    var bookmark=
    {
        name:bookmarkNameInpt.value,
        url:bookmarkUrlInpt.value
    }
  
   bookmarks.push(bookmark);

   localStorage.setItem("myBookmarks", JSON.stringify(bookmarks));
    
   displayBookmark();
    clear();


}

function displayBookmark()
{
    var display=``;
   

    for(var i=0 ;i<bookmarks.length;i++)
    {
          display+=
            `<div id="tes" class="row firstItem">
              <h2 id="o">`+bookmarks[i].name+`</h2>
              <a href="`+bookmarks[i].url+`" class="btn btn-first mr-2">visit</a>
              <button class="btn btn-second mr-2" onclick="deleteBookmark(`+i+`)" >Delete</button>
              <button class="btn btn-first  " onclick="updateBookmark(`+i+`)" >Update</button>
                 </div>`;

    }

    document.getElementById("bookmarkList").innerHTML=display;
   // document.getElementById("firstbtn").innerHTML="submit";

  


         
}

function clear()
{
    bookmarkNameInpt.value="";
    bookmarkUrlInpt.value="";

}


function deleteBookmark(index)
{
        bookmarks.splice(index,1);
        localStorage.setItem("myBookmarks", JSON.stringify(bookmarks));

        displayBookmark();
    

}
function updateBookmark(indx)
{
    bookmarkNameInpt.value=bookmarks[indx].name;
    bookmarkUrlInpt.value=bookmarks[indx].url;

    var newButton=``;

    newButton+=`<button class="btn btn-second my-1" onclick="uppdatebutton(`+indx+`)">Update</button>`;
     document.getElementById("letTry").innerHTML=newButton;


    
}

function uppdatebutton(ind)
{
 
    bookmarks[ind].name= bookmarkNameInpt.value;
    bookmarks[ind].url= bookmarkUrlInpt.value;
    localStorage.setItem("myBookmarks", JSON.stringify(bookmarks));
    displayBookmark();


}





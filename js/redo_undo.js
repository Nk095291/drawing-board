var ActionHistory = {
    redo_list: [],
    
    undo_list: [],

    saveState: function(canvas, list, keep_redo) {
      keep_redo = keep_redo || false;
      if(!keep_redo) {
        this.redo_list = [];
      }
      (list || this.undo_list).push(canvas.toDataURL());   
    },
    
    undo: function(canvas, ctx) {
      this.restoreState(canvas, ctx, this.undo_list, this.redo_list);
    },
    
    redo: function(canvas, ctx) {
      this.restoreState(canvas, ctx, this.redo_list, this.undo_list);
    },
    
    restoreState: function(canvas, ctx,  pop, push) {
      if(pop.length) {
        this.saveState(canvas, push, true);
        var restore_state = pop.pop();
        var img = new Element('img', {'src':restore_state});
        img.onload = function() {
          ctx.clearRect(0,0,board.width,board.height);
          ctx.drawImage(img,0,0,board.width,board.height,0,0,board.width,board.height);  
        
          console.log("run")
        }
      }
    }
  }


  let undo = document.querySelector("#undo");
  let redo = document.querySelector("#redo");

  undo.addEventListener("click",function(){
    ActionHistory.undo(board,ctx);
  })

  redo.addEventListener("click",function(){
      ActionHistory.redo(board,ctx);
  })


  function KeyPress(e){
      let eventObject =e;
    
      
      if(eventObject.ctrlKey && (eventObject.key=='z' ||eventObject.key=='Z' ))
      {
    ActionHistory.undo(board,ctx);
        
      }
      else if(eventObject.ctrlKey && (eventObject.key=='y' ||eventObject.key=='Y' ))
      {
        ActionHistory.redo(board,ctx);

      }
  }

  document.onkeydown = KeyPress;
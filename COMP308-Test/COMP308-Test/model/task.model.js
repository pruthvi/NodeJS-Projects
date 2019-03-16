const mongoose = require('mongoose');
const schema = mongoose.Schema;


const taskschema = new schema({
    taskId:{
       type:String,
       required: true, 
       unique:true,
       minlength:3
   },
   taskName:{
       type:String,
       required:true,
       minlength:5
   },
   taskPriority:{
       type: Number,
       required: true,
       min: 22,
       max:33
     },
   taskDescription:{
       type:String,
       maxlength:50,
       set: function(mark) { /* custom setter method */
        if (mark) {
            //replace word 'password' with *** goablly within the string
            return mark.replace(/marks/g, "###");
        }
        return mark;
    }
    }
});


module.exports=mongoose.model("300965826", taskschema);

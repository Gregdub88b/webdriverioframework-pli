/***************************************************************************************/
/**
					place holder for framework reusable library
 **/
/****************************************************************************************/


const xlsx = require('../node_modules/xlsx');
//const myData;
module.exports = {
  excel_getRowCount : function (sheetName,rowCount){
    console.log("******Inside excel_getRowCount ******");
    const wb = xlsx.readFile("testdata.xlsx");
  
    const ws = wb.Sheets[sheetName];
      
    var range = xlsx.utils.decode_range(ws['!ref']); // get the range
   
  
    var  R = range.e.r;
    rowCount = R;
    
    return rowCount;
},



read_ExlVal : function (sheetName, colName,result){
  console.log("******Inside excel_getRowCount ******");
  const wb = xlsx.readFile("testdata.xlsx");
  
  const ws = wb.Sheets[sheetName];
    
  var range = xlsx.utils.decode_range(ws['!ref']); // get the range
 
  
  var C, R = range.s.r; 
  var col = C;       
              for(var C = range.s.c; C <= range.e.c; ++C) {
                /* find the cell object */
                console.log('Row : ' + R);
                console.log('Column : ' + C);
               
                var cellref = xlsx.utils.encode_cell({c:C, r:R}); // construct A1 reference for cell
               
                if(!ws[cellref]) continue; // if cell doesn't exist, move on
                var cell = ws[cellref];
             
                if (cell.v === colName) {
                  var col = xlsx.utils.encode_col(C);
                 
                  break;
                }

        };
        for (var R = range.s.r; R <= range.e.r; ++R ) {
         
        
          var newRowNum = R+1;
          var runModeCol = 'A';
          var address_of_cell = runModeCol+(R+1);
          
          
          var desired_cell = ws[address_of_cell];
         
         var desired_value = (desired_cell ? desired_cell.v : undefined);
        
          if (desired_value=== 'Yes') {
            var address_of_cell = col+newRowNum;
            desired_cell = ws[address_of_cell];
            desired_value = (desired_cell ? desired_cell.v : undefined);
            result = desired_value
       
            break;
    
          }
      
        }
        
        return result;
},

} // end of module

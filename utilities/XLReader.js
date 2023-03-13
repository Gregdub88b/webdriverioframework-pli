const excel = require('xlsx');

class XLReader {


    read_from_excel(file) {

        // Read data into var
        this.workbook = excel.readFile(file);


        console.log('Test');

        const list = this.workbook.SheetNames;

        for (let size = 0; size <= list.length; size++) {

            this.worksheet = this.workbook.Sheets[list[size]];
            this.workbook[size] = excel.utils.sheet_to_json(this.worksheet);

        }
        return this.workbook;
    }
}

module.exports = new XLReader();
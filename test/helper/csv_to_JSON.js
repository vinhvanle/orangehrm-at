import csvToJson from 'convert-csv-to-json';

// let fileInputName = '/data/convertcsv.csv';
// let fileOutputName = '/data/convertcsv.json';

function convert(fileInputName, fileOutputName) {
  csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
}

export default { convert };

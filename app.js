import randomstring from 'randomstring';
import {
    Chance
} from 'chance';
import fs from 'fs';


function genData(obj) {
    function genName() {
        return new Chance().first({
            nationality: 'it'
        });
    }

    function genLast() {
        let last = randomstring.generate({
            length: 5,
            charset: 'alphabetic',
            capitalization: 'lowercase'
        });
        return last.charAt(0).toUpperCase() + last.slice(1);
    }

    function genRate() {
        return Math.floor((Math.random() * 100) + 1);
    }

    if (obj) {
        obj.name = genName();
        obj.surname = genLast();
        obj.rate = genRate();
    }
    return obj;
}

function crtFile(path, jsn) {
    try {
        fs.writeFileSync(path, jsn);
        console.log('File Created!');
        return jsn;
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('File is NOT exist!');
        }
        console.log('Write file error');
    }
}

function rdFile(path, encdng) {
    let data;
    try {
        data = fs.readFileSync(path, encdng);
        console.log('File Read Successfully!');
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('File is NOT exist!');
        }
        console.log('Read file error');
    }
}

function appndFile(path, jsn) {
    try {
        if (fs.readFileSync(path, 'utf-8').length > 70) {
            let longJsn = fs.readFileSync(path, 'utf-8');
            let result = longJsn.substring(longJsn.indexOf("}") + 1, longJsn.length);
            console.log('Rewrite File Successfully!');
            fs.writeFileSync(path, '');
            fs.appendFileSync(path, result);
            return result;

        } else {
            fs.appendFileSync(path, jsn);
            console.log('Append To File Successfully!');
            return jsn;
        }

    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('File is NOT exist!');
        }
        console.log('Error overwriting file');
    }
}

function delFile(path) {
    try {
        fs.unlinkSync(path);
        console.log('File Successfully Deleted!');
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('File is NOT exist!');
        }
        console.log('Delete file error.');
    }
}

let student = {};
genData(student);
let jsnStr = JSON.stringify(student);
console.log(`First time generated object: ${jsnStr} \n`);
const filePath = 'jsnFile.json';

console.log(`Created with JSON: ${crtFile(filePath, jsnStr)} \n`);
let objFromFile = rdFile(filePath, 'utf-8');
console.log(`Data fom file: ${JSON.stringify(objFromFile)} \n`);
let jsnStr2 = genData(objFromFile);
console.log(`Changed with JSON: ${appndFile(filePath, JSON.stringify(jsnStr2))} \n`);
delFile(filePath);
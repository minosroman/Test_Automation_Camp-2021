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

function wrtFile(path, jsn) {
    try {
        fs.writeFileSync(path, jsn);
        console.log('File Saved Successfully!');
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

console.log(`Created with JSON: ${wrtFile(filePath, jsnStr)} \n`);
let objFromFile = rdFile(filePath, 'utf-8');
console.log(`Data fom file: ${JSON.stringify(objFromFile)} \n`);
let jsnStr2 = genData(objFromFile);
console.log(`Changed with JSON: ${wrtFile(filePath, JSON.stringify(jsnStr2))} \n`);
delFile(filePath);
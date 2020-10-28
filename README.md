# Smart Units Converter - Browser Extension

An extension that converts your selected values into popular units. Saves time, Makes life easier:dancer:

![MIT license](https://img.shields.io/badge/License-MIT-green.svg)
![GitHub issues](https://img.shields.io/github/issues/NCSU-S/units_converter_extension)
![GitHub pull requests](https://img.shields.io/github/issues-pr/NCSU-S/units_converter_extension)
![GitHub contributors](https://img.shields.io/github/contributors/NCSU-S/units_converter_extension)
[![Build Status](https://travis-ci.com/NCSU-S/units_converter_extension.svg?branch=master)](https://travis-ci.com/NCSU-S/units_converter_extension)
![Coveralls github](https://img.shields.io/coveralls/github/NCSU-S/units_converter_extension)
[![DOI](https://zenodo.org/badge/300009632.svg)](https://zenodo.org/badge/latestdoi/300009632)

Click on the image below to preview the working of the extension

[![Alt text](https://i.ytimg.com/vi/W4USPH2sBJw/hqdefault.jpg)](https://www.youtube.com/watch?v=W4USPH2sBJw&ab_channel=BhaveshAgrawal)

## Use Cases

- Convert $ to ¥ when you are shopping abroad
- Convert kilometers to miles when you are planning routes before driving
- Convert kilograms to pounds when you are buying food
- Convert celcius to fahrenheit when you are talking about weather
- Convert hours to seconds when you are calculating time

## Installation

- Clone the repository using ```git clone https://github.com/NCSU-S/units_converter_extension.git```
- In the chrome browser open ```chrome://extensions/```
- Enable developer settings if it is not enabled
- Choose Load Unpacked
- Select the repository folder that was cloned in the first step
![image](https://github.com/bhavesh242/units_converter_extension/blob/master/assets/Images/load%20unpacked.PNG)
- The extension will now be added to the Chrome
![image](https://github.com/bhavesh242/units_converter_extension/blob/master/assets/Images/Uploaded.PNG)
- Screenshot of working of the extension
![image](https://github.com/bhavesh242/units_converter_extension/blob/master/assets/Images/Example.PNG)

## Languages

- JavaScript
- HTML
- CSS

## Software Requirements

- Node.js
- NPM

## Style Checker and Analyzer

### Standard Js

Installation</b>
`npm install standard --global` in comand line interface to install globally
`npm install standard --save-dev` in command line interface to install locally

Running Standard Js</b>
go to root of project and type `standard` if StandardJs is installed globally
go to root of project and type `npx standard` if StandardJs is installed locally
Instead of installing it using npm, you can also use the extension available on VS Code

## IDE & Code Fomatter

- IDE: [VSCode](https://code.visualstudio.com/)

- Code Style Formatter: [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

- Code Syntax Checker : [Eslint](https://https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Vscode plugin.

VS Code uses js-beautify internally, but it lacks the ability to modify the style you wish to use. This extension enables running js-beautify in VS Code, AND honouring any .jsbeautifyrc file in the open file's path tree to load your code styling. Run with F1 Beautify (to beautify a selection) or F1 Beautify file.

## Test and Coverage

- Unit Test
  
  We use [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).

- Code Coverage
  
  We use [Istanbul](https://istanbul.js.org/) and [Coveralls](https://coveralls.io/)

## Automated Analysis Tool

- [DeepScan](https://deepscan.io/dashboard/#view=project&tid=11517&pid=14425&bid=268342&prid=&subview=overview)

<img width="1427" alt="deepScan" src="https://user-images.githubusercontent.com/54377114/97389563-fe9dd780-18b0-11eb-8203-b1ea489175c1.png">

## Documentation
- Using JSDoc to generate, click [here](https://github.com/jsdoc/jsdoc) for more information about JSDoc

- What: 

  We generate our own docs [here]( https://ncsu-s.github.io/units_converter_extension/)
  
  The classes and the functions descriptions is in our pages.
  
- Here is our feature model</br>

```xml
<!--  This model was created online using SPLOT's Feature Model Editor (http://www.splot-research.org) -->
<feature_model name="Unit Converter Extension">
    <feature_tree>
        :r Unit Converter Extension(_r)
            :m Length(_r_1)
            :m Mass(_r_3)
            :m Temperature(_r_4)
            :m Time(_r_5)
            :m Currency(_r_6)
            :m Area(_r_7)
            :m Datarate(_r_8)
            :m Speed(_r_10)
    </feature_tree>
    <constraints>
        constraint_1:_r_1 or _r_7
        constraint_2:_r_1 or _r_5 or _r_10
    </constraints>
</feature_model>
```

![feature_model](https://user-images.githubusercontent.com/54377114/97375975-8f18ef80-1892-11eb-9f56-aad931853218.png)

See more documentations here: [Units Converter Extension wiki](https://github.com/NCSU-S/units_converter_extension/wiki/Units-Converter-Extension-Documentation)

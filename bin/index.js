#!/usr/bin/env node

const { exec } = require('child_process');
const { readFileSync } = require('fs');
const args = process.argv.splice('2');
const runSetup = args[0] === "--setup";

if (runSetup) {
    const key = `"'(null) - Activate P2T MS Teams - runWorkflowAsService'"`;
    const value = `<dict>
        <key>key_equivalent</key>
        <string>@~^Space</string>
        <key>presentation_modes</key>
        <dict>
            <key>ContextMenu</key>
            <true/>
            <key>ServicesMenu</key>
            <true/>
            <key>TouchBar</key>
            <true/>
        </dict>
    </dict>`;
    const copyCmd = `cp -R ${__dirname}/../lib/Activate\\ P2T\\ MS\\ Teams.workflow ~/Library/Services/`;
    const setDefaultsCmd = `defaults write pbs.plist NSServicesStatus -dict-add ${key} '${value}'`;
    const resetCacheCmd = `killall -u $USER cfprefsd`;
    exec(`${copyCmd}; ${setDefaultsCmd}; ${resetCacheCmd};`, (err, stdout, stderr)=>{
        if(err || stdout || stderr) {
            console.info('Something went awry...', {err,stdout,stderr});
        }
    });
} else {
    let contents = JSON.stringify(readFileSync(`${__dirname}/../lib/index.js`, 'utf8'));
    let formattedString = contents.replace(/^"|\\n|\\|"$/g, '');
    console.log(formattedString);
}

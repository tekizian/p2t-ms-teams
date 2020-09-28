## P2T for Microsoft Teams
This package contains code that when executed within the console of a Microsoft Teams meeting window, will add "Push to Talk" functionality. **\*\*This feature requires developer mode to be active in Microsoft Teams\*\***

### Installation
Basic installation:
```
npm i -g p2t
```

**For MacOS users**

This package includes a bin command that will set up hotkeys via Automator. Once run, there should be a new Automator quick action that will activate developer mode and toggle p2t in an MS Teams window. To access this, run the following after basic installation:
```
p2t --setup
```
Since this command uses `defaults` to add this shortcut, it may be necessary to run with `sudo`. 

After this setup has been successfully performed on your Mac, pressing "⌘+⌥+^+Space" (Control+Option+Command+Space Bar) with a Microsoft Teams window focused will add/toggle the p2t functionality on that window and that window ONLY.

### Use
**Basic Use:**
- Running `p2t` in the command line should print the 
code for adding and toggling p2t functionality to stdout.
- The p2t activation/toggle code can also be found in `lib/index.js`.
- Pasting that code into the console of a meeting window should activate the p2t functionality.
- p2t functionality must be added to any new window each time you want to use it. This functionality is not stored or shared between windows.
  
**Advanced Use (MacOS only):**
- With the meetings window open and focused, press `⌘+⌥+^+Space` at the same time. 
- Once pressed, refrain from doing anything for a couple seconds.
- While the quick action is running, you should see the dock open up so that the MS Teams application can be forced into developer mode. Next, the devTools will open, this command will be pasted, executed, and finally, the devTools will close.

### Once Active
When this snippet is active in your meeting window, pressing down on the space bar will force the mic on. Lifting up on the space bar will force the mic off. When buttons or inputs on the window are selected, this functionality will be paused to allow for typing and pressing keyboard buttons.
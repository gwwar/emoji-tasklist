# Emoji Task List

A simple block to add task lists with an emoji twist.

```
✅ A done task
📌 Another task
📌 Another task
📌 Another task
```

#### Select from a few styles!

![styles](https://user-images.githubusercontent.com/1270189/53703713-18300880-3dca-11e9-82e5-b2b53b6c497a.gif)

#### Click to toggle!

![example](https://user-images.githubusercontent.com/1270189/53703840-216da500-3dcb-11e9-8558-c4196ad2dda7.gif)

#### Also supports `x` (done) and `o` (not done) shortcuts

![notdone](https://user-images.githubusercontent.com/1270189/53703863-5f6ac900-3dcb-11e9-9278-6de1deeeabb7.gif)


### How to Use

This is still a **WIP**. Right now I have the basics of a Task List put together with basic persistence and some styles!

- [x] Add Block Styling For All the Emoji
- [ ] Fix focus issues when removing/adding tasks via keyboard
- [ ] Pressing enter twice should break out to a paragraph block
- [ ] Add Ability to add custom styles for the emoji
- [ ] Consider embedding emoji SVG into post_content for better brower support
- [ ] Toggle values in post content from the front-end (optional?)

### Developing

To help develop this block:
1. Run WordPress locally
2. cd ~/wp-content/plugins
3. `git clone git@github.com:gwwar/emoji-tasklist.git`
4. `cd emoji-tasklist`
5. `npm start` to begin watching files
6. Don't forget to enable the plugin in wp-admin!

### Create Guten Block

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

#### 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

#### 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

#### 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.
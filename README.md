# Emoji Task List

A simple block to add task lists with an emoji twist.

```
✅ ~~A done task~~ 
📌 Another task
📌 Another task
📌 Another task
```

### How to Use

This is a WIP. Right now I have the basics of a Task List put together with basic persistence.

- [ ] Add Block Styling For All the Emoji
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

## 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

## 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.
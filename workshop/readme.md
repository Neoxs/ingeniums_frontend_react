# React workshop
We will build a very simple React app that demonstrates the concepts learned in this session.
<br>
<br>
Here's the source and a live demo of the end result.
<ul>
  <li>Source code</li>
  <li>Demo</li>
</ul>

## Setup and Installation
To set up `create-react-app`, run the following code in your terminal, one directory up from where you want the project to live.

```
npx create-react-app react-tutorial
```
Once that finishes installing, move to the newly created directory and start the project.
```
cd react-tutorial && npm start
```
Once you run this command, a new window will popup at `localhost:3000` with your new React app.
<br><br>
If you look into the project structure, you'll see a `/public` and `/src` directory, along with the regular `node_modules`, `.gitignore`, `README.md`, and `package.json`.

In `/public`, our important file is `index.html`, which is very similar to the static `index.html` file we made earlier - just a root div. This time, no libraries or scripts are being loaded in. The `/src` directory will contain all our React code.
<br><br>
To see how the environment automatically compiles and updates your React code, find the line that looks like this in `/src/App.js`:
````
To get started, edit `src/App.js` and save to reload.
````
And replace it with any other text. Once you save the file, you'll notice `localhost:3000` compiles and refreshes with the new data.

Go ahead and delete all the files out of the `/src` directory, and we'll create our own boilerplate file without any bloat. We'll just keep index.css and `index.js`.
<br><br>
For `index.css`, I just copy-and-pasted the contents of Primitive CSS into the file. If you want, you can use Bootstrap or whatever CSS framework you want, or nothing at all. I just find it easier to work with.
<p align="center">
  <img src="https://github.com/remarkablegames/littlejs-template/blob/master/public/logo192.png" alt="LittleJS Template">
</p>

# LittleJS Template

![release](https://img.shields.io/github/v/release/remarkablegames/littlejs-template)
[![build](https://github.com/remarkablegames/littlejs-template/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablegames/littlejs-template/actions/workflows/build.yml)

<kbd>littlejs-template</kbd> is a template for making [LittleJS](https://github.com/KilledByAPixel/LittleJS) games.

Play the game on:

- [remarkablegames](https://remarkablegames.org/littlejs-template/)

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm#readme)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablegames/littlejs-template.git
cd littlejs-template
```

Install the dependencies:

```sh
npm install
```

Rename the project:

```sh
git grep -l littlejs-template | xargs sed -i '' -e 's/littlejs-template/my-game/g'
git grep -l 'LittleJS Template' | xargs sed -i '' -e 's/LittleJS Template/My Game/g'
```

Update the files:

- [ ] `README.md`
- [ ] `package.json`
- [ ] `index.html`
- [ ] `public/manifest.json`
- [ ] `src/index.ts`

Initialize a new repository:

```sh
rm -rf .git
git init
```

Make your first commit:

```sh
git add .
git commit -m 'feat: initialize project from littlejs-template'
```

> [!NOTE]
> Commit messages follow [Conventional Commits](https://conventionalcommits.org/), which helps with release.

Once you're ready, [push the local repository to GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) (or another remote repository):

```sh
git remote add origin <remote-repository-url>
git push origin -u origin master
```

## Environment Variables

Set the environment variables:

```sh
less .env
```

Update the **Secrets** in the repository **Settings**.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the game in the development mode.

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

You will also see any errors in the console.

### `npm run build`

Builds the game for production to the `dist` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your game is ready to be deployed!

### `npm run bundle`

Builds the game and packages it into a Zip file in the `dist` folder.

Your game can be uploaded to your server, [Itch.io](https://itch.io/), [Newgrounds](https://www.newgrounds.com/), etc.

## License

[MIT](LICENSE)

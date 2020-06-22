6-15-20  Still having some trouble understanding the game index store logic, but feel that I'm coming closer to a much deeper and detailed relationship.

Previously, I jumped into what I know, skipped what was confusing, and addressed what concerned me most.

Curl scripts were what I understood.  Mostly and/or partly.

The game index store still confuses me, but it feels closer now to understanding.

The javascript concerned me the most.  I was having trouble learning how js worked and how to use it.  Conceptually I thought it was easy, but syntactually I wasn't tracking.

So, from the near top.

6-16-20
Going to work through the reading and the game.store.index items in order to recall a game.

6-20-20
Most of the ajax call setup is done.  Game data is being stored for each user.  Clicks are being counted.
I need to write lines for the rest of the get games data and then build out some checks for the boxes so they can't overwrite each other.
As a current player, I want to see whose turn it is.
As a user, I want to be able to see when a win occurs.

As a user, I want to be able to sign up.
After I have signed up, I want to be able to sign in.
As a user, I want to be able to play a new game.
After a game has been played to completion, or not, I want to be able to clear the board by starting a new game.
As a user, I want to be able to get an old game using the id.
As a user, I want to be able to get a game using the id of the game.


*** Still trying to merge the branches with the master.

6-21-20
Finally figured out how to merge with the master last night.
I encountered some new errors this morning.  Debugging now.
And then, as a user, I want to be able to track each game's state.

Trying to work through tracking my games and my game's states.  I'm hanging out in the handleCellPlayed function.  It must send it's information to the api and the form field.

1:30 now.  I think I need to setup my 'PATCH'.  Reading through the docs one more time...

Happy Father's Day!!!!  Dang.  That was a process from switchback hell.
Nearing the finish line though.  Fought process and understanding the whole way.  


1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace all instances of `ga-wdi-boston.browser-template` with the name of
    your project.
    - You can search for all instances of text in Atom by pressing
    `commant + shift + f` on Mac or `ctrl + shift + f` on WSL.
1. Move into the new project and `git init`.
1. Add all of the files in your project with the command `git add --all`.
      - **Note: This is the only time you should run this command!**
1. Commit all of your files with the command `git commit`.
      - Your commit title should read `Initial commit`.
1. Install dependencies with `npm install`.
1. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
1. Name the new repository with the same name used on Step 3.
1. Follow the instructions on your new repository's setup page. For details on
   how to push to Github, refer to the section on Github entitled "…or push an existing
   repository from the command line." Further documentation can be found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).

## Structure

### Scripts

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/app.js`](assets/scripts/app.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

### Config

Developers should set `apiUrls.production` and `apiUrls.development` in
[`assets/scripts/config.js`](assets/scripts/config.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

### Styles

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

### Forms and Using `getFormFields`

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

### Deployment

To deploy a browser-template based SPA, run `grunt deploy`.

## Adding Images

To add images to your project, you must store them in the `public` directory.
To use the image in HTML or CSS, write the path to the image like this:

```html
<img src="public/cat.jpg">
```
or
```css
#my-cool-div {
  background-image: url('public/cat.jpg')
}
```

Note that there's no `./` or `/` in front of `public/filename.jpg`.

## Adding Fonts

To add custom fonts to your app, you can either use a CDN like Google Fonts, or
you can download the fonts and save them in the `public` directory. If you use
the former method, follow the directions on the website providing the fonts.

For local fonts, put the files in `public`, and then import and use them in a
`.scss` file like this:

```scss
@font-face {
  font-family: 'Nature Beauty';
  src: url('public/Nature-Beauty.ttf') format('truetype');
}

.element-with-custom-font {
  font-family: 'Nature Beauty';
}
```

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them
- `grunt deploy`: builds and deploys master branch


## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

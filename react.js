// ============ JSX syntax ==============
/*
JSX is very much like Html in Js but with slight differences. This line below will pass as JSX

const heading = <h1>I am a heading</h1>;
(don't forget to end with the semi-colon as in normal Js, since it's more or less a Js decalaration).

If you have a long line of JSX, it's best to break it down into more than a line for readability. When your JSX code is more than a line, you wrap it in parenthesis. An example is given below

const heading = (
  <div>
    <h1>I am a heading</h1>
  </div>
);

Note that you can nest elements just as in html. However there can only be one outermost element. The folowing example does not work:

const heading = (
  <h1>I am a big heading</h1>
  <h2>I am slightly smaller</h2>
);

This works instead:

const heading = (
  <div>
    <h1>I am a big heading</h1>
    <h2>I am slightly smaller</h2>
  </div>
);
the closing tag must correspond to the tag the opening tag

JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go.

That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array…you name it.

Here’s an example of a JSX element being saved in a variable:

const navBar = <nav>I am a nav bar</nav>;

Here’s an example of several JSX elements being stored in an object:

const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};

You can attribute a JSX element just as in html.
Self closing tags must have the end slash(/) as in <img />.


JSX is rendered with ReactDOM.render(a, b); where 'a' is the JSX expression, and 'b' is the conteainer for 'a'.

there is a setAttribute() method in react. First argument is name of the atrribute and second is the value of the attribute.

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

You can call the above function as an event listener in JSX. e.g
<img onclick={makeDoggy} />
*/
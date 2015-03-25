# Personal Website

This is my updated personal website. You can see the live version [here](http://jonlai.com/).

### Running a Local Copy

To run a local copy, `cd` to the root directory and run:
```
python server.py
```
This starts a local server for the directory. You can then view my site at
the port 8000; if you desire, you can change the port in `server.py`. The 
default `SimpleHTTPServer` isn't adequate because the local server needs to 
redirect to index if a file wasn't found. With the redirecting server script,
Backbone's router can then handle all the file paths.

### Included 3rd Party Libraries

I am currently using Backbone.js and Require.js for the framework of my website.
In the future I plan to incorporate r.js, Require's optimizer, to minify my 
modules and increase performance. I also have plans to use Prerender.io to 
increase my website's SEO.

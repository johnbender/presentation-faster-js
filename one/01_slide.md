!SLIDE
<h1>Faster JavaScript <div style="font-size: 0.6em">with</div> Category Theory</h1>
johnbender.github.com/presentation-faster-js

!SLIDE bullets mono-bullets>
## me
* @johnbender
* johnbender.us
* github.com/johnbender

!SLIDE center adobe-background background-image
## jquery mobile

!SLIDE center adobe-background background-image
## rubyists
#### kstewart.me/2012/04/21/ruby-at-adobe.html

!SLIDE image center
# Motivation

!SLIDE center awesome-background background-image
<h2 class="over-image" style="margin-top: 35%;">math: it's great</h2>

!SLIDE image center stats-background background-image
<h2 class="over-image" style="margin-top: 35%;">jquery: it's popular</h2>

!SLIDE center speed-background background-image
<h2 class="over-image" style="margin-top: 35%;">speed: it's sexy</h2>

!SLIDE
## method chains

!SLIDE
<pre class="xsmall">
jQuery( <span class="string">"div"</span> )
  .hide()
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<pre class="xsmall">
jQuery( <span class="string">"div"</span> )
  <b>.hide()</b>
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).hide();</code></div>
<pre class="medium">
<span class="keyword">var</span> <span class="variable-name">$divs</span> = $( <span class="string">"div"</span> );

$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.<b>setAttribute( <span class="string">"style"</span>, <span class="string">"display: none;"</span> );</b>
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<pre class="xsmall">
jQuery( <span class="string">"div"</span> )
  .hide()
  <b>.addClass( <span class="string">"foo"</span> )</b>
  .show();
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" );</code></div>
<pre>
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.<b>setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );</b>
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<pre class="xsmall">
jQuery( <span class="string">"div"</span> )
  .hide()
  .addClass( <span class="string">"foo"</span> )
  <b>.show();</b>
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).show();</code></div>
<pre class="medium">
<span class="keyword">var</span> <span class="variable-name">$divs</span> = $( <span class="string">"div"</span> );

$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.<b>setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );</b>
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<pre class="xsmall">
jQuery( <span class="string">"div"</span> )
  <b>.hide()</b>
  <b>.addClass( <span class="string">"foo"</span> )</b>
  <b>.show();</b>
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).hide().addClass( "foo" ).show();</code></div>
<pre class="medium">
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: none;"</span> );
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).hide().addClass( "foo" ).show();</code></div>
<pre class="medium">
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: none;"</span> );
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});</pre>
<div class="gigantor" style="color: red; font-size: 30em; padding-top: 17%">☹☹</div>


!SLIDE
# Category Theory

!SLIDE center background-image e-ml-background
<h2 class="over-image"  style="margin-top: 35%;">context: it's useful</h2>
.notes Samuel Eilenberg and Saunders Mac Lane

!SLIDE
## what's a category?

!SLIDE center image
<img src="category.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
### identity

!SLIDE center image
<img src="identity.png" style="width: 80%; margin-top: 10%"></img>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">id</span>( <span class="js2-function-param">a</span> ) {
  <span class="keyword">return</span> a;
}
</pre>

!SLIDE
### composition

!SLIDE center image
<img src="closed-composition.png" style="width: 80%; margin-top: 10%"></img>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param">a</span> ) {
    <span class="keyword">return</span> f(g(a));
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <b><span class="js2-function-param">f</span>, <span class="js2-function-param">g</span></b> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param">a</span> ) {
    <span class="keyword">return</span> f(g(a));
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param"><b>a</b></span> ) {
    <span class="keyword">return</span> f(g(<b>a</b>));
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param">a</span> ) {
    <span class="keyword">return</span> f(<b>g(a)</b>);
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>( <span class="js2-function-param">a</span> ) {
    <span class="keyword">return</span> <b>f(g(a))</b>;
  };
}
</pre>

!SLIDE
## Html

!SLIDE
### objects

!SLIDE
<pre>
<span class="comment">// {HTMLDivElement}</span>
document.querySelector( <span class="string">"div#sample"</span> <span class="js2-magic-paren">);</span>
</pre>

!SLIDE
### morphisms

!SLIDE
<pre>
<span class="comment">// @param {HTMLElement} elem
// @returns {HTMLElement}</span>
<span class="keyword">function</span>( <span class="js2-function-param">elem</span> ) {
  <span class="keyword">return</span> elem;
};

</pre>

!SLIDE
<pre>
<span class="comment">// @param {HTMLElement} elem
// @returns {HTMLElement}
</span><span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
}
</pre>


!SLIDE
### identity

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">id</span>( <span class="js2-function-param">a</span> ) {
  <span class="keyword">return</span> a;
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">id</span>( <span class="js2-function-param"><b>a</b></span> ) {
  <span class="keyword">return</span> <b>a</b>;
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">id</span>( <span class="js2-function-param"><b>elem</b></span> ) {
  <span class="keyword">return</span> <b>elem</b>;
}
</pre>

!SLIDE
### composition

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>(<span class="js2-function-param">a</span>) {
    <span class="keyword">return</span> f(g(a));
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>(<span class="js2-function-param"><b>a</b></span>) {
    <span class="keyword">return</span> f(g(<b>a</b>));
  };
}
</pre>

!SLIDE
<pre class="xsmall">
<span class="keyword">function</span> <span class="function-name">cmps</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>(<span class="js2-function-param"><b>elem</b></span>) {
    <span class="keyword">return</span> f(g(<b>elem</b>));
  };
}
</pre>

!SLIDE
## Jqry

!SLIDE
### objects

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> );
</pre>

!SLIDE
### morphisms

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> )<b>.hide();</b>
</pre>

!SLIDE
### identity

!SLIDE
<pre class="small">
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">id</span> = <span class="keyword">function</span>() {
  <span class="keyword">return</span> <span class="builtin">this</span>;
};
</pre>

!SLIDE
<pre class="small">
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">id</span> = <span class="keyword">function</span>() {
  <b><span class="keyword">return</span> <span class="builtin">this</span>;</b>
};
</pre>

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> )<b>.id()</b>;
</pre>

!SLIDE
### composition

!SLIDE
<pre style="font-size: 3.6em;">
<span class="js2-external-variable">jQuery</span>.<span class="function-name">cmps</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>() {
    <span class="keyword">return</span> f.apply(g.apply(<span class="builtin">this</span>));
  };
};
</pre>

!SLIDE
<pre style="font-size: 3.6em;">
<span class="js2-external-variable">jQuery</span>.<span class="function-name">cmps</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>() {
    <span class="keyword">return</span> f.apply(g.apply(<span class="builtin"><b>this</b></span>));
  };
};
</pre>

!SLIDE
<pre style="font-size: 3.6em;">
<span class="js2-external-variable">jQuery</span>.<span class="function-name">cmps</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>() {
    <span class="keyword">return</span> f.apply(<b>g.apply(<span class="builtin">this</span>)</b>);
  };
};
</pre>

!SLIDE center background-image mind-gap-background
## functor

!SLIDE
### objects

!SLIDE center image
<img src="ob-html.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE
<pre>
<span class="comment">// {HTMLDivElement}</span>
document.querySelector( <span class="string">"div"</span> <span class="js2-magic-paren">);</span>
</pre>

!SLIDE
<pre>
<span class="comment">// {jQuery}</span>
$( document.querySelector( <span class="string">"div"</span> <span class="js2-magic-paren">)</span>);
</pre>

!SLIDE
<pre>
<span class="comment">// {jQuery}</span>
<b>$</b>( document.querySelector( <span class="string">"div"</span> <span class="js2-magic-paren">)</span> );
</pre>

!SLIDE
<pre>
<span class="comment">// {jQuery}</span>
<b>jQuery</b>( document.querySelector( <span class="string">"div"</span> <span class="js2-magic-paren">)</span> );
</pre>

!SLIDE
### morphisms

!SLIDE center image
<img src="hom-html.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE
<pre style="padding-left: 50px;">
<span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
}





</pre>

!SLIDE
<pre style="padding-left: 50px;">
<span class="keyword">function</span> <span class="function-name">setFoo</span>( <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
}
</pre>

<div class="centered-arrow" style="margin-top: 50px; font-size: 18em">↓</div>

<pre style="margin-top: 215px; padding-left: 200px;">
$( <span class="string">"div"</span> ).setFoo();
</pre>

!SLIDE
<pre>
jQuery.map( $(<span class="string">"div"</span>), <span class="keyword">function</span>( <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<pre>
<b>jQuery.map</b>( $(<span class="string">"div"</span>), <span class="keyword">function</span>( <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE center
<img src="ob-html.png" style="width: 95%; margin-bottom: 0; margin-top: 10%;"></img>
<pre style="font-size: 7em; color: #111">
$()
</pre>

!SLIDE center
<img src="hom-html.png" style="width: 95%; margin-bottom: 0; margin-top: 10%;"></img>
<pre style="font-size: 7em; color: #111">
jQuery.map()
</pre>

!SLIDE
### composition

!SLIDE center image
<img src="composition.png" style="width: 95%; margin-top: 15%"></img>

!SLIDE center image
<img src="composition.png" style="width: 95%; margin-top: 15%"></img>

!SLIDE center
<pre class="small">
$( <span class="string">"div"</span> ).map(f).map(g)
==
$( <span class="string">"div"</span> ).map( cmps(f, g) )
</pre>

!SLIDE center
<pre class="small">
$( <span class="string">"div"</span> ).<b>map(f).map(g)</b>
==
$( <span class="string">"div"</span> ).map( cmps(f, g) )
</pre>

!SLIDE center
<pre class="small">
$( <span class="string">"div"</span> ).<b>map(f).map(g)</b>
==
$( <span class="string">"div"</span> ).<b>map( cmps(f, g) )</b>
</pre>

!SLIDE
## enlightenment

!SLIDE
<pre class="xsmall">
jQuery( <span class="string">"div"</span> )
  .hide()
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<pre class="xsmall">
jQuery( <span class="string">"div"</span> )
  <b>.hide()</b>
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<pre class="xsmall">
jQuery( <span class="string">"div"</span> )
  .addClass( <span class="string">"foo"</span> )
  .show();
</pre>

!SLIDE
<pre class="xsmall">
jQuery( <span class="string">"div"</span> )
  <b>.addClass( <span class="string">"foo"</span> )</b>
  <b>.show();</b>
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
});

$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <b>elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );</b>
  <span class="keyword">return</span> elem;
});

$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <b>elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );</b>
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <b>elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );</b>
  <b>elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );</b>
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <b>elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );</b>
  <b>elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );</b>
  <span class="keyword">return</span> elem;
});
</pre>
<div class="gigantor" style="color: red; font-size: 30em; padding-top: 17%">☹☹</div>


!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
});

$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
<span class="keyword">var</span> <span class="function-name">g</span> = <span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
};

<span class="keyword">var</span> <span class="function-name">f</span> = <span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
};
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});
</pre>

<div class="centered-arrow" style="margin-top: 50px; font-size: 18em">↓</div>

<pre class="large" style="text-align: center; margin-top: 200px">
$divs.map( cmps(f, g) );
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="large">
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});
</pre>

<div class="centered-arrow" style="z-index: 1; margin-top: 50px; font-size: 18em">↓</div>

<pre class="large" style="text-align: center; margin-top: 200px">
$divs.map( cmps(f, g) );
</pre>

<div class="gigantor" style="z-index: 2; text-align: left; width: 150%; left: -100px; color: green; font-size: 45em; padding-top: 0%; letter-spacing: -0.3em">☺☺</div>

!SLIDE
# back to reality

!SLIDE
## standard

!SLIDE center
<pre style="font-size: 15em">$.fn</pre>

!SLIDE center
<pre style="font-size: 6em">$.fn.a.composable</pre>

!SLIDE
<pre>
<span class="keyword">var</span> <span class="function-name"><span class="js2-warning">g</span></span> = <span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
};
</pre>

!SLIDE
<pre class="small">
<span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">g</span> = <span class="keyword">function</span>(){
  <span class="keyword">return</span> <span class="builtin">this</span>.map(g);
};
</pre>

!SLIDE
<pre class="small">
jQuery.fn.g.composable = g;
</pre>

!SLIDE
<pre class="xsmall">
$( <span class="string">"div"</span> ).<b>f().g()</b>;
</pre>

!SLIDE
<pre class="large">
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
});

$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );
  <span class="keyword">return</span> elem;
});
</pre>


!SLIDE
<pre>
<span class="keyword">var</span> <span class="variable-name">fAndG</span> = cmps( $.fn.f.composable,
                  $.fn.g.composable );

$( <span class="string">"div"</span> ).map( fAndG );</pre>

!SLIDE
<pre>
<span class="keyword">var</span> <span class="variable-name">fAndG</span> = <b>cmps( $.fn.f.composable,</b>
                  <b>$.fn.g.composable );</b>

$( <span class="string">"div"</span> ).map( fAndG );</pre>

!SLIDE
<pre>
<span class="keyword">var</span> <span class="variable-name">fAndG</span> = cmps( $.fn.f.composable,
                  $.fn.g.composable );

$( <span class="string">"div"</span> ).<b>map( fAndG )</b>;</pre>

!SLIDE center
## reading

<div style="font-size: 1.7em; margin-bottom: 20px;">johnbender.us/2012/02/29/faster-javascript-through-category-theory</div>
<div style="font-size: 1.7em">johnbender.us/2012/03/22/a-natural-transformation-in-javascript</div>

!SLIDE bullets mono-bullets>
# Thanks
* @johnbender
* johnbender.us
* github.com/johnbender

!SLIDE link
<h1 style="font-size: 7em">Faster jQuery <div style="font-size: 0.6em">with</div> Category Theory</h1>
<span style="font-size: 1.1em">johnbender.github.com/presentation-faster-js</span>

!SLIDE bullets mono-bullets
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
  <b>elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: none;"</span> );</b>
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
  <b>elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );</b>
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
$divs.map(<span class="keyword">function</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  <b>elem.setAttribute( <span class="string">"style"</span>, <span class="string">"display: block;"</span> );</b>
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

!SLIDE center background-image e-ml-background
<h2 class="over-image"  style="margin-top: 35%; min-height: 96px;">
  <span style="float: left; margin-left: 20px;">Eilenberg</span>
  <span style="float: right; margin-right: 20px;">Mac Lane</span>
</h2>
.notes Samuel Eilenberg and Saunders Mac Lane

!SLIDE
## category?

!SLIDE center image
<img src="category-simple.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE center image
<img src="identity.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre class="xxsmall">
<span class="keyword">function</span> <span class="function-name">id</span>( <span class="js2-function-param">a</span> ) {
  <span class="keyword">return</span> a;
}
</pre>

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

!SLIDE center image
<img src="ob-simple.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre>
<span class="comment">// {HTMLDivElement}</span>
document.querySelector( <span class="string">"div#sample"</span><span class="js2-magic-paren"> );</span>
</pre>

!SLIDE center image
<img src="hom-simple.png" style="width: 90%; margin-top: 25%"></img>

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


!SLIDE center image
<img src="identity.png" style="width: 90%; margin-top: 25%"></img>


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

!SLIDE center image
<img src="composition-simple.png" style="width: 90%; margin-top: 25%"></img>

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

!SLIDE center image
<img src="ob-jqry.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> );
</pre>

!SLIDE center image
<img src="hom-jqry.png" style="width: 90%; margin-top: 25%"></img>

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> )<b>.hide();</b>
</pre>

!SLIDE center image
<img src="identity.png" style="width: 90%; margin-top: 25%"></img>

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
</span><b><span class="js2-external-variable">jQuery</span>.fn</b>.<span class="function-name">id</span> = <span class="keyword">function</span>() {
  <span class="keyword">return</span> <span class="builtin">this</span>;
};
</pre>

!SLIDE
<pre class="small">
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">id</span> = <span class="keyword">function</span>() {
  <span class="keyword">return</span> <b><span class="builtin">this</span></b>;
};
</pre>

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> ).id();
</pre>

!SLIDE
<pre class="xsmall">
<span class="comment">// {jQuery}</span>
$( <span class="string">"#sample"</span> )<b>.id()</b>;
</pre>

!SLIDE center image
<img src="composition-simple.png" style="width: 90%; margin-top: 25%"></img>

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
<span class="js2-external-variable">jQuery</span>.<span class="function-name">cmps</span> = <span class="keyword">function</span>( <b><span class="js2-function-param">f</span>, <span class="js2-function-param">g</span></b> ) {
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

!SLIDE
<pre style="font-size: 3.6em;">
<span class="js2-external-variable">jQuery</span>.<span class="function-name">cmps</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">return</span> <span class="keyword">function</span>() {
    <span class="keyword">return</span> <b>f.apply(g.apply(<span class="builtin">this</span>))</b>;
  };
};
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <span class="variable-name">g</span> = <span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">g</span> = <span class="keyword">function</span>() {
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};

<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <span class="variable-name">f</span> = <span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">f</span> = <span class="keyword">function</span>(){
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <span class="variable-name"><b>g</b></span> = <b><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">g</span></b> = <span class="keyword">function</span>() {
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};

<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <b><span class="variable-name">f</span></b> = <b><span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">f</span></b> = <span class="keyword">function</span>(){
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <span class="builtin">this</span>;
};
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <span class="variable-name">g</span> = <span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">g</span> = <span class="keyword">function</span>() {
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <b><span class="builtin">this</span></b>;
};

<span class="comment">// @returns {jQuery}
</span><span class="keyword">var</span> <span class="variable-name">f</span> = <span class="js2-external-variable">jQuery</span>.fn.<span class="function-name">f</span> = <span class="keyword">function</span>(){
  <span class="comment">// manipulate `this`
</span>  <span class="keyword">return</span> <b><span class="builtin">this</span></b>;
};
</pre>


!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( f, g );

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).g().f();

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).gf();
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( <b>f, g</b> );

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).g().f();

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).gf();
</pre>

!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn<b>.gf</b> = jQuery.cmps( f, g );

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).g().f();

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> ).gf();
</pre>


!SLIDE
<pre>
<span class="comment">// @returns {jQuery}
</span><span class="js2-external-variable">jQuery</span>.fn.gf = jQuery.cmps( f, g );

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> )<b>.g().f()</b>;

<span class="comment">// {jQuery}
</span>$( <span class="string">"#sample"</span> )<b>.gf()</b>;
</pre>

!SLIDE center background-image
## functor

!SLIDE center image
<img src="functor.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE center image
<img src="functor-two-things.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE center image
<img src="ob-html.png" style="width: 95%; margin-top: 30%"></img>

!SLIDE
<pre>
<span class="comment">// {HTMLDivElement}</span>
document.querySelector( <span class="string">"div"</span><span class="js2-magic-paren"> );</span>
</pre>

!SLIDE
<pre>
<span class="comment">// {jQuery}</span>
$( document.querySelector(<span class="string">"div"</span><span class="js2-magic-paren">)</span> );
</pre>

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

!SLIDE center
<pre class="small">
$( <span class="string">"div"</span> ).map(g).map(f)
==
$( <span class="string">"div"</span> ).map( cmps(f, g) )
</pre>

!SLIDE center
<pre class="small">
$( <span class="string">"div"</span> ).<b>map(g).map(f)</b>
==
$( <span class="string">"div"</span> ).map( cmps(f, g) )
</pre>

!SLIDE center
<pre class="small">
$( <span class="string">"div"</span> ).<b>map(g).map(f)</b>
==
$( <span class="string">"div"</span> ).<b>map( cmps(f, g) )</b>
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">$</span>.fn.<span class="function-name">F</span> = <span class="keyword">function</span>(){
  <span class="keyword">return</span> <span class="builtin">this</span>.map(f);
};

<span class="js2-external-variable">$</span>.fn.<span class="function-name">G</span> = <span class="keyword">function</span>(){
  <span class="keyword">return</span> <span class="builtin">this</span>.map(g);
};
</pre>


!SLIDE center
<pre class="small">
$( <span class="string">"div"</span> ).<b>G().F()</b>
==
$( <span class="string">"div"</span> ).map( cmps(f, g) )
</pre>

!SLIDE center
<pre class="small">
$( <span class="string">"div"</span> ).<b>G().F()</b>
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
<span class="keyword">function</span> <span class="function-name">g</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
};

<span class="keyword">function</span> <span class="function-name">f</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
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

<div class="centered-arrow" style="z-index: 1; margin-top: 50px; font-size: 18em">↓</div>

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
$divs.map( <b>cmps(f, g)</b> );
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
$divs.map( <b>cmps(f, g)</b> );
</pre>

<div class="gigantor" style="z-index: 2; text-align: left; width: 150%; left: -100px; color: green; font-size: 45em; padding-top: 0%; letter-spacing: -0.3em">☺☺</div>

!SLIDE
# Meanwhile

!SLIDE center background-image facepalm-background
<h2 class="over-image" style="margin-top: 35%;">timing: it's everything</h2>

!SLIDE
## standard

!SLIDE center
<pre style="font-size: 8em">$.fn.addClass</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" );</code></div>
<pre>
<span class="js2-external-variable">$</span>.fn.<span class="function-name">addClass</span> = <span class="keyword">function</span>(){
  <span class="keyword">return</span> <span class="builtin">this</span>.map(<span class="keyword">function</span>( elem ) {
    elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
    <span class="keyword">return</span> elem;
  });
};
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" );</code></div>
<pre>
<span class="js2-external-variable">$</span>.fn.<span class="function-name">addClass</span> = <span class="keyword">function</span>(){
  <span class="keyword">return</span> <span class="builtin">this</span>.map(<span class="keyword"><b>function</b></span>( elem ) {
    elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
    <span class="keyword">return</span> elem;
  });
};
</pre>

!SLIDE
<pre>
<span class="keyword">function</span> <span class="function-name">addClass</span>( <span class="js2-function-param">i</span>, <span class="js2-function-param">elem</span> ) {
  elem.setAttribute( <span class="string">"class"</span>, <span class="string">"foo"</span> );
  <span class="keyword">return</span> elem;
};
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" );</code></div>
<pre class="small">
<span class="js2-external-variable">$</span>.fn.<span class="function-name">addClass</span> = <span class="keyword">function</span>(){
  <span class="keyword">return</span> <span class="builtin">this</span>.map(addClass);
};
</pre>

!SLIDE
<pre>
$.fn.addClass.composable = addClass;
</pre>

!SLIDE
<pre>
$.fn.addClass.<b>composable</b> = addClass;
</pre>

!SLIDE
## sample

!SLIDE
<pre>
$( <span class="string">"div"</span> ).addClass( "foo" ).show();
</pre>

!SLIDE
<pre class="small">
<span class="js2-external-variable">$</span>.fn.<span class="function-name">addClass</span> = <span class="keyword">function</span>(){
  <span class="keyword">return</span> <span class="builtin">this</span>.map(addClass);
};
</pre>

<pre class="small">
<span class="js2-external-variable">$</span>.fn.<span class="function-name">show</span> = <span class="keyword">function</span>(){
  <span class="keyword">return</span> <span class="builtin">this</span>.map(show);
};
</pre>

!SLIDE

<pre class="small">
<span class="js2-external-variable">$</span>.fn.<span class="function-name">addClass</span> = <span class="keyword">function</span>(){
  <span class="keyword">return</span> <span class="builtin">this</span>.map(<b>addClass</b>);
};
</pre>

<pre class="small">
<span class="js2-external-variable">$</span>.fn.<span class="function-name">show</span> = <span class="keyword">function</span>(){
  <span class="keyword">return</span> <span class="builtin">this</span>.map(<b>show</b>);
};
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="small">
$( <span class="string">"div"</span> ).map(
  $.fn.show.composable,
  $.fn.addClass.composable
);
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="small">
$( <span class="string">"div"</span> ).map(
  <b>$.fn.show.composable</b>,
  <b>$.fn.addClass.composable</b>
);
</pre>

!SLIDE
## simple helper

!SLIDE
<pre>
<span class="js2-external-variable">$</span>.fn.<span class="function-name">compose</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">if</span>( f.composable &amp;&amp; g.composable ){
    <span class="keyword">return</span> <span class="builtin">this</span>.map( cmps( f, g) );
  }

  <span class="keyword">throw</span> <span class="string">"Oops!"</span>;
};
</pre>


!SLIDE
<pre>
<span class="js2-external-variable">$</span>.fn.<span class="function-name">compose</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">if</span>( <b>f.composable &amp;&amp; g.composable</b> ){
    <span class="keyword">return</span> <span class="builtin">this</span>.map( cmps( f, g) );
  }

  <span class="keyword">throw</span> <span class="string">"Oops!"</span>;
};
</pre>

!SLIDE
<pre>
<span class="js2-external-variable">$</span>.fn.<span class="function-name">compose</span> = <span class="keyword">function</span>( <span class="js2-function-param">f</span>, <span class="js2-function-param">g</span> ) {
  <span class="keyword">if</span>( f.composable &amp;&amp; g.composable ){
    <span class="keyword">return</span> <span class="builtin">this</span>.map( <b>cmps( f, g)</b> );
  }

  <span class="keyword">throw</span> <span class="string">"Oops!"</span>;
};
</pre>

!SLIDE
<div class="file-name"><code>$( "div" ).addClass( "foo" ).show();</code></div>
<pre class="xsmall">
$( <span class="string">"div"</span> ).compose(
  $.fn.show,
  $.fn.addClass
);</pre>

!SLIDE
### github
github.com/johnbender/jquery-lazy-proxy

!SLIDE center
# Reading

<div style="font-size: 1.7em; margin-bottom: 20px;">johnbender.us/2012/02/29/faster-javascript-through-category-theory</div>
<div style="font-size: 1.7em">johnbender.us/2012/03/22/a-natural-transformation-in-javascript</div>

!SLIDE bullets mono-bullets>
# Thanks
* @johnbender
* johnbender.us
* github.com/johnbender
